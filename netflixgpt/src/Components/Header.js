import React from 'react'
import {signOut,onAuthStateChanged} from "firebase/auth";
import {auth} from "./utils_js/Firebase"
import { useNavigate } from 'react-router-dom';
import {useSelector,useDispatch} from "react-redux"
import {addUser,removeUser} from './utils_js/userSlice'
import { toggleGptSearch } from './utils_js/gptSlice';
import { Netflix_Logo } from './utils_js/Constants';
import { supportedLanguages } from './utils_js/Constants';
import { changeLanguage } from './utils_js/configSlice';





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
const handleLanguageChange=(e)=>{
  dispatch(changeLanguage(e.target.value))
}
  
  return (
    <>
    <div className="fixed flex justify-between md:fixed  w-full z-40 ">
        <img  className=" md:h-24 md:w-46 h-12 w-23 ml-2"src={Netflix_Logo} alt="Netflix Logo"/>
        {user && <div className="m-2 md:m-3 w-48 md:w-96">
          <div className="flex justify-end items-center">
           {gptSearchView && <div className='mr-5 md:mr-10'>
            <select onChange={(e)=>handleLanguageChange(e)} className="md:m-2 hover:bg-red-800 md:p-2 p-1 rounded-lg bg-red-600 cursor-pointer text-sm md:text-lg text-white w-18 md:w-30">
              {supportedLanguages.map(lang=><option className=" bg-black text-white cursor-pointer" value={lang.identifier} key={lang.identifier}>{lang.name}</option>)}
            </select>
            </div>}
            <div className="mr-2 md:mr-10">
            <button onClick={()=>handleGptSearchView()} className="text-white p-1 md:hover:bg-red-800 text-sm md:text-xl rounded-lg bg-red-600 font-semibold md:p-2  ">
              {gptSearchView?"HOME":" AI Search"}</button>
            </div>
            <svg onClick={()=>handleUserMenu()} alt="userIcon" xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" md:hover:bg-red-800 md:hover:rounded-2xl cursor-pointer w-7 h-7 md:w-10 md:h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {/* <img  onClick={()=>handleUserMenu()} className="cursor-pointer w-10 h-10" src={user.photoUrl} alt="userIcon"/> */}
            </div>
        </div>}
            
    </div>
    {showUserMenu &&
    <div className="md:fixed md:top-12 fixed top-9 left-[20rem] z-40 md:h-30 md:w-[7rem] md:left-[77.5rem]">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className=" relative left-10 md:relative md:left-20 md:w-6 md:h-6 w-3 h-3 ">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
      </svg>
      <p onClick={()=>handleSignOut()} className="cursor-pointer text-sm md:text-lg p-1 md:pl-5 md:p-2 bg-black text-white font-bold ">Sign Out</p>
    </div>}
    </>
  )
}

export default Header