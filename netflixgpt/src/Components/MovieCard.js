import React from 'react'
import { imagePoster } from './utils.js/Constants'

const MovieCard = ({image}) => {
  return (
    <div className="w-48 p-1 px-2 ">
      <img src={imagePoster+image} alt="moviePoster"/>

    </div>
  )
}

export default MovieCard