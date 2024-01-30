
import { useEffect } from 'react'
import { useState } from 'react';
import { API_OPTION } from '../utils/constant'
const useMovieTrailer = () => {
  
    const [trailerId,setTrailerId]=useState(null);
  
    const getMovieVideo =async()=>{
      const data=await fetch('https://api.themoviedb.org/3/movie/1029575/videos?language=en-US', API_OPTION)
      const json=await data.json();
      // console.log(json);

      const FilterData=json.results.filter((video)=> video.type==="Trailer");
      const trailer=FilterData.length ? FilterData[0] : json.results[0];
      // console.log(trailer);
      setTrailerId(trailer.key);
    };
    
    useEffect(()=>{
      getMovieVideo()
    },[])
  
}

export default useMovieTrailer;