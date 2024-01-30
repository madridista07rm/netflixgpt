import React from 'react'
import { useEffect } from 'react'
import useMovieTrailer from '../hooks/useMovieTrailer'
import { useState } from 'react';
import { API_OPTION } from '../utils/constant'

const VideoBackground = ({movieId}) => {
    
    const [trailerId,setTrailerId]=useState(null);
  
    const getMovieVideo =async()=>{
      const data=await fetch('https://api.themoviedb.org/3/movie/'+movieId +'/videos?language=en-US', API_OPTION)
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
    useMovieTrailer();

    return (
    <div>
      <iframe className='w-screen aspect-video'
      src={"https://www.youtube.com/embed/"+trailerId+"?si=a-Nh--XS0s1ZUGek?&autoplay=1&mute=1"} 
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" >
      </iframe>
    </div>
  )
}

export default VideoBackground