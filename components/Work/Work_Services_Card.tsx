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
      <article className='bg-pink-light overflow-hidden rounded-lg  w-full hover:opacity-90 hover:scale-98 cursor-pointer px-8 py-2  h-24 sm:h-28 lg:h-32  '>
        <div className='  flex flex-row  justify-between gap-4 h-full'>
          <div className='self-center'>
            <h3 className=' my-1 md:my-3 font-semibold lg:font-bold text-xl leading-none lg:text-2xl font-Heading text-pink'>
              {service}
            </h3>
          </div>
          <div className='self-center -mb-1'>
            <i className=' '>
              <ChevronRightIcon className=' h-10 w-10 lg:h-12 lg:w-12 text-pink ml-auto' />
            </i>
          </div>
        </div>
      </article>
    </Link>
  )
}
