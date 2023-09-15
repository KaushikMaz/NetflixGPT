import React from "react"
import { useDispatch } from "react-redux"
import { addUpcomingMovies } from "../utils.js/movieSlice"
import { API_options } from "../utils.js/Constants"


const useGetUpcomingMovies=()=>{

const dispatch=useDispatch()
  const getUpcoming=async()=>{
    const data= await fetch("https://api.themoviedb.org/3/movie/upcoming?page=1",API_options)
    const json=await data.json()
    console.log(json.results)
    dispatch(addUpcomingMovies(json.results))
        
  }

  React.useEffect(()=>{
    getUpcoming()
  },[])
}

export default useGetUpcomingMovies;