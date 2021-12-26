import React from 'react'
import { ChevronRightIcon } from '../Images/UI_Icons/index'

export default function Work_Services_Card({ service }) {
  return (
    <article className='relative m-2 w-full md:w-2/5 flex-stretch hover:opacity-90 hover:scale-95'>
      <div className='items-stretch bg-pink-light overflow-hidden rounded-lg flex-grow flex flex-row md:flex-col md:justify-between px-8 py-2 h-32 md:h-56 '>
        <h2 className='my-auto md:mt-2 md:mb-4 font-bold text-2xl font-Heading text-pink'>
          {service.service}
        </h2>
        <i className='w-full my-auto md:my-4'>
          <ChevronRightIcon className=' h-12 w-12 text-pink ml-auto' />
        </i>
      </div>
      <a
        href={service.url}
        className='hover:opacity-90 absolute h-full w-full z-10 opacity-0 top-0 left-0 cursor-pointer'
      ></a>
    </article>

    // <a href="#" className="">
    //     <article className="w-1/2 flex flex-col bg-pink-light rounded-lg text-pink" id="serviceAnimation">
    //         <h3 className="flex-grow">{service.service}</h3>
    //     </article>
    // </a>
  )
}
