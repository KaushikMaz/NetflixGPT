
export const validateInputData=(email,password)=>{
    const isEmailValid=  /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/.test(email)
    const isPasswordValid= /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password)

    if(!isEmailValid && !isPasswordValid){
         return "Email and Password are invalid"
    }else if(!isEmailValid){
         return "Email is not Valid"
    }else if (!isPasswordValid){
         return "Password is not valid, One must include a Capital Letter, a Number and a special Character"
    }
    return null;

}