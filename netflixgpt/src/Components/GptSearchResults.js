import React from 'react'
import {useSelector} from "react-redux"
import MoviesList from './MoviesList'

const GptSearchResults = () => {
  const movieResults=useSelector(store=>store.gpt.movieResults)
  if(!movieResults) return;
  const movieResultsArray=[].concat(...movieResults)
  
 
  return (
    <div className =" relative top-[55%] w-screen bg-black bg-opacity-90">
      <MoviesList title={"Search Results"} movies={movieResultsArray} />
    </div>
  )
}

export default GptSearchResults