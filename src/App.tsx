import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { DataPage } from './components/DisplayData'
import { Home } from './pages/Home'
import { SingleBrewerie } from './pages/SingleBrewerie'
import {NotFound} from './pages/NotFound'
import { ThemeProvider } from '@emotion/react'
import { theme } from './themes/mainTheme'
import './styles/style.scss'

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFound />,
    children: [
      {
        path: '',
        element: <DataPage />
      },      
      {
        path: "brewerie/:id",
        element: <SingleBrewerie />
      }
    ]
  }, 
])

const App = () => {
  return (    
      <ThemeProvider theme={theme} >        
        <RouterProvider router={appRouter} />        
      </ThemeProvider>    
  )
}

export default App