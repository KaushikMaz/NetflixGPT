import React from 'react'

const VideoDetail = ({title,details}) => {
  return (
    <div className="w-screen aspect-video absolute bg-gradient-to-r from-black pt-12 pl-2 md:pt-52 md:pl-20 ">
      <h1 className="text-sm md:text-4xl mx-5 mb-3 md:m-5 text-white font-bold">{title}</h1>
      <p className=" mx-5 md:m-5 text-xs md:text-lg text-white w-[80%] md:w-[40%]">{details}</p>
      <div className='flex ml-3  md:m-3'>
        <button className=" m-2 md:m-2 hover:bg-slate-400 bg-opacity-70 bg-white w-[20%] md:w-[10%] flex justify-center items-center rounded-lg md:p-3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="Black" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 md:w-6 md:h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
          </svg>
          <p className="text-black text-sm md:text-xl pl-1">Play</p>
        </button>
        <button className=' md:p-3 m-2 bg-opacity-70 w-[20%] md:w-[10%] text-sm md:text-lg rounded-lg md:rounded-lg text-white border border-white '>More Info</button>
      </div>
    </div>
  )
}

export default VideoDetail