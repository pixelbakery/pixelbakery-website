import React from 'react'

import Link from 'next/link'
import Image from 'next/image'
import Form_Submit from '../components/parts/Form_Submit'
function Login() {
  return (
    <main className='my-4 lander grid grid-cols-5 overflow-hidden'>
      <div className='col-span-2 '>
        <div className='max-w-md mx-auto pt-32'>
          <h1 className='text-blue leading-none text-7xl mb-16'>
            Welcome back, you beautiful baker!
          </h1>
          <form className='flex flex-col'>
            <input className='my-3' type='text' placeholder='username or email' />
            <input className='my-3' type='password' placeholder='password' />
            <input className='my-3' name='remember' type='checkbox' value='' />
            <label className='my-3' htmlFor='remember'>
              remember me?
              <small className='text-wine text-opacity-40 italic'>of course i remember you.</small>
            </label>
            <Form_Submit
              text={'let’s goooooo'}
              color={'blue'}
              chevronColor={'wine'}
              link={undefined}
            />
            <input
              className='border-blue border-2 py-4 font-semibold bg-transparent text-blue text-xl rounded-md'
              type='submit'
              value="let's gooooooooooo!"
            />
          </form>
          <Link href={'/'} passHref>
            <a className='block mt-12  text-pink text-lg'> Forgot Password?</a>
          </Link>
        </div>
      </div>
      <div className='col-span-3 relative overflow-hidden'>
        <Image
          src='/img/pixel-bakery-samee-dan.webp'
          className='object-cover object-center inset-o'
          layout='fill'
          alt='samee callahan and dan hintz at pixel bakery'
        />
      </div>
    </main>
  )
}

export default Login
