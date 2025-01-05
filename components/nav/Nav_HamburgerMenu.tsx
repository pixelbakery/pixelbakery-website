// components/nav/Nav_HamburgerMenu.tsx
import { useRef } from 'react'
import style from '@styles/HamburgerMenu.module.css'
import cn from 'classnames'

import type { FullscreenMenuProps } from '@types'

export default function Nav_HamburgerMenu({ isActive, onModalUpdate }: FullscreenMenuProps) {
  const hamRef = useRef<HTMLDivElement>(null)

  const updateModal = () => {
    onModalUpdate(!isActive)
  }

  return (
    <div
      id='nav-ham'
      className='relative z-50 self-center inline-block w-12 pointer-events-auto md:w-16 md:h-16'
      ref={hamRef}
      onClick={updateModal}
    >
      <div className='inline-block transition-all ease-in-out transform scale-100 rounded-lg opacity-100 group bg-cream duration-600 hover:scale-95 active:scale-97'>
        <div className={cn(style.hamWrapper)}>
          <svg
            className={cn(style.ham, style.hamRotate, {
              [style.active]: isActive,
            })}
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
