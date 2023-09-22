import React from 'react'
import { API_options, gptInputLanguage } from './utils.js/Constants'
import { useSelector,useDispatch } from 'react-redux'
import { openai } from './utils.js/openai'
import { addGptMovies } from './utils.js/gptSlice'

const SearchBarGPT = () => {
  const langKey=useSelector(store=>store.config.langKey)
  const searchText=React.useRef(null)
  const dispatch=useDispatch()

  const handleGPTSearch=async()=>{
    const inputValue=searchText.current.value.trim()
    if(!inputValue) return;
        
   const gptQuery="Act as a movie recommendation system and suggest movie for the query:"+ searchText.current.value 
   +",only give me name of 5 movies, comma separated like the example result given ahead. Example: Gadar, Dil, Sholay, Don, Koi Mil Gaya"
   
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
    });
    // console.log(gptResults.choices)
    

   const gptSearchMovieResults=gptResults.choices?.[0]?.message?.content.split(",")
    // console.log(gptSearchMovieResults)
    if(!gptSearchMovieResults) return null ;
  
  const searchTMDBMovies=async(movies)=>{
    const data= await fetch(`https://api.themoviedb.org/3/search/movie?query=${movies}&include_adult=false&page=1`, API_options)
    const json=await data.json()
    return json.results
}

  const gptMoviePromiseArray=gptSearchMovieResults.map((movie)=>searchTMDBMovies(movie))
  const tmdbMovieResults=await Promise.all(gptMoviePromiseArray)  
  // console.log(tmdbMovieResults)   

  dispatch(addGptMovies({movieNames:gptSearchMovieResults,movieResults:tmdbMovieResults}))
  

}
  
  return (
    <div className=" relative top-32 flex justify-center items-center">
      <form className=" bg-black rounded-lg grid grid-cols-12 w-[70%] " onSubmit={(e)=>e.preventDefault()}>
        <input ref={searchText} className="p-2 m-3 col-span-10 rounded-lg" type="text" placeholder={gptInputLanguage[langKey].gptPlaceholder}/>
        <button onClick={()=>handleGPTSearch()} className="col-span-2 flex cursor-pointer justify-center hover:bg-red-800 bg-red-600 text-xl text-white rounded-lg py-2 px-4 m-3 font-semibold">{gptInputLanguage[langKey].gptSearchButton}</button> 

      </form>

    </div>
  )
}

export default SearchBarGPT