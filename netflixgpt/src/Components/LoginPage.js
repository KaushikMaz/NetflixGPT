import React from 'react'
import Header from './Header'
import { validateInputData } from './utils.js/Validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import {auth} from "./utils.js/Firebase"

const LoginPage = () => {
  const[isSignIn,setIsSignIn]=React.useState(true)
  const [errorMessage, setErrorMessage]=React.useState(null) 
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
        console.log(user)
    
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
        
      })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode+ "-"+ errorMessage)
      });

     }

  }
  return (
    
    <div >
      <Header/>
      <img  className="relative" src="https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/85eb5b91-25ed-4965-ace9-ba8e4a0ead8d/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="Netflix background"/>
      <form onSubmit={(e)=>e.preventDefault()} className="absolute z-40 w-[35%] p-16 top-32 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-80">
        <p className="text-3xl text-white font-bold py-5">{isSignIn?"Sign In":"Sign Up"}</p>
        {!isSignIn &&
        <input className="w-full p-3 my-2 rounded-sm bg-gray-600" type="text" placeholder='Enter your Full Name'/>}
        <input className="w-full p-3 my-2 rounded-sm bg-gray-600" ref={email} type="email" placeholder='Enter your Email'/>
        <input className="w-full p-3 my-2 rounded-sm bg-gray-600" ref={password} type="password" placeholder="Enter your password"/>
        <p className="text-red-700 m-2 font-semibold">{errorMessage}</p>
        <button onClick={handleButtonClick} className="w-full p-3 my-8 text-white rounded-sm  bg-red-700">{isSignIn?"Sign In" :"Sign Up"}ne</button>
        <p className="text-gray-400 font-semibold my-3">{isSignIn?"New to Netflix?":"Already a user?"} <span onClick={()=>setIsSignIn(prev=>!prev)} className="text-white font-semibold cursor-pointer">{isSignIn?"Sign Up":"Sign In"}</span></p>
      </form>
    </div>
    
  )
}

export default LoginPage