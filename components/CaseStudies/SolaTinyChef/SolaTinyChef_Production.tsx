import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
function SolaTinyChef_Production() {
  return (
    <section className=' my-4 py-12'>
      <div className='px-6 mx-auto md:max-w-6xl'>
        <h2 className='text-center lg:text-left mt-0 pt-0 mx-auto text-4xl max-w-sm '>
          {' '}
          Production
        </h2>
        <p className='mx-auto py-4  mb-4 text-wine text-md max-w-sm text-opacity-75'>
          The live-action portion of this project consisted of hiring a production crew to assist in
          bringing the Tiny Chef Magic to life. The video production team included a director,
          gaffer, grip, assistant camera, and a FOOD STYLIST (how legit). Maria Smal, Pixel Bakery’s
          social media manager, was pegged as the perfect candidate to be cast as the homeowner for
          the video.
        </p>
      </div>

      <div className='mx-auto max-w-6xl grid grid-cols-12 gap-4'>
        <div className='col-span-12 sm:col-span-10 sm:col-start-2 lg:col-span-8 lg:col-start-3  drop-shadow-xl'>
          <div className='relative'>
            <Image
              src='/img/case-studies/sola-tiny-chef/pixel-bakery_SOLA_TinyChef_BTS_01.png'
              layout='responsive'
              width='2176px'
              height='1632px'
              blurDataURL='true'
              className='object-center rounded-md '
            />
          </div>
        </div>
        <div className='col-span-12 sm:col-span-8 mt-4 sm:mt-8 lg:mt-16 drop-shadow-lg'>
          <div className='relative drop-shadow-lg'>
            <Image
              src='/img/case-studies/sola-tiny-chef/pixel-bakery_SOLA_TinyChef_BTS_02.png'
              layout='responsive'
              width='2176px'
              height='1632px'
              className='object-center rounded-md drop-hadow-sm '
              blurDataURL='true'
            />
          </div>
        </div>
        <div className='col-span-12 sm:col-span-7 lg:col-span-6 sm:col-end-12 lg:col-end-13 mt-4 sm:mt-8 lg:mt-16 lg:pt-64'>
          <div className='relative'>
            <Image
              src='/img/case-studies/sola-tiny-chef/pixel-bakery_SOLA_TinyChef_BTS_03.png'
              layout='responsive'
              width='2176px'
              height='1632px'
              blurDataURL={'true'}
              className='object-center rounded-md shadow-lg'
            />
          </div>
        </div>
        <div className='col-span-12 sm:col-span-7 lg:col-span-6 sm:col-start-3 mt-4 md:mt-10 lg:mt-16 '>
          <div className='relative'>
            <Image
              src='/img/case-studies/sola-tiny-chef/pixel-bakery_SOLA_TinyChef_BTS_04.png'
              layout='responsive'
              width='2176px'
              height='1632px'
              className='object-center rounded-md shadow-md'
            />
          </div>
        </div>
      </div>
    </section>
  )
}
export default SolaTinyChef_Production
