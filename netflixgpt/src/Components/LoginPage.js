import React from 'react'
import Header from './Header'

const LoginPage = () => {
  return (
    
    <div className="bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/85eb5b91-25ed-4965-ace9-ba8e4a0ead8d/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_medium.jpg')] bg-cover bg-center bg-no-repeat" >
      <Header/>
      <form>
        <p>Sign In</p>
        <input type="email" placeholder='Enter your Email'/>
        <input type="password" placeholder="Enter your password"/>
        <button>Sign In</button>
      </form>
    </div>
    
  )
}

export default LoginPage