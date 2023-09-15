import React from "react"
import { useDispatch } from "react-redux"
import { addPopularMovies } from "../utils.js/movieSlice"
import { API_options } from "../utils.js/Constants"


const useGetPopular=()=>{

const dispatch=useDispatch()
  const getPopularMovies=async()=>{
    const data= await fetch("https://api.themoviedb.org/3/movie/popular?page=1",API_options)
    const json=await data.json()
    console.log(json.results)
    dispatch(addPopularMovies(json.results))
        
  }

  React.useEffect(()=>{
    getPopularMovies()
  },[])
}

export default useGetPopular;