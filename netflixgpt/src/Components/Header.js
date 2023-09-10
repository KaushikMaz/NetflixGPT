import React from 'react'
import {signOut} from "firebase/auth";
import {auth} from "./utils.js/Firebase"
import { useNavigate } from 'react-router-dom';



const Header = () => {
  const navigate=useNavigate()
  const[showUserMenu,setShowUserMenu]=React.useState(false)
  const handleUserMenu=()=>{
    setShowUserMenu(prev=>!prev)
  }
  const handleSignOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")

    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
    

  }
  return (
    <>
    <div className=" flex justify-between w-full z-40 absolute h-full bg-gradient-to-b from-black">
        <img  className=" h-24 w-46 ml-2"src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="Netflix Logo"/>
        <div className="m-3">
          <svg onClick={()=>handleUserMenu()} alt="userIcon" xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" cursor-pointer w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>

        </div>
            
    </div>
    {showUserMenu &&
    <div className="relative top-12  z-40 h-30 w-[7rem] left-[77.5rem]">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className=" relative left-20 w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
      </svg>
      <p onClick={()=>handleSignOut()} className="cursor-pointer pl-5 p-2 bg-black text-white font-bold ">Sign Out</p>
    </div>}
    </>
  )
}

export default Header