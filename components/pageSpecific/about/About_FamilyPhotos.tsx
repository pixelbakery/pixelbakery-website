import { useEffect } from 'react'

import photos from '@data/about-studioviews'
import Image from 'next/image'

function About_FamilyPhotos() {
  return (
    <section className='my-4 py-24'>
      <div className='grid grid-cols-5 gap-12 w-full'>
        <div className='h-full col-span-2 flex flex-col justify-center mx-auto'>
          <div className='max-w-md px-12 mx-4'>
            <h2 className='text-8xl font-bold text-pink leading-none'>Studio Views</h2>
            <p className='text-2xl font-medium leading-loose py-3 text-wine opacity-80'>
              Where the magic happens
            </p>
          </div>
        </div>
        <div className=' col-span-3'></div>
      </div>
    </section>
  )
}

export default About_FamilyPhotos
