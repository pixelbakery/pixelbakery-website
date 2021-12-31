import React from 'react'
import { ChevronRightIcon } from '../Images/UI_Icons/index'
import Link from 'next/link'
type Props = {
  service: string
  url: string
}
export default function Work_Services_Card({ service, url }: Props) {
  return (
    <Link href={url} passHref>
      <article className=' m-2 w-full hover:opacity-90 hover:scale-95 cursor-pointer'>
        <div className='items-stretch bg-pink-light overflow-hidden rounded-lg flex-grow flex flex-row md:flex-col md:justify-between px-8 py-2 h-32  '>
          <h2 className='my-auto md:mt-2 md:mb-4 font-bold text-xl leading-none lg:text-2xl font-Heading text-pink'>
            {service}
          </h2>
          <i className='w-full my-auto md:my-4'>
            <ChevronRightIcon className=' h-12 w-12 text-pink ml-auto' />
          </i>
        </div>
      </article>
    </Link>
  )
}
