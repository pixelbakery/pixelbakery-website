import React, { useState, useRef } from 'react'
import Nav_FullscreenMenu from './Nav_FullscreenMenu'
import style from '@styles/HamburgerMenu.module.css'
import cn from 'classnames'
//Public Dev Note: The html and css for the hamburger nav is forked from Mikael Ainalem's Flippin' Burgers pen: https://codepen.io/ainalem/pen/LJYRxz All credit goes to him <3

function Nav_HamburgerMenu({ isActive, onModalUpdate }) {
  const hamRef = useRef(null)

  const updateModal = () => {
    onModalUpdate(!isActive)
  }
  return (
    <div
      id='nav-ham'
      className='relative z-50 inline-block pointer-events-auto self-center  md:w-16 w-12 md:h-16 '
      ref={hamRef}
      onClick={updateModal}
    >
      <div
        className='group inline-block bg-cream rounded-lg transform transition-all duration-600 ease-in-out scale-100 opacity-100
hover:scale-95 active:scale-97'
      >
        <div className={cn(style.hamWrapper)}>
          <svg
            className={cn(style.ham, style.hamRotate, { [style.active]: isActive })}
            viewBox='0 0 100 100'
          >
            <path
              className={cn(style.line, style.top)}
              d='m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20'
            />
            <path className={cn(style.line, style.middle)} d='m 30,50 h 40' />
            <path
              className={cn(style.line, style.bottom)}
              d='m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20'
            />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Nav_HamburgerMenu
