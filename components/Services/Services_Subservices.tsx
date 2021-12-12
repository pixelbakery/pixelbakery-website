import React from 'react'
import Servicess_Subservicess_Box from './Servicess_Subservicess_Box'
import subservice from '../../data/services-animation'

function Services_Subservices() {
  return (
    <section
      className=' py-16 grid grid-cols-2 w-full bg-white'
      id='services-animation-subservices overflow-hidden sticky'
    >
      <div className='w-full h-screen flex flex-col justify-center max-w-md mx-auto sticky top-0 overflow-auto'>
        <div className=''>
          <h2 className='text-wine'>there’s plenty of ways to butter your bread</h2>
          <p className='text-blue text-xl font-extrabold '>
            and we’ve pretty much mastered all of them.
          </p>
        </div>
      </div>
      <div className='w-full h-full max-w-lg mx-auto'>
        <div>
          {subservice.map((subservice) => (
            <Servicess_Subservicess_Box subservice={subservice} key={subservice.service} />
          ))}
        </div>
      </div>
    </section>
  )
}
export default Services_Subservices
