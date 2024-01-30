export const API_OPTION = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNDQ3MjQ3YTc0OWY4NThjMTcwOTc0ZTFmYTdiNmQ2MyIsInN1YiI6IjY1OWJjNWQ5ODc0MWM0MDI1ODk0Y2QyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.M1vgyoZCo8M8vXjJ99eb2aHPssAUxd7LuDntG9gn8Yw',
    }
  };

export const IMG_CDN="https://image.tmdb.org/t/p/w500/";  

export const SupportedLanguages=[
  {identifier:"eng",name:"English"},
  {identifier:"hindi",name:"hindi"},
  {identifier:"french",name:"french"}
];

export const OpenAI_key=process.env.REACT_APP_OpenAI_key;