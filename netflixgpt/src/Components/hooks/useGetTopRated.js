import React from "react"
import { useDispatch,useSelector } from "react-redux"
import { addTopRatedMovies } from "../utils_js/movieSlice"
import { API_options } from "../utils_js/Constants"


const useGetTopRated=()=>{
const topRatedMovies=useSelector(store=>store.movies?.topRatedMovies)
const dispatch=useDispatch()
  const getTopRated=async()=>{
    const data= await fetch("https://api.themoviedb.org/3/movie/top_rated?page=1",API_options)
    const json=await data.json()
    // console.log(json.results)
    dispatch(addTopRatedMovies(json.results))
        
  }

  React.useEffect(()=>{
    !topRatedMovies && getTopRated()
  },[])
}

export default useGetTopRated;