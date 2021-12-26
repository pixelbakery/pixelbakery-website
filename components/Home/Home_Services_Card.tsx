import React from 'react'
import { ChevronRightIcon } from '../Images/UI_Icons/index'
import PropTypes from 'prop-types'

Home_Services_Card.PropTypes = {
  service: PropTypes.object,
  url: PropTypes.string,
  color: PropTypes.string,
}
function Home_Services_Card({ service, link, color }) {
  return (
    <article className='relative m-2 w-full md:w-1/5 flex-stretch hover:opacity-90 hover:scale-95'>
      <div className='items-stretch border-4 border-pink-light bg-pink-light overflow-hidden rounded-lg flex-grow flex flex-row md:flex-col md:justify-center px-8 py-2 h-40 '>
        <h4 className='my-auto md:mt-2 md:mb-4 font-bold text-xl font-Heading text-pink'>
          {service}
        </h4>
        <i className='w-full my-auto md:my-4 absolute bottom-0 right-0'>
          <ChevronRightIcon className=' h-12 w-12 text-pink ml-auto' />
        </i>
      </div>
      <a
        href={link}
        className='hover:opacity-90 absolute h-full w-full z-10 opacity-0 top-0 left-0 cursor-pointer'
      ></a>
    </article>
  )
}

export default Home_Services_Card
