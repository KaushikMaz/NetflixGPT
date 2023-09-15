import React from "react"
import { useDispatch } from "react-redux"
import { addTopRatedMovies } from "../utils.js/movieSlice"
import { API_options } from "../utils.js/Constants"


const useGetTopRated=()=>{

const dispatch=useDispatch()
  const getTopRated=async()=>{
    const data= await fetch("https://api.themoviedb.org/3/movie/top_rated?page=1",API_options)
    const json=await data.json()
    console.log(json.results)
    dispatch(addTopRatedMovies(json.results))
        
  }

  React.useEffect(()=>{
    getTopRated()
  },[])
}

export default useGetTopRated;