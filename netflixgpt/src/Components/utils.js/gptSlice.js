import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        gptSearchView:false,
        movieNames:null,
        movieResults:null

    },
    reducers:{
        toggleGptSearch:(state,action)=>{
            state.gptSearchView=!state.gptSearchView
        },
        addGptMovies:(state,action)=>{
            const {movieNames,movieResults}=action.payload;
            state.movieNames=movieNames;
            state.movieResults=movieResults
        }
    }
})

export default gptSlice.reducer
export const {toggleGptSearch,addGptMovies}=gptSlice.actions