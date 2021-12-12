import React from 'react'

function Services_Header() {
  return (
    <section id='services-lander' className='w-full lander grid grid-cols-2 mt-4 mb-4 '>
      <div className='bg-peach w-full'>
        <div className='relative w-full h-full overflow-hidden'>
          <video muted autoPlay loop preload='true' className='absolute object-cover w-full h-full'>
            <source src='./src/img/Pixel-Bakery_3D-Oven-Render.mp4' />
          </video>
        </div>
      </div>
      <div className='bg-egg'>
        <div className=' max-w-md h-full flex flex-col mx-auto justify-center'>
          <span className='mt-0 -mb-2 py-0 text-blue font-extrabold text-lg'>Service</span>
          <h1 className='mt-0 pt-0 mb-3 text-blue-dark'>Animation</h1>
          <p className='text-peach font-extrabold text-lg my-3 leading-relaxed'>
            Proactively repurpose premier leadership via sticky architectures. Uniquely predominate
            distinctive convergence for stand-alone alignments.{' '}
          </p>
          <p className='mt-6 leading-loose'>
            Phosfluorescently restore enabled models before premium solutions. Monotonectally
            initiate cross-platform strategic theme areas vis-a-vis out-of-the-box testing
            procedures. Compellingly deploy high-payoff catalysts for change via empowered
            solutions. Proactively empower.
          </p>
        </div>
      </div>
    </section>
  )
}
export default Services_Header
