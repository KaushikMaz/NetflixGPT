import React from 'react'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import LoginPage from './LoginPage'
import BrowsePage from './BrowsePage'
import {onAuthStateChanged} from "firebase/auth"
import {auth} from "./utils.js/Firebase"
import {useDispatch} from "react-redux"
import { addUser,removeUser } from './utils.js/userSlice'

const Body = () => {
    const dispatch=useDispatch()
    const appRouter=createBrowserRouter([
        {   path:"/",
            element:<LoginPage/>},
        {
            path:"/browse",
            element:<BrowsePage/>
        }
    ])

    React.useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const {uid,email,displayName} = user;
              dispatch(addUser({"Id":uid,"Email":email,"Name":displayName}))
              
            } else {
              // User is signed out
              dispatch(removeUser())
            }
          });
    },[])

    
  return (
    <div>
        <RouterProvider router={appRouter}/>
        
           
    </div>
  )
}

export default Body