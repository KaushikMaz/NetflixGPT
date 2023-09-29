import React from 'react'
import {useSelector} from "react-redux"
import MoviesList from './MoviesList'
import ShimmerUI from './ShimmerUI'

const GptSearchResults = () => {
  const movieResults=useSelector(store=>store.gpt.movieResults)
  if(!movieResults) return ;
  const movieResultsArray=[].concat(...movieResults)
  


  return (
    movieResults.length===0?( <div className="absolute z-40 bottom-0"> <ShimmerUI/> </div>):(
    <div className="relative top-32 md:top-44 bg-black opacity-90">
    <div className =" relative top-8 md:top-36 p-1 md:p-2 ml-0 m-1 md:m-2 w-screen">
      <MoviesList title={"Search Results"} movies={movieResultsArray} />
    </div>
    </div>
)
    )
    
  
}

export default GptSearchResults