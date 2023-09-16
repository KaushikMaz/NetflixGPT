import React from 'react'
import {signOut,onAuthStateChanged} from "firebase/auth";
import {auth} from "./utils.js/Firebase"
import { useNavigate } from 'react-router-dom';
import {useSelector,useDispatch} from "react-redux"
import {addUser,removeUser} from './utils.js/userSlice'
import { toggleGptSearch } from './utils.js/gptSlice';
import { Netflix_Logo } from './utils.js/Constants';





const Header = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const user=useSelector(store=>store.user)
  const gptSearchView=useSelector(store=>store.gpt.gptSearchView)
  const handleGptSearchView=()=>{
    dispatch(toggleGptSearch())

  }
  
  const[showUserMenu,setShowUserMenu]=React.useState(false)
  const handleUserMenu=()=>{
    setShowUserMenu(prev=>!prev)
  }
  const handleSignOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
  }
    React.useEffect(()=>{
      const unsubscribe=onAuthStateChanged(auth, (user) => {
          if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const {uid,email,displayName,photoURL} = user;
            dispatch(addUser({Id:uid,Email:email,Name:displayName, PhotoUrl:photoURL}))
            navigate("/browse")
          } else {
            // User is signed out
            dispatch(removeUser())
            navigate("/")
          }
        });
        // Unsubscribe when coponent unmounts
        return()=>unsubscribe
  },[])


// console.log(user)
  
  return (
    <>
    <div className=" flex justify-between fixed  w-full z-40 ">
        <img  className=" h-24 w-46  ml-2"src={Netflix_Logo} alt="Netflix Logo"/>
        {user && <div className="m-3">
          <div className="flex">
            <button onClick={()=>handleGptSearchView()} className="text-white hover:bg-red-800 text-xl rounded-lg bg-red-600 font-semibold p-2 mr-16">{gptSearchView?"HOME":"GPT Search"}</button>
            <svg onClick={()=>handleUserMenu()} alt="userIcon" xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" cursor-pointer w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {/* <img  onClick={()=>handleUserMenu()} className="cursor-pointer w-10 h-10" src={user.photoUrl} alt="userIcon"/> */}
            </div>
        </div>}
            
    </div>
    {showUserMenu &&
    <div className="absolute top-12  z-40 h-30 w-[7rem] left-[77.5rem]">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className=" relative left-20 w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
      </svg>
      <p onClick={()=>handleSignOut()} className="cursor-pointer pl-5 p-2 bg-black text-white font-bold ">Sign Out</p>
    </div>}
    </>
  )
}

export default Header