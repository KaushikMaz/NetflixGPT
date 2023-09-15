import React from 'react'
import MovieCard from './MovieCard'

const MoviesList = ({title,movies}) => {
    if(!movies) return;
  return (
    <div className="relative -top-36 ">
        <h1 className="text-2xl text-white font-bold p-2 ml-2">{title}</h1>
        <div className=" mx-4 flex overflow-x-scroll no-scrollbar">
        <div className="flex cursor-pointer ">
          {movies.map((movie)=><MovieCard key={movie.id} image={movie.poster_path}/>)}
            
        </div>
        </div>

    </div>
  )
}

export default MoviesList