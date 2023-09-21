import React from 'react'
import SearchBarGPT from "./SearchBarGPT"
import GptSearchResults from './GptSearchResults'
import { Background_Image } from './utils.js/Constants'


const SearchPageGPT = () => {
  return (
    <div className="bg-cover w-screen fixed bg-center bg-no-repeat h-screen" style={{ backgroundImage:`url(${Background_Image}`}}>
        <SearchBarGPT/>
        <GptSearchResults/>
    </div>
    )
}

export default SearchPageGPT