// import React, { useEffect } from 'react'
// import { useDispatch } from 'react-redux'
// import { API_OPTION } from '../utils/constant'
// import { addNowPlayingMovies } from '../utils/movieSlice'
import { useSelector } from 'react-redux';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies'
import useTopRatedMoves from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import GptSearch from './GptSearch';
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {

  const showGptSearch=useSelector((store)=>store.gpt.showGptSearch);

  // const dispatch=useDispatch();

  // const getNowPlayingMovies=async()=>{
  //   const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTION)
  
  //   const json=await data.json();
  //   console.log(json.results);
  //   dispatch(addNowPlayingMovies(json.results));
  // }

  // useEffect(()=>{
  //   getNowPlayingMovies();
  // },[])
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMoves();
  useUpcomingMovies();

  return (
    
    <div>
      <Header/>

      {showGptSearch ? (<GptSearch/>):
      <>
      <MainContainer/>
      <SecondaryContainer/>
      </>
      }
      

    </div>
  )
}

export default Browse