import React from 'react'
import { imagePoster } from './utils_js/Constants'

const MovieCard = ({image,rating}) => {
  if(!rating) return null;
  return (
    <div className="w-24 p-1 relative md:w-48 md:p-1 md:px-2 ">
      <img  src={imagePoster+image} alt="moviePoster"/>
      <p className=" md:p-1 p-1 w-8 font-semibold relative -top-32 bg-red-800 md:w-12 md:absolute md:top-1 md:text-lg text-sm text-white md:font-bold align-middle">{rating.toFixed(2)}</p>

    </div>
  )
}

export default MovieCard