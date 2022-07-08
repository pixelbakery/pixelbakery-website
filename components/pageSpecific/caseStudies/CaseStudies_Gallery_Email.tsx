import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import H2 from '@typography/H2'
import ReactPlayer from 'react-player'
import { Navigation, Pagination, Scrollbar, A11y, Keyboard } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/keyboard'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import Image_VarH from '@parts/Image_VarH'

const slides = [
  '/img/case-studies/snacklins/SNACK_Q1-2022_ChipGrab.jpg',
  '/img/case-studies/snacklins/SNACK_Q1-2022_ChipsDip.jpg',
  '/img/case-studies/snacklins/SNACK_Q1-2022_Tree.jpg',
  '/img/case-studies/snacklins/SNACK_Q3-photo_18.jpg',
  '/img/case-studies/snacklins/SNACK_Q4-photo_07.jpg',
  '/img/case-studies/snacklins/SNACK_Q4-photo_08.jpg',
]

function CaseStudies_Gallery_Email() {
  const SetSlide = ({ slide }) => {
    return (
      <div className=''>
        <Image src={slide} width='100%' height='100%' layout='responsive' objectFit='cover' />
      </div>
    )
  }

  const Carousel = () => {
    return (
      <Swiper
        spaceBetween={10}
        slidesPerView={1.15}
        keyboard={{
          enabled: true,
        }}
        modules={[A11y, Keyboard]}
        className='lg:hidden'
      >
        {slides.map((slide: string) => {
          return (
            <SwiperSlide key={slide} className='bg-blue hover:cursor-grab'>
              <SetSlide slide={slide} />
            </SwiperSlide>
          )
        })}
      </Swiper>
    )
  }
  return (
    <>
      {/* <Lightbox /> */}
      <PageSection color='pink-light' className='z-20 relative'>
        <InnerWrapper>
          <H2>Emails</H2>
          <p>
            When it comes to email marketing, SNACKLINS likes to keep it short and sweet—or salty!
            With a mix of punny copy, themed concepts, and delicious visuals, our vibrant emails
            keep the customer coming back for more.
          </p>
          <div className='grid grid-cols-3'>
            <div className='col-span-1'>
              <div className='relative w-full'></div>
            </div>
          </div>
          <div className='mt-8'>
            <div className='grid grid-cols-3 gap-3 lg:gap-6'>
              <div className='col-span-1'>
                <Image_VarH
                  src={'/img/case-studies/snacklins/SNACK_ChesapeakeEmail_v02.png'}
                  openInNewWindow={true}
                />
              </div>
              <div className='col-span-1'>
                <Image_VarH
                  src={'/img/case-studies/snacklins/SNACK_Email_BFCM_Launch_v03.png'}
                  openInNewWindow={true}
                />
              </div>
              <div className='col-span-1'>
                <Image_VarH
                  src={'/img/case-studies/snacklins/SNACK_NachoEmail_v04.png'}
                  openInNewWindow={true}
                />
              </div>
            </div>
          </div>
          {/* <Carousel /> */}
        </InnerWrapper>
      </PageSection>
    </>
  )
}
export default CaseStudies_Gallery_Email
