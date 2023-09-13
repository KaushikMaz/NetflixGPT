import React from 'react'

const VideoDetail = ({title,details}) => {
  return (
    <div>
      <h1 className="text-4xl m-10">{title}</h1>
      <p className="m-10">{details}</p>
    </div>
  )
}

export default VideoDetail