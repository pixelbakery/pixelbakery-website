import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import H2 from '@typography/H2'
import { A11y, Keyboard } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/keyboard'
import Image from 'next/image'

const slides = [
  '/img/case-studies/snacklins/SNACK_Social_0.jpg',
  '/img/case-studies/snacklins/SNACK_Social_2.jpg',
  '/img/case-studies/snacklins/SNACK_Social_3.jpg',
  '/img/case-studies/snacklins/SNACK_Social_4.jpg',
  '/img/case-studies/snacklins/SNACK_Social_5.jpg',
  '/img/case-studies/snacklins/SNACK_Social_6.jpg',
]
const SetSlide = ({ slide }) => {
  return (
    <div className=''>
      <Image
        src={`${process.env.NEXT_PUBLIC_IMG_PREFIX}${slide}`}
        width='100%'
        height='100%'
        layout='responsive'
        placeholder='blur'
        objectFit='cover'
        blurDataURL={`${process.env.NEXT_PUBLIC_IMG_PREFIX}${slide}`}
        alt='Snacklins Instagram posts that Pixel Bakery designed and managed'
      />
    </div>
  )
}

const Carousel = () => {
  return (
    <Swiper
      spaceBetween={10}
      loop
      slidesPerView={'auto'}
      breakpoints={{
        0: {
          slidesPerView: 1.15,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 2.15,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3.15,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 3.25,
          spaceBetween: 25,
        },
      }}
      keyboard={{
        enabled: true,
      }}
      modules={[A11y, Keyboard]}
      // className='lg:hidden'
    >
      <SwiperSlide className='bg-blue hover:cursor-grab h-full '>
        <div className='w-full h-full aspect-w-1 aspect-h-1 '>
          <video
            className='w-full h-full'
            playsInline={true}
            muted={true}
            loop
            autoPlay={true}
            controls={false}
            poster={`${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/case-studies/snacklins/SNACK_Social_11.jpg`}
          >
            <source
              src={`${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/case-studies/snacklins/SNACK_Social_11.webm`}
            />
            <source
              src={`${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/case-studies/snacklins/SNACK_Social_11.mp4`}
            />
          </video>
        </div>
      </SwiperSlide>
      <SwiperSlide className='bg-blue hover:cursor-grab h-full '>
        <div className='w-full h-full aspect-w-1 aspect-h-1 '>
          <video
            className='w-full h-full'
            playsInline={true}
            muted={false}
            controls
            poster={`${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/case-studies/snacklins/SNACK_Social_12.jpg`}
          >
            <source
              src={`${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/case-studies/snacklins/SNACK_Social_12.webm`}
            />
            <source
              src={`${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/case-studies/snacklins/SNACK_Social_12.mp4`}
            />
          </video>
        </div>
      </SwiperSlide>
      <SwiperSlide className='bg-blue hover:cursor-grab h-full '>
        <div className='w-full h-full aspect-w-1 aspect-h-1 '>
          <video
            className='w-full h-full'
            playsInline={true}
            loop
            autoPlay={true}
            muted={true}
            controls={false}
            poster={`${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/case-studies/snacklins/SNACK_Social_10.jpg`}
          >
            <source
              src={`${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/case-studies/snacklins/SNACK_Social_10.webm`}
            />
            <source
              src={`${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/case-studies/snacklins/SNACK_Social_10.mp4`}
            />
          </video>
        </div>
      </SwiperSlide>

      {slides.map((slide: string) => {
        return (
          <SwiperSlide key={slide} className='bg-blue hover:cursor-grab'>
            <SetSlide slide={slide} />
          </SwiperSlide>
        )
      })}
      <SwiperSlide className='bg-blue hover:cursor-grab h-full '>
        <div className='w-full h-full aspect-w-1 aspect-h-1 '>
          <video
            className='w-full h-full'
            playsInline={true}
            muted={true}
            autoPlay={true}
            loop
            controls={false}
            poster={`${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/case-studies/snacklins/SNACK_Social_9.jpg`}
          >
            <source
              src={`${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/case-studies/snacklins/SNACK_Social_9.webm`}
            />
            <source
              src={`${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/case-studies/snacklins/SNACK_Social_9.mp4`}
            />
          </video>
        </div>
      </SwiperSlide>
      <SwiperSlide className='bg-blue hover:cursor-grab h-full '>
        <div className='w-full h-full aspect-w-1 aspect-h-1 '>
          <video
            className='w-full h-full'
            playsInline={true}
            loop
            muted={true}
            autoPlay={true}
            controls={false}
            poster={`${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/case-studies/snacklins/SNACK_Social_8.jpg`}
          >
            <source
              src={`${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/case-studies/snacklins/SNACK_Social_8.webm`}
            />
            <source
              src={`${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/case-studies/snacklins/SNACK_Social_8.mp4`}
            />
          </video>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}

function CaseStudies_Gallery() {
  return (
    <>
      <PageSection color='blue-light' className=' border-b-24 border-t-24 border-blue'>
        <InnerWrapper>
          <H2>Organic Social</H2>
          <p className='mb-12'>
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
