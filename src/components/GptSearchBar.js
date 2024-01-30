import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import { API_OPTION } from '../utils/constant'
import { addGptMovieResult } from '../utils/gptSlice'
import lang from '../utils/languageConstants'
import openai from '../utils/openai'
import { useDispatch } from 'react-redux'

const GptSearchBar = () => {

  const dispatch=useDispatch();
  
  const langKey=useSelector((store)=>store.config.lang);
  const searchText=useRef(null);

  const searchMovieTMDB=async(movie)=>{
    const data=await fetch('https://api.themoviedb.org/3/search/movie?query='
    +movie+
    '&include_adult=false&language=en-US&page=1', API_OPTION);
    const json=await data.json();
    return json.results;
  }

  const handleGptClick=async()=>{
    console.log(searchText.current.value)

    const gptPrompt="act like a movie recommendation system and suggest some moves for the query:"
    + searchText.current.value+
    " only give me name of 5 movies ,comma separated like example : gadar,sholey,abcd,krish,dhol";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: 'user', content:gptPrompt}],
      model: 'gpt-3.5-turbo',
    });

    const gptMovies=gptResults.choices?.[0]?.message?.content.split(",");

    const data01=gptMovies.map((movie)=>searchMovieTMDB(movie));

    const tmdbResults=await Promise.all(data01);
    console.log(tmdbResults);

    dispatch(addGptMovieResult({movieNames:gptMovies, movieResults:tmdbResults}));


  };

  return (
    <div onSubmit={(e)=>e.preventDefault()} className='pt-[12%] flex justify-center'>
        <form className='absolute w-1/2 bg-black grid grid-cols-12 rounded-lg'>
            <input ref={searchText} type="text" className='p-4 m-4 col-span-9 rounded-lg' placeholder={lang[langKey].gptSearchPlaceHolder}/>
            <button onClick={handleGptClick} className='col-span-3 m-4 p-4 py-2 px-4 bg-red-700 text-white rounded-lg'>
                {lang[langKey].search}
            </button>
        </form>
    </div>
  )
}

export default GptSearchBar