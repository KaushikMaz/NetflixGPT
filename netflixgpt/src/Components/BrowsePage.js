import React from 'react'
import Header from './Header'
import useGetNowPlaying from './hooks/useGetNowPlaying'
import MainComponent from './MainComponent'
import SecondaryComponent from './SecondaryComponent'

const BrowsePage = () => {
  useGetNowPlaying()
  
  return (
    <div>
      <Header/>
      <MainComponent/>
      {/* <SecondaryComponent/> */}
    </div>
  )
}

export default BrowsePage