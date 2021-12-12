import React, { useEffect } from 'react'
import Image from 'next/image'
import { NextPage } from 'next'
import clientList from '../../data/work-client-list'

// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import GsapClients from "../../js/GSAPclients";

function Work_Clients() {
  // useEffect(() => {
  //   GsapClients();
  // }, [])

  return (
    <div>
      <section className=' my-4 py-8 bg-cream flex justify-around overflow-hidden mx-auto clients'>
        <div className='px-12 mx-auto lg:px-24 py-4 lg:py-16 grid  grid-cols-6'>
          <div className='col-span-2'>
            <h1 className='text-peach inline-block align-text-bottom'>Our lovely clients</h1>
          </div>
          <div className='col-span-4  flex justify-between'>
            <div className=' w-auto wrapper-clients overflow-hidden'>
              <div className='boxes ' id='boxCol'>
                {clientList.map((client) => (
                  <div className='box absolute w-full ' key={client.client}>
                    <div className='client-box-Image h-full overflow-hidden '>
                      <Image
                        width='100%'
                        height='100%'
                        src={client.logo}
                        alt={client.client}
                        className='object-contain object-center h-full mx-auto'
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className='scrim'> </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Work_Clients
