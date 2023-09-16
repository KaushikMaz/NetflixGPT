import React from 'react'
import Header from './Header'
import useGetNowPlaying from './hooks/useGetNowPlaying'
import useGetPopular from './hooks/useGetPopular'
import MainComponent from './MainComponent'
import SecondaryComponent from './SecondaryComponent'
import useGetTopRated from './hooks/useGetTopRated'
import useGetUpcomingMovies from './hooks/useGetUpcomingMovies'
import { useSelector } from 'react-redux'
import SearchPageGPT from './SearchPageGPT'

const BrowsePage = () => {
  const gptSearchView=useSelector(store=>store.gpt?.gptSearchView)
  
  useGetNowPlaying()
  useGetPopular()
  useGetTopRated()
  useGetUpcomingMovies()
  
  return (
    <div className="box-border" >
      <Header/>
      {gptSearchView?<SearchPageGPT/>:<>
      <MainComponent/>
      <SecondaryComponent/>
      </>}
    </div>
  )
}

export default BrowsePage