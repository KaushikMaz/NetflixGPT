import React from "react"
import { useDispatch,useSelector } from "react-redux"
import { addPopularMovies } from "../utils_js/movieSlice"
import { API_options } from "../utils_js/Constants"


const useGetPopular=()=>{
const popularMovies=useSelector(store=>store.movies?.popularMovies)
const dispatch=useDispatch()
  const getPopularMovies=async()=>{
    const data= await fetch("https://api.themoviedb.org/3/movie/popular?page=1",API_options)
    const json=await data.json()
    // console.log(json.results)
    dispatch(addPopularMovies(json.results))
        
  }

  React.useEffect(()=>{
    !popularMovies && getPopularMovies()
  },[])
}

export default useGetPopular;