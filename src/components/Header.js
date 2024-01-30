import React from 'react'
import { useEffect } from 'react'
import {signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import {useSelector} from 'react-redux'
import {onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux'
import {addUser, removeUser} from "../utils/userSlice"
import { toggleGptSearchView } from '../utils/gptSlice';
import { SupportedLanguages } from '../utils/constant';
// import lang from '../utils/languageConstants';
import { changeLanguage } from '../utils/configSlice';
// import {showGptSearch} from '../utils/gptSlice';

const Header = () => {

  const showGptSearch=useSelector(store=>store.gpt.showGptSearch);
  
  const navigate=useNavigate();
  const user=useSelector(store=>store.user);
  const handleSignOut=()=>{
    signOut(auth).then(() => {
      // navigate("/");// edit5
    }).catch((error) => {
      navigate("/error");
    });
  }
  const dispatch=useDispatch();
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {

          const {uid,email,displayName,photoURL} = user;
          dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
          navigate("/browse");//edit 1
        }
         else {
          dispatch(removeUser());
          navigate("/");//edit 2
        }
      });

},[])

  const handleGptSearch=()=>{
    dispatch(toggleGptSearchView());
  }

  const handleLanguage=(e)=>{
    dispatch(changeLanguage(e.target.value));

  }

  return (
    <div className='absolute z-10 w-screen flex flex-col md:flex-row justify-between'>
        <img className='md:mx-5 w-36 h-36 mx-auto' src="https://iconape.com/wp-content/png_logo_vector/netflix.png"
        alt='logo'/>  
        {user &&<div className='p-2'>
          {
            showGptSearch && (
              <select  onClick={handleLanguage} className='p-2 m-2 rounded-xl bg-gray-900 text-white'>
              {SupportedLanguages.map((lang)=>(
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
            )
          }

          <button onClick={handleGptSearch} className='py-2 px-4 m-2 text-red-500 font-extrabold'>
            {showGptSearch ? "Home":"GPT Search"}
          </button>
          <button onClick={handleSignOut} className='mx-5 p-2 font-extrabold text-red-500'>
          Sign Out
         </button>  
        </div> 
        }  
    </div>
  )
}

export default Header