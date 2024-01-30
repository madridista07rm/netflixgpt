import React from 'react'
import {useSelector} from "react-redux";
import MovieList from "./MovieList";
import MovieCard from './MovieCard'


const GptMovieSuggestions = () => {
  
  const {movieResults,movieNames}=useSelector(store=>store.gpt)
  if(!movieNames) return null;

  return (
    <div className='pt-[10%] m-7 text-white bg-opacity-70'>
      <div className='absolute '>
        {movieNames.map((movieName,index)=>(
          <MovieList key={movieName}
          title={movieName}
          movies={movieResults[index]}
          />
        ))}
        {/* <MovieList title={movieNames[1]} movies={movieResults[1]}/> */}
        
        {/* <div className='bg-black text-white rounded-lg '>
        <h1 className='text-3xl py-4'>{movieNames[1]}</h1>
        <div className='flex '>
                   {movieResults[1]?.map((movie)=>
                   (<MovieCard key={movie.id} posterPath={movie.poster_path}/>))} 
        </div> */}
      </div>

      </div>
    // </div>
  )
}

export default GptMovieSuggestions