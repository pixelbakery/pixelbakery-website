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

const slides = [
  '/img/case-studies/snacklins/SNACK_Q1-2022_ChipGrab.jpg',
  '/img/case-studies/snacklins/SNACK_Q1-2022_ChipsDip.jpg',
  '/img/case-studies/snacklins/SNACK_Q1-2022_Tree.jpg',
  '/img/case-studies/snacklins/SNACK_Q3-photo_18.jpg',
  '/img/case-studies/snacklins/SNACK_Q4-photo_07.jpg',
  '/img/case-studies/snacklins/SNACK_Q4-photo_08.jpg',
]

function CaseStudies_Gallery() {
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
      <PageSection>
        <InnerWrapper>
          <H2>Product Photography</H2>
          <p>
            A SNACKLINS photoshoot is never complete without napkins covered in chip crumbs and a
            backdrop soaked with grease stains. 😅 We work in close collaboration with our client to
            come up with a shot list for each quarter’s photoshoot. Our creative director works
            on-set to make sure the SNACKLINS crisps and the SNACKLINS brand are harmoniously
            captured in each image. All photo edits, composites, and color work are dialed-in to
            perfection by our in-house team.
          </p>
          <Carousel />
        </InnerWrapper>
      </PageSection>
    </>
  )
}
export default CaseStudies_Gallery
