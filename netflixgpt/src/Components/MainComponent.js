import React from 'react'
import VideoDetail from './VideoDetail'
import Backgroundvideo from './Backgroundvideo'
import {useSelector} from "react-redux"
import { randomValue } from './utils.js/Constants'



const MainComponent = () => {
  const movies=useSelector(store=>store.movies?.nowPlayingMovies)
  if(!movies) return;
  const mainMovie=movies[0]
  console.log(mainMovie)
  const {original_title,overview,id}=mainMovie
  
  
  return (
    <div className="relative">
        <VideoDetail title={original_title} details={overview}/>
        <Backgroundvideo movieId={id}/>
        
        
    </div>
  )
}

export default MainComponent