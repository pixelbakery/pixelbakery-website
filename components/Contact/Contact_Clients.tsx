import React from 'react'
import Link from 'next/link'
import PageSection from '../PageSection'
import InnerWrapper from '../InnerWrapper'
import H2 from '../H2'
import cn from 'classnames'
import gsap from 'gsap'
import Lead from '../Lead'
import Image from 'next/image'
import Button_Filled from '../parts/Button_Filled'

function Contct_Clients() {
  return (
    <section
      className='lg:px-28 my-4  lg:pb-40 lg:mt-64 grid grid-cols-1 lg:grid-cols-2 gap-4 '
      id='onboarding'
    >
      <div className='-mt-20 hidden lg:block  -mr-20 col-span-1 h-full'>
        <div className='relative shadow-lg  h-full'>
          <Image
            src={'/img/pixel-bakery-office.jpeg'}
            layout='fill'
            objectFit='cover'
            className='bg-pink'
            blurDataURL='true'
            alt="pixel bakery's main office in lincoln, nebraska"
          />
        </div>
      </div>
      <div className=' col-span-1 bg-pink py-24 px-12 lg:pl-32 lg:pr-24'>
        <div className=' grid grid-cols-1'>
          <div className='col-span-1'>
            <H2 color='pink-light'>Become a client</H2>
          </div>
          <div className='col-span-1'>
            <Lead color='peach' className='leading-tight'>
              Schedule a meeting with Jordan and he’ll buy you a beer or take you out for coffee. We
              believe in building long-term relationships with our clients, so we’re never pushy or
              “car salesman-y”. REWRITE THIS COPY I HATE IT
            </Lead>
          </div>
        </div>
        <Button_Filled
          link='/onboarding'
          text='start a project'
          textColor='peach'
          bgColor='pink-light'
          center={true}
          chevronDirection={'right'}
        />
      </div>
    </section>
  )
}
export default Contct_Clients
