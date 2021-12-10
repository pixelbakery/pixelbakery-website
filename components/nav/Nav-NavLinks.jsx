import React from 'react'
import next from 'next'
import Link from 'next/link'

export const NavTextLink = ({ text, url, id }) => {
  return (
    <div id={id} className=' self-center relative z-20'>
      <Link href={url} passHref>
        <a className='pointer-events-auto mx-3 text-xl tracking-wide lowercase text-peach font-bold'>
          {text}
        </a>
      </Link>
    </div>
  )
}

export const NavButton = ({ text, url, id }) => {
  return (
    <div id={id} className=' self-center relative z-30'>
      <Link href={url} passHref>
        <a className='pointer-events-auto  mx-3 my-2 py-3 rounded-sm px-6 w-full text-center bg-peach'>
          <span className='text-cream font-extrabold text-md lowercase tracking-wide'>{text}</span>
        </a>
      </Link>
    </div>
  )
}
