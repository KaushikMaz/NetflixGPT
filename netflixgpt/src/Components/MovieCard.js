import React from 'react'
import { imagePoster } from './utils.js/Constants'

const MovieCard = ({image,rating}) => {
  if(!rating) return null;
  return (
    <div className="w-48 p-1 px-2 relative ">
      <img src={imagePoster+image} alt="moviePoster"/>
      <p className=" p-1 bg-red-800 w-12 absolute top-1 text-white font-bold align-middle">{rating}</p>

    </div>
  )
}

export default MovieCard