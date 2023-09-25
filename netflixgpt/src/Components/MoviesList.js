import React from 'react'
import MovieCard from './MovieCard'

const MoviesList = ({title,movies, vote_average}) => {
    if(!movies) return;
  return (
    <div className=" relative md:relative -top-3 md:-top-36">
        <h1 className="md:text-2xl text-sm text-white font-bold md:pt-6 md:p-3 ml-2">{title}</h1>
        <div className=" mx-1 md:mx-4 flex overflow-x-scroll no-scrollbar">
        <div className="flex cursor-pointer space-x-1 ">
          {movies.map((movie)=><MovieCard key={movie.id} rating={movie.vote_average} image={movie.poster_path}/>)}
            
        </div>
        </div>

    </div>
  )
}

export default MoviesList