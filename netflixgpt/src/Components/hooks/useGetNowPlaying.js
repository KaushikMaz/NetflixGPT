import React from "react"
import { useDispatch } from "react-redux"
import { addNowPlayingMovies } from "../utils.js/movieSlice"
import { API_options } from "../utils.js/Constants"


const useGetNowPlaying=()=>{

const dispatch=useDispatch()
  const getNowPlayingMovies=async()=>{
    const data= await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1",API_options)
    const json=await data.json()
    console.log(json.results)
    dispatch(addNowPlayingMovies(json.results))
  }

  React.useEffect(()=>{
    getNowPlayingMovies()
  },[])
}

export default useGetNowPlaying;