import React from 'react'
import { API_options,randomValue } from './utils_js/Constants'
import {useDispatch, useSelector} from "react-redux"
import { addTrailerVideo } from './utils_js/movieSlice'

const Backgroundvideo = ({movieId}) => {
  const dispatch=useDispatch()
  const trailerVideo= useSelector(store=>store.movies?.trailerVideo)
  
    React.useEffect(()=>{
      !trailerVideo && getVideoWithId()
    
    },[])
    
    
      const getVideoWithId=async()=>{
       const data= await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_options)
       const json=await data.json()
       const filterData=json.results.filter((video)=>video.type==="Trailer")
       const filterDataIndex=randomValue(filterData)
       const jsonIndex=randomValue(json.results)
       const trailer=filterData.length? filterData[filterDataIndex]:json.results[jsonIndex]
      //  console.log(trailer)
       dispatch(addTrailerVideo(trailer))

      }
return (
  (!trailerVideo)?
  (<div className="aspect-video">
    <div className="h-full w-screen bg-gray-500 animate-pulse"></div>
  </div>
  ):(
    <div className="aspect-video">
        <iframe className="w-screen h-full" src={`https://www.youtube.com/embed/${trailerVideo?.key}?si=RtpflzTDm_KiFirI?&autoplay=1&mute=1`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>

    </div>
  ))
}

export default Backgroundvideo