/**
 * @File Home Page
 * @author Vikas Singh 
 */
import React, { useState, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import NavigationBar, {BottomNavigationBar} from '../components/NavigationBar'
/**
 * @description Main Display Page 
 * @returns renders main page
 * @notes 
 * - Main Data is replaced With <OutLet> 
 * - useEffect is a debouce function on search input
 * - searchString is passed as context through OutLet context, which is later used in withLoading
 * - handleSearch sets data and navigates back to the home page,
 */
export const Home = () => {
    const [searchValue, setSearchValue] = useState('')
    const [searchString, setSearchString] = useState<string>('')
    let navigate = useNavigate()    

    useEffect(() => {
        let timeOut: NodeJS.Timeout
        timeOut = setTimeout(() => {           
            setSearchString(searchValue)
        }, 1000)
        return () => clearTimeout(timeOut)
    },[searchValue])  

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value)
        if(window.location.href !=='/') {
            navigate('/')
        }            
    }

    return(
        <main>
            <header>
                <NavigationBar handleSearch={handleSearch} />
            </header>
            <section>
                <Outlet context={{searchString}}/>
            </section>
            <footer>
                <BottomNavigationBar />
            </footer>

        </main>
    )
}