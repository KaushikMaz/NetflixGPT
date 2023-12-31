import React from 'react'
import MoviesList from './MoviesList'
import {useSelector} from "react-redux"
import ShimmerUI from './ShimmerUI'

const SecondaryComponent = () => {
  const movies=useSelector(store=>store.movies)
  
  if(!movies) return;
  return (
    <div className="bg-black bg-opacity-95  ">
      {movies.nowPlayingMovies?<MoviesList title={"Now Playing"} movies={movies?.nowPlayingMovies}/>:<div className="absolute z-40 top-[43rem] "><ShimmerUI/></div>}
      <MoviesList title={"Popular Movies"} movies={movies?.popularMovies}/>
      <MoviesList title={"Top rated Movies"} movies={movies?.topRatedMovies}/>
      <MoviesList title={"Upcoming Movies"} movies={movies?.upcomingMovies}/>
    </div>
  )
}
export default SecondaryComponent