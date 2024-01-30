import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { API_OPTION } from '../utils/constant'
import { addNowPlayingMovies } from '../utils/movieSlice'

const useNowPlayingMovies=()=>{

   const dispatch=useDispatch();

   const nowPlayingMovies=useSelector(store=>store.movie?.nowPlayingMovies)

   const getNowPlayingMovies=async()=>{
     const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTION)

    const json=await data.json();
    // console.log(json.results);
    dispatch(addNowPlayingMovies(json.results));
}

    useEffect(()=>{


        !nowPlayingMovies && getNowPlayingMovies();
    },[])
}

export default useNowPlayingMovies;

