import React, { useState } from 'react'
import next from 'next'

//Public Dev Note: The html and css for the hamburger nav is forked from Mikael Ainalem's Flippin' Burgers pen: https://codepen.io/ainalem/pen/LJYRxz All credit goes to him <3

function HamburgerNav() {
  const [isActive, setActive] = useState('false')
  const handleHamToggle = () => {
    setActive(!isActive)
  }
  return (
    <div
      id='nav-ham'
      className='z-100 relative inline-block z-100 pointer-events-auto self-center w-16 h-16'
    >
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
  )
}

export default HamburgerNav
