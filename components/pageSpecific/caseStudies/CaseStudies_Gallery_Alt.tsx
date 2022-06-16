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
  //   const [lightboxOpen, setLightboxOpen] = useState(false)
  //   const [lightboxItem, setLightboxItem] = useState(undefined)
  //   const lightbox = useRef(null)

  //   function handleLightboxItem(test: string) {
  //     setLightboxItem(test)
  //     console.log(test)
  //     handleLightbox
  //   }
  //   function handleLightbox() {
  //     setLightboxOpen(!lightboxOpen)
  //   }

  //   useEffect(() => {
  //     if (!lightboxOpen) {
  //       document.body.classList.remove('overflow-y-hidden')
  //       gsap.to(lightbox.current, {
  //         autoAlpha: 0,
  //         duration: 1,
  //       })
  //     } else {
  //       gsap.to(lightbox.current, {
  //         duration: 1,
  //         autoAlpha: 1,
  //       })
  //       document.body.classList.add('overflow-y-hidden')
  //     }
  //   }, [lightboxOpen])

  //   const Lightbox = () => {
  //     return (
  //       <div
  //         ref={lightbox}
  //         onClick={handleLightbox}
  //         className='opacity-0 bg-wine bg-opacity-60 fixed z-50 top-0 left-0 w-full h-full'
  //       ></div>
  //     )
  //   }
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
      <PageSection color='blue-light' className=' border-b-24 border-t-24 border-blue'>
        <InnerWrapper>
          <H2>Organic Social</H2>
          <p>
            In the world of endless scroll and limitless social content, brand personality is
            EVERYTHING—that’s where we come in. Every month, our team works to blend seasonal,
            lifestyle, and wacky, just-for-fun content into a unique flavor only seen on the
            SNACKLINS feed. The signature punchy SNACKLINS voice is accompanied by memes, quizzes,
            custom photo shoots, and more. You name it, we’ve done it.
          </p>
          <Carousel />
        </InnerWrapper>
      </PageSection>
    </>
  )
}
export default CaseStudies_Gallery
