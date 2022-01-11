import React from 'react'

import Link from 'next/link'
import Image from 'next/image'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-cards'
import 'swiper/css/scrollbar'

import { Swiper, SwiperSlide } from 'swiper/react'
// import Swiper core and required modules
import SwiperCore, { EffectCards } from 'swiper'
SwiperCore.use([EffectCards])

function Carousel() {
  return (
    <Swiper
      pagination={{ clickable: true }}
      slidesPerView={1}
      autoHeight={true}
      grabCursor={true}
      className='max-w-md lg:max-w-5xl  aspect-22/17 '
      navigation
      //  loop={true}
      effect={'cards'}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
    >
      <SwiperSlide>
        <div className='relative'>
          <Image
            src='/img/case-studies/sola-tiny-chef/Pixel-Bakery_Sola_TinyChef_Storyboards_01.jpg'
            layout='responsive'
            width={'2016px'}
            height={'1224px'}
            quality={100}
            blurDataURL='true'
            //   objectFit='contain'
            alt='SOLA animation storyboards'
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='relative'>
          <Image
            src='/img/case-studies/sola-tiny-chef/Pixel-Bakery_Sola_TinyChef_Storyboards_02.jpg'
            layout='responsive'
            width={'2016px'}
            height={'1224px'}
            quality={100}
            blurDataURL='true'
            //   objectFit='contain'
            alt='SOLA animation storyboards'
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='relative'>
          <Image
            src='/img/case-studies/sola-tiny-chef/Pixel-Bakery_Sola_TinyChef_Storyboards_03.jpg'
            layout='responsive'
            width={'2016px'}
            height={'1224px'}
            quality={100}
            blurDataURL='true'
            //   objectFit='contain'
            alt='SOLA animation storyboards'
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='relative'>
          <Image
            src='/img/case-studies/sola-tiny-chef/Pixel-Bakery_Sola_TinyChef_Storyboards_04.jpg'
            layout='responsive'
            width={'2016px'}
            height={'1224px'}
            quality={100}
            blurDataURL='true'
            //   objectFit='contain'
            alt='SOLA animation storyboards'
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='relative'>
          <Image
            src='/img/case-studies/sola-tiny-chef/Pixel-Bakery_Sola_TinyChef_Storyboards_05.jpg'
            layout='responsive'
            width={'2016px'}
            height={'1224px'}
            quality={100}
            blurDataURL='true'
            //   objectFit='contain'
            alt='SOLA animation storyboards'
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='relative'>
          <Image
            src='/img/case-studies/sola-tiny-chef/Pixel-Bakery_Sola_TinyChef_Storyboards_06.jpg'
            layout='responsive'
            width={'2016px'}
            height={'1224px'}
            quality={100}
            blurDataURL='true'
            //   objectFit='contain'
            alt='SOLA animation storyboards'
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='relative'>
          <Image
            src='/img/case-studies/sola-tiny-chef/Pixel-Bakery_Sola_TinyChef_Storyboards_07.jpg'
            layout='responsive'
            width={'2016px'}
            height={'1224px'}
            quality={100}
            blurDataURL='true'
            //   objectFit='contain'
            alt='SOLA animation storyboards'
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='relative'>
          <Image
            src='/img/case-studies/sola-tiny-chef/Pixel-Bakery_Sola_TinyChef_Storyboards_08.jpg'
            layout='responsive'
            width={'2016px'}
            height={'1224px'}
            quality={100}
            blurDataURL='true'
            //   objectFit='contain'
            alt='SOLA animation storyboards'
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='relative'>
          <Image
            src='/img/case-studies/sola-tiny-chef/Pixel-Bakery_Sola_TinyChef_Storyboards_09.jpg'
            layout='responsive'
            width={'2016px'}
            height={'1224px'}
            quality={100}
            blurDataURL='true'
            //   objectFit='contain'
            alt='SOLA animation storyboards'
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='relative'>
          <Image
            src='/img/case-studies/sola-tiny-chef/Pixel-Bakery_Sola_TinyChef_Storyboards_10.jpg'
            layout='responsive'
            width={'2016px'}
            height={'1224px'}
            quality={100}
            blurDataURL='true'
            //   objectFit='contain'
            alt='SOLA animation storyboards'
          />
        </div>
      </SwiperSlide>
    </Swiper>
  )
}
function SolaTinyChef_PreProduction() {
  return (
    <section className='my-4 py-12'>
      <div className='px-6 mx-auto max-w-sm md:max-w-6xl'>
        <div className='w-full  lg:flex justify-between'>
          <div className='w-full lg:w-2/5'>
            <h2 className='text-center lg:text-left mt-0 pt-0 mx-auto text-4xl max-w-sm '>
              concepting & pre-production
            </h2>
          </div>
          <div className='w-full lg:w-1/2'>
            <p className='mx-auto py-4  mb-4 text-wine text-md max-w-sm text-opacity-75'>
              Energistically deliver client-focused models with sustainable markets.
              Enthusiastically maximize prospective networks and parallel value. Holisticly extend
              error-free applications vis-a-vis corporate services. Interactively initiate impactful
              process improvements vis-a-vis value-added ROI. Enthusiastically synergize magnetic
              markets before enabled human capital.
            </p>
          </div>
        </div>
      </div>
      <div className=''>
        <Carousel />
      </div>
    </section>
  )
}
export default SolaTinyChef_PreProduction
