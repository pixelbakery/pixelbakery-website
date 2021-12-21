import React from 'react'
import next from 'next'
import Link from 'next/link'

export const Nav_Links_Text = ({ text, url, id }) => {
  return (
    <div id={id} className=' self-center relative z-20 hidden md:block'>
      <Link href={url} passHref>
        <a className='bg-cream px-3 py-2 rounded-sm my-3 pointer-events-auto mx-3 text-md tracking-wide lowercase text-peach font-extrabold'>
          {text}
        </a>
      </Link>
    </div>
  )
}

export const Nav_Links_Button = ({ text, url, id }) => {
  return (
    <div id={id} className=' self-center relative z-30 hidden md:block'>
      <Link href={url} passHref>
        <a className='pointer-events-auto  mx-3 my-2 py-3 rounded-sm px-6 w-full text-center bg-peach'>
          <span className='text-cream font-extrabold text-md lowercase tracking-wide'>{text}</span>
        </a>
      </Link>
    </div>
  )
}
