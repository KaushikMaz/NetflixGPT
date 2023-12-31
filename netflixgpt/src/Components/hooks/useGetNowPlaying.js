import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { addNowPlayingMovies } from "../utils_js/movieSlice"
import { API_options } from "../utils_js/Constants"


const useGetNowPlaying=()=>{
  const nowPlayingMovies=useSelector(store=>store.movies?.nowPlayingMovies)
  const dispatch=useDispatch()
  const getNowPlayingMovies=async()=>{
    const data= await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1",API_options)
    const json=await data.json()
    // console.log(json.results)
    dispatch(addNowPlayingMovies(json.results))
        
  }

  React.useEffect(()=>{
    !nowPlayingMovies && getNowPlayingMovies()
  },[])
}

export default useGetNowPlaying;