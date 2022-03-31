/* eslint-disable react/prop-types */
/* eslint-disable react/no-string-refs */
// eslint-disable-next-line react/no-string-refs
import nav_main from '@data/nav_main'
import Nav_SocialLinks from './Nav_SocialLinks'
import Link from 'next/link'
import { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'
import cn from 'classnames'
import Logo_Primary from '@images/logo_primary'
import Button_Filled from '@parts/Button_Filled'
//Public Dev Note: The html and css for the hamburger nav is forked from Mikael Ainalem's Flippin' Burgers pen: https://codepen.io/ainalem/pen/LJYRxz All credit goes to him <3

function Nav_FullscreenMenu({ isActive, onModalUpdate }) {
  const el = useRef(null)
  const fsNavRef = useRef(null)

  const handleLinkClick = () => {
    onModalUpdate(false)
  }

  useEffect(() => {
    if (!isActive) {
      document.body.classList.remove('overflow-y-hidden')
      gsap.to(fsNavRef.current, {
        invalidateOnRefresh: true,
        autoAlpha: 0,
      })
    } else {
      gsap.to(fsNavRef.current, {
        autoAlpha: 1,
      })
      document.body.classList.add('overflow-y-hidden')
    }
  }, [isActive])

  return (
    <nav
      ref={fsNavRef}
      id='fullscreenNav'
      className={
        'opacity-0 pointer-events-auto  p-4 fixed w-screen h-screen z-40  bg-cream top-0 right-0'
      }
    >
      <div className='relative w-full h-full bg-blue px-6 py-12'>
        <div className='relative z-20 mx-auto max-w-6xl flex justify-center h-full w-full'>
          <div className='w-full xl:w-2/3 flex flex-col justify-center '>
            {/* Main menu */}

            <div className=' mx-auto flex flex-col justify-center mb-3 2xl:mb-6 xl:mb-12 gap-2 2xl:gap-3 flex-wrap font-extrabold text-blue-dark text-2xl xl:text-4xl 2xl:text-6xl leading-none text-center lowercase'>
              <Link href='/'>
                <div
                  className='self-center cursor-pointer duration-300 ease-in-out hover:scale-99 text-blue-dark w-28 md:w-32 xl:w-40'
                  onClick={handleLinkClick}
                >
                  <Logo_Primary className='object-contain w-full h-full' />
                </div>
              </Link>
              <div className='grid grid-cols-1 gap-y-3 md:gap-y-2  lg:-mt-6' ref={el}>
                {nav_main.map((nav_item, index) => {
                  return (
                    <div key={index} className='duration-300 ease-in-out hover:scale-99'>
                      <Link href={nav_item.url} passHref>
                        <a className='' onClick={handleLinkClick}>
                          {nav_item.text}
                        </a>
                      </Link>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className='mx-auto'>
              <div
                className='flex flex-center w-full mt-3 md:mt-0 2xl:mt-3'
                onClick={handleLinkClick}
              >
                <Button_Filled
                  center={true}
                  text={'Start something wonderful'}
                  link={'/onboarding'}
                  bgColor={'peach'}
                  textColor={'pink-light'}
                  chevronDirection='right'
                />
              </div>
              <div className='flex w-full'>
                <Nav_SocialLinks color={'blue-dark'} textSize={'text-2xl md:text-3xl'} />
              </div>
            </div>
          </div>
          {/* 
          <div className='w-full md:w-1/3 flex flex-col justify-between h-full'>
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
              <Button_Filled
                text={'Start something wonderful'}
                link={'/onboarding'}
                bgColor={'pink'}
                textColor={'pink-light'}
                chevronDirection='right'
              />
            </div>
          </div> */}
        </div>
      </div>
    </nav>
  )
}

export default Nav_FullscreenMenu
