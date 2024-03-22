import React from 'react'
import { API_options, gptInputLanguage } from './utils_js/Constants'
import { useSelector,useDispatch } from 'react-redux'
import { genAI } from './utils_js/openai'
import { addGptMovies } from './utils_js/gptSlice'

const SearchBarGPT = () => {
  const langKey=useSelector(store=>store.config.langKey)
  const searchText=React.useRef(null)
  const dispatch=useDispatch()

  const handleGPTSearch=async()=>{
    const inputValue=searchText.current.value.trim()
    if(!inputValue) return;
        
  //  const gptQuery="Act as a movie recommendation system and suggest movie for the query:"+ searchText.current.value 
  //  +",only give me name of 5 movies, comma separated like the example result given ahead. Example: Gadar, Dil, Sholay, Don, Koi Mil Gaya"
   
   const model = genAI.getGenerativeModel({ model: "gemini-pro"});
   const prompt="Act as a movie recommendation system and suggest movie for the query:"+ searchText.current.value 
   +",only give me name of 5 movies, comma separated like the example result given ahead. Example: Gadar, Dil, Sholay, Don, Koi Mil Gaya"
   const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);



    // const gptResults = await openai.chat.completions.create({
    //   messages: [{ role: 'user', content: gptQuery }],
    //   model: 'gpt-3.5-turbo',
    // });
    // console.log(gptResults.choices)
    

//    const gptSearchMovieResults=gptResults.choices?.[0]?.message?.content.split(",")
//     // console.log(gptSearchMovieResults)
//     if(!gptSearchMovieResults) return null ;
  const geminiProSearchResults=text.split(",")
  if(!geminiProSearchResults) return null ;

  const searchTMDBMovies=async(movies)=>{
    const data= await fetch(`https://api.themoviedb.org/3/search/movie?query=${movies}&include_adult=false&page=1`, API_options)
    const json=await data.json()
    return json.results
}

  const geminiProMoviePromiseArray=geminiProSearchResults.map((movie)=>searchTMDBMovies(movie))
  const tmdbMovieResults=await Promise.all(geminiProMoviePromiseArray)  
  // console.log(tmdbMovieResults)   

  dispatch(addGptMovies({movieNames:geminiProSearchResults,movieResults:tmdbMovieResults}))
  

}
  
  return (
    <div className=" relative top-28 h-20 md:top-32 flex justify-center items-center">
      <form className=" bg-black rounded-lg grid grid-cols-12 w-[95%] md:w-[70%] " onSubmit={(e)=>e.preventDefault()}>
        <input ref={searchText} className="px-1 mx-2 m-3 text-xs md:text-lg md:p-2 md:m-3 col-span-9 md:col-span-10 rounded-lg" type="text" placeholder={gptInputLanguage[langKey].gptPlaceholder}/>
        <button onClick={()=>handleGPTSearch()} className="col-span-3 flex cursor-pointer md:col-span-2 justify-center hover:bg-red-800 bg-red-600 text-xs md:text-xl text-white rounded-lg p-2 md:py-2 px-2 md:px-1 m-3 ml-0 md:m-3 font-semibold">{gptInputLanguage[langKey].gptSearchButton}</button> 

      </form>

    </div>
  )
}

export default SearchBarGPT