import React, { useRef, useState } from 'react'
import { checkValidData } from '../utils/validate';
import Header from './Header'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../utils/firebase";
// import { useNavigate } from 'react-router';
import { updateProfile } from "firebase/auth";

const Login = () => {
  // const navigate=useNavigate();
  const [isSignInForm,setIsSignInForm]=useState(true);
  const [errorMessage,setErrorMessage]=useState(null);
  const email=useRef(null);
  const password=useRef(null);
  const name=useRef(null);

  const handleButtonClicked=()=>{
    
    
    // console.log(email.current.value);
    // console.log(password.current.value);

    const message=checkValidData(email.current.value,password.current.value);
    // console.log(message);
    

    if(message) return;
    
    if(!isSignInForm){
      // eslint-disable-next-line
      createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
      .then((userCredential) => {
    // Signed up 
      const user = userCredential.user;
      updateProfile(user, {
        displayName: name.current.value, photoURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAjVBMVEUNfoD///8Ae30AeHoAdXcAdnl6q6z2+/vo8vLx+Ph1sbIAdHfu9PQHfH8AgYPl8vI7kJKRvr+hx8jO4+PJ3d4eioxppqja6eni7OxdoqRSnqC42dqXxsaw09Ntra8ph4l/uLmGtrdapqeozc02lZdMmZuuzM3A2NnU4+SRvL2fy8xSmZpEkZO+1NV1qaqNxlfBAAAEIElEQVR4nO3bXXeiOhQGYNgJg6AiiIiggtbP0U7//8+beJzjoCYtSAQ7630uetVmvZuEEOnWMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAvjNi3Ii8rkWtpuiLGCyKxA/dOchIZ3FPmGc5tVckGf4iPMUIA9/QGYNoEZr/c4Y+0zh2FSydX2KY00RfDDJ2ZlEnbadEa+EUYziBrlkkPzav2W4rJc5vYphzTQPTbYGixBZmkc/uYphDPTG29yObHb/p7YYSSQxzqSEGJbZs6FX9kavJQ1mMQV6/RDaVjWzaDU8i/ZDGMBf116knH1nH0FUoLrQ5qR2D3hQVhl0dwUvjihh2VHctsZVqaC3By6K1IoaZ1a2Qj5QXr68leznKpWQu6y5Tfv8wbKXC7HkV7hQjN1xh+rQKmeQkca6w0acFRaoKa9+HyosXci3Ry7Kk5w4de6lhKCps+nl4d+w+q/88VD0uHA3HpSpoLJ/ErH6FdHRkIw+b3GdOPOljK841DE2yvWaiYflXjLGWTKLtaolB9w8Me938uxq+uC8x0LMZUHRboqNh9T+QY3lb4ErXrUL92dXli6N23tPwt04xRsfV+MCi5O+Hl8Gy4W20EMMvXOrhRut1Jsrd+WQy2c82Wt9TVo7hpatY5FhlhvbXtsQsLmh/11w9x0vEAAAAAAAAAAAAAAAAgH8KMc/4l/8HRXyz3e2GLf07uqD/nO+fkLHZ2eeWgnZnkVi0ifSvJOLJpUXKTtoskfxdp9fZb7TWSETprtA50XCD3RWW/Qky19dUQCx3b7r2PV1jV+dd+sU6M88iDc0v1I2Cu5bextuzLqyrdrGgdhOHmL6xrGM/0hP3EfurIM42YY/fkMRYOpR2ZDvt3Yfe/iaLPVn4j7TBiL0l9xexooe24UbXIkvWL7n7uSGryh1JjEfjofQrQefV/7T8X2OuNFIvnq3FmisxlyR+zYoWo4Fi9oRB1kAhapbyytvT4OM9OpUpr1PUZhnR8SOYqosT4sxq99AmHvifxBuEo2G2iXiXc1bEeddYp8vtaN/55K9P9bntH0qJZV+kFHrh9HAI3P8sDodVqL7nCuzwrc0Wwr9YFEjbxGuy5+MWv1F+jcgPPr2XHtAL3l9j/v4Qny+CUguvHGfnvt7n3r44LSu+IFnVIDgarW8vUsSjmepQUnr24iB65dZZYt54NXi8vtEw9V64vDOx/fmHuPre6vSmWa6/r/s5xDls7W7D8lU64fZn6vFvUt4ZMcrfk2D69VnAmQbj95xefm3KiHMn73prN/g1CuO441zm1HacQRyHo19Btva6vMz5/JWd6jQ83z8mx48fZ8kx2fi5R9++tiKiPl1rOxEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALy43/ipMgzSotaqAAAAAElFTkSuQmCC"
      }).then(() => {
        // Profile updated!
        // navigate("/browse"); //edit 4
      }).catch((error) => {
        // An error occurred
        setErrorMessage(error.message);
      });
      console.log(user);
      
      })
      .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage(errorCode+" "+errorMessage);

      });
    }
    else{
        signInWithEmailAndPassword(auth, email.current.value,password.current.value)
         .then((userCredential) => {
    // Signed in 
        const user = userCredential.user;
        // console.log(user);
        // navigate("/browse"); //edit3
    // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode +"-"+ errorMessage);
        });
        
    }

  }

  const toggleSignInForm=()=>{
        setIsSignInForm(!isSignInForm);
  }

  return (
    <div className=''>
        <Header/>
        <div className='absolute'>
        <img className='' src="https://assets.nflxext.com/ffe/siteui/vlv3/c31c3123-3df7-4359-8b8c-475bd2d9925d/15feb590-3d73-45e9-9e4a-2eb334c83921/IN-en-20231225-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt='logo'></img>
        </div>
        <div>
          <form
            onSubmit={(e)=>e.preventDefault()}
            className='text-white bg-opacity-80 absolute p-12 w-3/12 bg-black my-36 mx-auto right-0 left-0'>
            <h1 className='font-bold text-3xl py-4'>
               {isSignInForm ? "Sign In ":"Sign Up"}
            </h1>
            {!isSignInForm &&(
                <input 
                ref={name}
                className='p-4 my-4 w-full bg-gray-900 rounded-lg' type="text" placeholder='Full Name'></input>
            )}
            <input 
               ref={email}
               className='p-4 my-4 w-full bg-gray-900 rounded-lg' type="text" placeholder='Email Address'>
            </input>
            <input 
               ref={password}
               className='p-4 my-4 w-full bg-gray-900 rounded-lg'  type="password" placeholder='Password'>
            </input>
            <p className='text-red-400'>{errorMessage}</p>
            <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={handleButtonClicked}>
              {isSignInForm ? "Sign In ":"Sign Up"}
            </button>
            <p className='cursor-pointer' onClick={toggleSignInForm}>
              {isSignInForm ? "New to Netflix? Sign Up Npw ":"Already registerd? Sign In"}
            </p>
          </form>  
        </div>    
    </div>
  )
}

export default Login