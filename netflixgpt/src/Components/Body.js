import React from 'react'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import LoginPage from './LoginPage'
import BrowsePage from './BrowsePage'
const Body = () => {
    const appRouter=createBrowserRouter([
        {   path:"/",
            element:<LoginPage/>},
        {
            path:"/browse",
            element:<BrowsePage/>
        }
    ])

    
  return (
    <div>
        <RouterProvider router={appRouter}/>
        
           
    </div>
  )
}

export default Body