// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Keyboard } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
// Import Swiper styles
import 'swiper/css'

import 'swiper/css/pagination'
import 'swiper/css/keyboard'
import { ChevronRightIcon } from '@images/UI_Icons'

const shimmer = (w, h) => `
    <svg width="${w}+30" height="${h}+30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><linearGradient id="g"><stop stop-color="rgba(56, 204, 255, 0.25)" offset="0%" /><stop stop-color="rgba(0, 81, 116, 0.25)" offset="50%" /><stop stop-color="rgba(56, 204, 255,0.25)" offset="100%" /></linearGradient></defs><rect width="${w}" height="${h}" fill="rgbq(56, 204, 255,0.25)" /><rect id="r" width="${w}" height="${h}" fill="url(#g)" /><animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  /></svg>`

const toBase64 = (str) =>
  typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(str)

function Carousel({ slides }) {
  console.log(slides)
  function SetSlide({ slide }) {
    return (
      <div className='relative w-full aspect-w-4 aspect-h-3'>
        <Image
          src={slide.src}
          alt={slide.alt}
          placeholder='blur'
          layout='fill'
          objectFit={slide.fill}
          blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
        />
      </div>
    )
  }
  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          nextEl: '.carousel-button-next',
          prevEl: '.carousel-button-prev',
        }}
        pagination={{
          el: '.carousel-pagination',
          type: 'fraction',
        }}
        loop={true}
        keyboard={{
          enabled: true,
        }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Navigation, Pagination, Scrollbar, A11y, Keyboard]}
        className=' w-full aspect-w-4 aspect-h-3'
      >
        {slides.map((slide) => {
          return (
            <SwiperSlide className='bg-blue-dark'>
              <SetSlide slide={slide} />
            </SwiperSlide>
          )
        })}
      </Swiper>
      <div className='flex flex-row justify-around'>
        <button className='carousel-button-prev'>
          <i>
            {' '}
            <ChevronRightIcon />
          </i>
        </button>
        <div className='inline-block carousel-pagination'></div>
        <button className='carousel-button-next'>next</button>
      </div>
    </div>
  )
}
export default Carousel
