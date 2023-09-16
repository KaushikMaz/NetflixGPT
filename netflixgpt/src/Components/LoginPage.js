import React from 'react'
import Header from './Header'
import { Background_Image } from './utils.js/Constants'
import { validateInputData } from './utils.js/Validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import {auth} from "./utils.js/Firebase"
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addUser } from './utils.js/userSlice'

const LoginPage = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const[isSignIn,setIsSignIn]=React.useState(true)
  const [errorMessage, setErrorMessage]=React.useState(null) 
  const name=React.useRef(null)
  const email=React.useRef(null)
  const password=React.useRef(null)
  
  const handleButtonClick=()=>{
    const message=validateInputData(email.current.value,password.current.value)
    setErrorMessage(message)
    // console.log(errorMessage)
    if (message) return;

    //SignIn / Sign Up
    if(!isSignIn){
      //Sign Up Logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
    // Signed in 
        const user = userCredential.user;
        updateProfile(user, {
        displayName: name.current.value, photoURL: "https://lh3.googleusercontent.com/a/ACg8ocJfvf1EIRbc0xDFuS_aZA6-h96gkmtw_m6uFyXayDaNdVQ=s288-c-no"
        }).then(() => {
        // Profile updated!
        const {uid,email,displayName,photoURL} = auth.currentUser;
        dispatch(addUser({Id:uid,Email:email,Name:displayName, PhotoUrl:photoURL}))
        navigate("/browse")
        }).catch((error) => {
        // An error occurred
        setErrorMessage(error.message)
        });
        
   })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+ "-"+ errorMessage)
  });

     }else{
      // Sign In Logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
        // Signed in 
          const user = userCredential.user;
          console.log(user)
          navigate("/browse")
        
      })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode+ "-"+ errorMessage)
      });

     }

  }
  return (
    
    <div className="bg-cover bg-no-repeat bg-center h-screen bg-gradient-to-b from-black" style={{ backgroundImage:`url(${Background_Image}`}}>
      <Header/>
      <form onSubmit={(e)=>e.preventDefault()} className="absolute z-40 w-[35%] p-16 top-28 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-80">
        <p className="text-3xl text-white font-bold py-5">{isSignIn?"Sign In":"Sign Up"}</p>
        {!isSignIn &&
        <input className="w-full p-3 my-2 rounded-sm bg-gray-600" ref={name} type="text" placeholder='Enter your Full Name'/>}
        <input className="w-full p-3 my-2 rounded-sm bg-gray-600" ref={email} type="email" placeholder='Enter your Email'/>
        <input className="w-full p-3 my-2 rounded-sm bg-gray-600" ref={password} type="password" placeholder="Enter your password"/>
        <p className="text-red-700 m-2 font-semibold">{errorMessage}</p>
        <button onClick={handleButtonClick} className="w-full p-3 my-8 text-white rounded-sm  bg-red-700">{isSignIn?"Sign In" :"Sign Up"}</button>
        <p className="text-gray-400 font-semibold my-3">{isSignIn?"New to Netflix?":"Already a user?"} <span onClick={()=>setIsSignIn(prev=>!prev)} className="text-white font-semibold cursor-pointer">{isSignIn?"Sign Up":"Sign In"}</span></p>
      </form>
    </div>
    
  )
}

export default LoginPage