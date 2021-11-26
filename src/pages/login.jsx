import React, { useEffect } from "react";
import { gsap } from "gsap";
import LoginImage from "../img/pixel-bakery-samee-dan.webp";
import { Link } from "react-router-dom";

function Login() {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <main id='' className='my-4 lander grid grid-cols-6'>
      <div className='col-span-2 '>
        <div className='max-w-md mx-auto pt-32'>
          <h1 className='text-blue leading-none text-7xl mb-16'>
            Welcome back, you beautiful baker{" "}
          </h1>
          <form className='flex flex-col'>
            <input className='my-3' type='text' value='username or email' />
            <input className='my-3' type='password' value='password' />
            <input className='my-3' name='remember' type='checkbox' value='' />
            <label className='my-3' for='remember'>
              remember me?
            </label>
            <input type='submit' value="let's gooooooooooo!" />
          </form>
          <Link to={"/"} className='block mt-12  text-pink text-lg'>
            Forgot Password?
          </Link>
        </div>
      </div>
      <div className='col-span-4'>
        <img
          src={LoginImage}
          className='object-cover object-center w-full h-full'
          alt='samee callahan and dan hintz at pixel bakery'
        ></img>
      </div>
    </main>
  );
}

export default Login;
