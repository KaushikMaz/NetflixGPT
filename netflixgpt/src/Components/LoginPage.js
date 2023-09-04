import React from 'react'
import Header from './Header'

const LoginPage = () => {
  return (
    
    <div >
      <Header/>
      <img  className="relative" src="https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/85eb5b91-25ed-4965-ace9-ba8e4a0ead8d/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="Netflix background"/>
      <form className="absolute z-40 w-[35%] p-16 top-32 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-80">
        <p className="text-3xl text-white font-bold py-5">Sign In</p>
        <input className="w-full p-3 my-2 rounded-sm bg-gray-600" type="email" placeholder='Enter your Email'/>
        <input className="w-full p-3 my-2 rounded-sm bg-gray-600" type="password" placeholder="Enter your password"/>
        <button className="w-full p-3 my-8 text-white rounded-sm  bg-red-700">Sign In</button>
        <p className="text-gray-400">New to Netflix? <span className="text-white cursor-pointer">Sign Up Now</span></p>
      </form>
    </div>
    
  )
}

export default LoginPage