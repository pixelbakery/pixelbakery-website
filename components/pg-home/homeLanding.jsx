import React from 'react'
import Link from 'next/link'
import SocialLinks from '../parts/socialOptions'
import ButtonFilled from '../parts/button-filled'
import Image from 'next/image'

export default function homeLanding() {
  //localhost:3000/assets/img/pixelbakery_pattern_blue.svg
  http: return (
    <div>
      <section className='lander overflow-hidden w-full my-4 flex'>
        <nav className='w-1/3 max-w-lg bg-pink-light h-full flex flex-col justify-between py-10 px-12 '>
          <div className='logo-wrapper px-20 w-full text-blue fill-current'>
            <Image
              className=' object-center block m-auto object-contain w-full logo-pink'
              src={'/img/pixelbakery-logo-primary.svg'}
              id='home-logo'
              alt='pixel bakery is an animation and video production studio'
            />
          </div>
          <div className='mx-auto w-full px-4'>
            <div className='mx-auto mt-12' id='homepage-main-nav'>
              <ul className=''>
                <li className='my-1'>
                  <Link href={'/work'}>
                    <a className='text-pink font-bold lowercase text-4xl'>work</a>
                  </Link>
                </li>
                <li className='my-1'>
                  <Link href={'/about'}>
                    <a className='text-pink font-bold lowercase text-4xl'>bakery</a>
                  </Link>
                </li>
                <li className='my-1'>
                  <Link href={'/education'}>
                    <a className='text-pink font-bold lowercase text-4xl'>education</a>
                  </Link>
                </li>
                <li className='my-1'>
                  <Link href={'/contact'}>
                    <a className='text-pink font-bold lowercase text-4xl'>contact us</a>
                  </Link>
                </li>
                <li className='my-1'>
                  <Link href={'/recipes'}>
                    <a className='text-pink font-bold lowercase text-4xl'>mom's recipes</a>
                  </Link>
                </li>
                <li className='my-2'>
                  <Link href={'/store'}>
                    <a className='text-pink font-bold lowercase text-4xl'>company store</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className=''>
            <div className='text-blue font-bold text-2xl text-center w-full mb-0 pb-0'>
              fresh puns & nice buns
            </div>
            <div className='flex flex-center w-full my-3 '>
              <ButtonFilled
                text={'Start something wonderful'}
                link={'/onboarding'}
                color={'bg-pink'}
              />
            </div>
            <div className='block'>
              <SocialLinks color={'text-blue'} />
            </div>
          </div>
        </nav>
        <div className='flex-grow pb-pattern ' id='homepage-lander'>
          <div className=' flex flex-col mx-auto h-1/3 '>
            <Image
              src={'/img/pixelbakery_boxlogo.svg'}
              alt=''
              className='object-center block m-auto '
            />
          </div>
        </div>
      </section>
    </div>
  )
}
