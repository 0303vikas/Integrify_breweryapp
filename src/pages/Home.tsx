import React, { useState, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import NavigationBar, {BottomNavigationBar} from '../components/NavigationBar'

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