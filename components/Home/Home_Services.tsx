import React, { useEffect } from 'react'
import Work_Services_Card from '../Work/Work_Services_Card'
import services from '../../data/services'
import gsap from 'gsap'
// import { PbIconMixerAbs } from "../icons/abs/index";

function Home_Services() {
  useEffect(() => {
    const mixerTL = gsap.timeline({
      defaults: {
        y: -30,
        rotation: gsap.utils.random(0, -15),
        stagger: 0.1,
        ease: 'sine.inOut',
      },
      repeat: -1,
      yoyo: true,
    })

    mixerTL.to('#home-mixer', {
      y: 30,
      rotation: gsap.utils.random(-1, 15),
      duration: 4,
    })
  }, [])
  return (
    <section
      className='my-4 px-6 relative py-8 lg:py-16 bg-blue overflow-hidden'
      id='home-services'
    >
      <div className=' max-w-6xl mx-auto z-10'>
        <div className=' w-full flex flex-col '>
          <div className=' mb-16'>
            <h2 className='text-blue-dark font-bold'>And w&apos;re greats at what we do. </h2>
            <p className='text-2xl font-medium text-cream'>
              This is our craft.
              <br /> Our hobbies are our profession.
            </p>
          </div>
          <div className='mx-auto w-full flex flex-wrap justify-between  -mt-2 mb-16'>
            {services.map((service) => (
              <Work_Services_Card
                service={service.service}
                url={service.url}
                key={service.service}
              />
            ))}
          </div>
        </div>
      </div>
      <div className='absolute w-full max-w-md z-0 top-14 right-10' id='home-mixer'>
        {/* <PbIconMixerAbs /> */}
      </div>
    </section>
  )
}

export default Home_Services
