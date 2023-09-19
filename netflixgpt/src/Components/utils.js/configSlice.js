import {createSlice} from "@reduxjs/toolkit"

const configSlice=createSlice({
    name:"language",
    initialState:{
        langKey:"en"
    },
    reducers:{
        changeLanguage:(state,action)=>{
            state.langKey=action.payload
        }

    }
})

export default configSlice.reducer
export const {changeLanguage}=configSlice.actions