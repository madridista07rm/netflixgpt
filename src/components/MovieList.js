import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
    console.log("rendered");
  return (
    <div className='bg-black text-white '>
        <h1 className='text-3xl py-4'>{title}</h1>
        <div className='flex overflow-x-scroll '>
            <div id='slider' className=''>
                <div id='slider' className='flex'>
                   {movies?.map((movie)=>
                   (<MovieCard key={movies.id} posterPath={movie.poster_path}/>))} 
                </div>
            </div>

        </div>
    </div>
  )
}

export default MovieList