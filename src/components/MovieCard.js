import React from 'react'
import {IMG_CDN} from "../utils/constant"

const MovieCard = ({posterPath}) => {
  if(!posterPath) return null;
  return (
    <div className='m-2 p-1 w-48 px-2'>
        <img alt="movie card" src={IMG_CDN+posterPath}/>
    </div>
  )
}

export default MovieCard