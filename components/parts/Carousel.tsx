// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Keyboard } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
// Import Swiper styles
import 'swiper/css'

import 'swiper/css/pagination'
import 'swiper/css/keyboard'
import { ChevronRightIcon } from '@images/UI_Icons'

function Carousel({ slides }) {
  function SetSlide({ slide }) {
    return (
      <div className='relative w-full aspect-w-4 aspect-h-3'>
        <Image
          src={slide.src}
          alt={slide.alt}
          placeholder='blur'
          layout='fill'
          objectFit={slide.fill}
          className='w-full h-full object-center object-cover'
          blurDataURL={slide.src}
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
        modules={[Navigation, Pagination, Scrollbar, A11y, Keyboard]}
        className=' w-full aspect-w-4 aspect-h-3'
      >
        {slides.map((slide) => {
          return (
            <SwiperSlide key={slide.src} className='bg-blue-dark'>
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
