import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import LoginImage from '../img/pixel-bakery-samee-dan.webp'
import Link from 'next'
import Image from 'next'
import Submit from '../components/parts/form-submit/'
function Login() {
  useEffect(() => {
    return () => {}
  }, [])

  return (
    <main id='' className='my-4 lander grid grid-cols-6'>
      <div className='col-span-2 '>
        <div className='max-w-md mx-auto pt-32'>
          <h1 className='text-blue leading-none text-7xl mb-16'>
            Welcome back, you beautiful baker!
          </h1>
          <form className='flex flex-col'>
            <input className='my-3' type='text' value='username or email' />
            <input className='my-3' type='password' value='password' />
            <input className='my-3' name='remember' type='checkbox' value='' />
            <label className='my-3' htmlFor='remember'>
              remember me?
              <small className='text-wine text-opacity-40 italic'>of course i remember you.</small>
            </label>
            <Submit text={'let’s goooooo'} color={'blue'} chevronColor={'wine'} />
            <input
              className='border-blue border-2 py-4 font-semibold bg-transparent text-blue text-xl rounded-md'
              type='submit'
              value="let's gooooooooooo!"
            />
          </form>
          <Link href={'/'} className='block mt-12  text-pink text-lg'>
            Forgot Password?
          </Link>
        </div>
      </div>
      <div className='col-span-4'>
        <Image
          src={LoginImage}
          className='object-cover object-center w-full h-full'
          width='100%'
          height='100%'
          alt='samee callahan and dan hintz at pixel bakery'
        />
      </div>
    </main>
  )
}

export default Login
