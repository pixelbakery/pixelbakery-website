/* eslint-disable react/no-string-refs */
// eslint-disable-next-line react/no-string-refs
import React, { useState, useEffect } from 'react'
import next from 'next'
import Link from 'next/link'
import gsap from 'gsap'
import SocialLinks from '../parts/socialOptions'
import ButtonFilled from '../parts/button-filled'
//Public Dev Note: The html and css for the hamburger nav is forked from Mikael Ainalem's Flippin' Burgers pen: https://codepen.io/ainalem/pen/LJYRxz All credit goes to him <3

function Nav_FullscreenMenu(props) {
  function handleHamToggle(event) {
    props.onClick(event.target.value)
  }
  return (
    <nav
      id='fullscreenNav'
      className='pointer-events-auto  p-4 fixed w-screen h-screen z-30  bg-cream top-0 right-0'
    >
      <div className='relative w-full h-full bg-blue-light'>
        <div className='absolute z-10 w-full h-full overflow-hidden saturate-200 blur-md'>
          <video
            muted
            autoPlay
            loop
            preload='true'
            className='absolute z-0 object-cover w-full h-full saturate-150 blur-md'
          >
            <source src='/img/PB_RotatingWhisk.mp4' />
          </video>
        </div>
        <div className='relative backdrop-filter backdrop-saturate-150 contrast-125 z-20 mx-auto max-w-6xl flex justify-center h-full w-full'>
          <div className='w-2/3 flex flex-col justify-between '>
            {/* Main menu */}
            <div className=' flex flex-col  flex-wrap font-extrabold text-blue-dark text-6xl'>
              <Link href='/' passHref>
                <a className=' ' onClick={handleHamToggle}>
                  Home
                </a>
              </Link>
              <Link href='/work' passHref>
                <a className='' onClick={handleHamToggle}>
                  Work
                </a>
              </Link>
              <Link href='/about' passHref>
                <a className='' onClick={handleHamToggle}>
                  About
                </a>
              </Link>
              <Link href='/education' passHref>
                <a className='' onClick={handleHamToggle}>
                  Education
                </a>
              </Link>
              <Link href='/recipes' passHref>
                <a className='' onClick={handleHamToggle}>
                  Mom&apos;s Recipes
                </a>
              </Link>
              <Link href='/store' passHref>
                <a className='' onClick={handleHamToggle}>
                  Company Store
                </a>
              </Link>
            </div>
            <div className='mx-auto'>
              <div className='text-blue font-bold text-2xl text-center w-full mb-0 pb-0'>
                fresh puns & nice buns
              </div>

              <div className='block'>
                <SocialLinks color={'text-blue'} />
              </div>
            </div>
          </div>

          <div className='w-1/3 flex flex-col justify-between h-full'>
            <div className=''>
              <Link href={'/'} passHref>
                <a target='_blank' ref='noopener' className='block'>
                  2124 y st ste 208
                  <br />
                  lincoln, ne 68503
                </a>
              </Link>
              <Link href={'tel:4023020323'} passHref>
                <a target='_blank' ref='noopener' className='block'>
                  402 302 0323
                </a>
              </Link>
            </div>
            <div className=''>
              <button className=' flex'>
                <i className='inline-block w-12'>
                  <svg
                    id='Icon_feather-play-circle'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='-20 -20 145 145'
                    className='pointer-events-auto object-contain w-full h-full stroke-blue-dark stroke-10 '
                  >
                    <path
                      d='M102,52.5A49.5,49.5,0,1,1,52.5,3,49.5,49.5,0,0,1,102,52.5Z'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='fill-none '
                    />
                    <path
                      d='M15,12,44.7,31.8,15,51.6Z'
                      transform='translate(27.6 20.7)'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='fill-none '
                    />
                  </svg>
                </i>
                <span className='ml-2 self-center text-3xl text-blue-dark font-bold'>
                  2021 Demo Reel
                </span>
              </button>
            </div>
            <div className=''>
              <Link href={'mailto:hello@pixelbakery.com'} passHref>
                <a target='_blank' ref='noOpener' className='block'>
                  hello@pixelbakery.com
                </a>
              </Link>
            </div>
            <div className='flex flex-center w-full my-3 '>
              <ButtonFilled
                text={'Start something wonderful'}
                link={'/onboarding'}
                color={'bg-pink'}
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav_FullscreenMenu
