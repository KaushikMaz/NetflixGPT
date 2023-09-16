import React from 'react'

const SearchBarGPT = () => {
  return (
    <div className=" relative top-32 flex justify-center items-center">
      <form className=" bg-black rounded-lg grid grid-cols-12 w-[70%] " onSubmit={(e)=>e.preventDefault()}>
        <input className="p-2 m-3 col-span-10 rounded-lg" type="text" placeholder='What do you want to search today?'/>
        <button className="col-span-2 flex cursor-pointer justify-center hover:bg-red-800 bg-red-600 text-xl text-white rounded-lg py-2 px-4 m-3 font-semibold">Search</button> 

      </form>

    </div>
  )
}

export default SearchBarGPT