import React, { useState, useEffect } from 'react'
import Nav_FullscreenMenu from './Nav_FullscreenMenu'
import gsap from 'gsap'
//Public Dev Note: The html and css for the hamburger nav is forked from Mikael Ainalem's Flippin' Burgers pen: https://codepen.io/ainalem/pen/LJYRxz All credit goes to him <3

function Nav_HamburgerMenu() {
  const [isActive, setActive] = useState(true)

  const handleHamToggle = () => {
    console.log('test')
    setActive(!isActive)
    if (isActive) {
      HandleHamOpen()
      gsap.set('body', { className: 'px-4 bg-egg overflow-hidden overscroll-none ', delay: 0.5 })
    } else {
      handleHamClose()
      gsap.set('body', {
        className: 'px-4 bg-egg overflow-auto overscroll-auto ',
        delay: 0.5,
      })
    }
  }
  useEffect(() => {
    gsap.set('#fullscreenNav', { opacity: 0, autoAlpha: 0 })
  })

  function HandleHamOpen() {
    // gsap.to('#fullscreenNav', { display: 'block' })
    gsap.to('#fullscreenNav', { duration: 0.66, opacity: 1, autoAlpha: 1 })
    //
  }
  const handleHamClose = () => {
    gsap.to('#fullscreenNav', { duration: 0.66, opacity: 0, autoAlpha: 0 })
    // gsap.set('#fullscreenNav', { display: 'none' })
  }

  return (
    <div>
      <div
        id='nav-ham'
        className='relative z-50 inline-block pointer-events-auto self-center  md:w-16 w-12 md:h-16 '
      >
        <div
          className='group inline-block bg-cream rounded-lg transform transition-all duration-600 ease-in-out scale-100 opacity-100
  hover:opacity-90 hover:scale-95 active:scale-97'
        >
          <div className='block group-hover:scale-150'>
            <svg
              className={
                'ham hamRotate ham8 pointer-events-auto object-contain w-full h-full ' +
                (!isActive ? 'active' : '')
              }
              viewBox='0 0 100 100'
              onClick={handleHamToggle}
            >
              <path
                className='line top fill-none stroke-peach '
                d='m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20'
              />
              <path className='line middle fill-none stroke-peach' d='m 30,50 h 40' />
              <path
                className='line bottom fill-none stroke-peach '
                d='m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20'
              />
            </svg>
          </div>
        </div>
      </div>
      <Nav_FullscreenMenu onClick={handleHamToggle} />
    </div>
  )
}

export default Nav_HamburgerMenu
