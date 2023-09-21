import React from 'react'
import {useSelector} from "react-redux"
import MoviesList from './MoviesList'

const GptSearchResults = () => {
  const movieResults=useSelector(store=>store.gpt.movieResults)
  if(!movieResults) return;
  const movieResultsArray=[].concat(...movieResults)
  
 
  return (
    <div className="relative top-44 bg-black opacity-90">
    <div className =" relative top-36 p-2 ml-0 m-2 w-screen">
      <MoviesList title={"Search Results"} movies={movieResultsArray} />
    </div>
    </div>
  )
}

export default GptSearchResults