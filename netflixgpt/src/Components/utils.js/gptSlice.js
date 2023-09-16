import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        gptSearchView:false
    },
    reducers:{
        toggleGptSearch:(state,action)=>{
            state.gptSearchView=!state.gptSearchView
        }
    }
})

export default gptSlice.reducer
export const {toggleGptSearch}=gptSlice.actions