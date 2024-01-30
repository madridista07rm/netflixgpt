import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { API_OPTION } from '../utils/constant'
import { addUpComingMovies } from '../utils/movieSlice'

const useUpcomingMovies=()=>{

   const dispatch=useDispatch();

   const getUpComingMovies=async()=>{
     const data=await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTION)

    const json=await data.json();
    // console.log(json.results);
    dispatch(addUpComingMovies(json.results));
}

    useEffect(()=>{
        getUpComingMovies();
    },[])
}
export default useUpcomingMovies;
