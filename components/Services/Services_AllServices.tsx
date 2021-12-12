import React from 'react'
import Services_AllServicess_Card from './Services_AllServices_Card'
import services from '../../data/services'

function Services_AllServices() {
  return (
    <section className='w-full grid grid-cols-12 bg-cream py-24 my-4'>
      <div className='max-w-md mx-auto col-span-4 flex flex-col justify-center'>
        <h3 className='text-blue-dark text-5xl max-w-xs'>Some of our other talents</h3>
        <p className='text-pink font-extrabold text-xl'>this is a subheader</p>
      </div>

      <div className=' mx-auto flex flex-wrap col-span-8 -mt-2'>
        {services.map((services) => (
          <Services_AllServicess_Card service={services} key={services.service} />
        ))}
      </div>
    </section>
  )
}

export default Services_AllServices
