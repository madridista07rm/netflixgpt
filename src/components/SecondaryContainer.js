import React from 'react'
import MovieList from './MovieList'
import {useSelector} from "react-redux";

const SecondaryContainer = () => {
  const movies=useSelector((store)=>store.movie);
  return (
    <div className='-mt-10 relative z-20 '>
      <MovieList title={"Now Playing Movies"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies}/>
      <MovieList title={"Popular Movies"} movies={movies.popularMovies}/>
      <MovieList title={"Up Coming Movies"} movies={movies.upComingMovies}/>
    </div>
  )
}

export default SecondaryContainer