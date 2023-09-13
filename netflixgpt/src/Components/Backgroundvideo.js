import React from 'react'
import { API_options,randomValue } from './utils.js/Constants'
import {useDispatch, useSelector} from "react-redux"
import { addTrailerVideo } from './utils.js/movieSlice'

const Backgroundvideo = ({movieId}) => {
  const dispatch=useDispatch()
  const trailerVideo= useSelector(store=>store.movies?.trailerVideo)
  
    React.useEffect(()=>{
        getVideoWithId()
    
    },[])
    
    
      const getVideoWithId=async()=>{
       const data= await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_options)
       const json=await data.json()
       const filterData=json.results.filter((video)=>video.type==="Trailer")
       const filterDataIndex=randomValue(filterData)
       const jsonIndex=randomValue(json.results)
       const trailer=filterData.length? filterData[filterDataIndex]:json.results[jsonIndex]
       console.log(trailer)
       dispatch(addTrailerVideo(trailer))

      }
return (
    
    <div>
        <iframe className="w-screen aspect-video m-0 " src={`https://www.youtube.com/embed/${trailerVideo?.key}?si=RtpflzTDm_KiFirI?&autoplay=1&mute=1`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>

    </div>
  )
}

export default Backgroundvideo