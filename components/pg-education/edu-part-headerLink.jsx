import React from 'react'
import next from 'next'
import Link from 'next/link'
import { ChevronRightIcon } from '@heroicons/react/solid'

function ComponentName({ header, subheader, inpageLink }) {
  return (
    <Link href={inpageLink} scroll={false} passHref>
      <div className='my-3 md:my-4 cursor-pointer  border-4 md:border-5 border-pink px-6 pt-3 md:pt-6 pb-2 md:pb-4 rounded-xl flex flex-row justify-between transition duration-400 ease-in-out transform hover:scale-101'>
        <div>
          <h2 className='font-bold text-pink text-2xl md:text-3xl mb-1 pb-0 pt-0 mt-3 md:mt-6 leading-none'>
            {header}
          </h2>
          <p className='text-wine-200 font-medium text-lg md:text-xl pt-0 mt-0  pb-1 leading-none'>
            {subheader}
          </p>
        </div>
        <ChevronRightIcon className='-mr-4 md:mr-0 -mb-1 lg:-mb-2 mt-0 py-0 w-10 md:w-16 h-8 md:h-16 text-pink mx-1 self-end align-bottom' />
      </div>
    </Link>
  )
}

export default ComponentName
