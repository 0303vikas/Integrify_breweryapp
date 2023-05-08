import React, { useState, useEffect } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

// const debourceSearch = (value: string,setSearchValue: React.Dispatch<React.SetStateAction<string>>) => {
   
    
// }
const BASEAPI = 'https://api.openbrewerydb.org/v1/breweries/'



export const Home = () => {
    const [searchValue, setSearchValue] = useState('')
    const [searchString, setSearchString] = useState<string>('')
    let navigate = useNavigate()
    

    useEffect(() => {
        let timeOut: NodeJS.Timeout
        timeOut = setTimeout(() => {
           
            console.log('value is changed',searchValue)
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
                <nav>
                    <ul>
                        <Link to='/'>Home </Link>
                        <input placeholder="Search..." onChange={handleSearch} type='string' />
                    </ul>
                </nav>
            </header>
            <section>
                <Outlet context={{searchString}}/>
            </section>
            <footer>
                <h1>Hello Footer</h1>
            </footer>

        </main>
    )
}