import React from 'react'
import Link from 'next'
import { ChevronRightIcon } from '@heroicons/react/solid'

export default function ButtonFilled({ text, link, color }) {
  return (
    <Link
      href={link}
      className={'py-3 rounded-sm px-6 w-full bg-transparent text-center border-' + color}
    >
      <div className={' font-extrabold text-xl lowercase flex text-' + color}>
        <div className='flex-grow flex flex-col justify-center'>{text}</div>

        <i className='h-12 w-12 flex flex-col justify-center'>
          <ChevronRightIcon className='  text-color' />
        </i>
      </div>
    </Link>
  )
}
