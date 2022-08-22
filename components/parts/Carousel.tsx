// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Keyboard } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import cn from 'classnames'
// Import Swiper styles
import 'swiper/css'

import 'swiper/css/pagination'
import 'swiper/css/keyboard'
import { ChevronRightIcon } from '@images/UI_Icons'

type CarouselProps = {
  slides: Array<any>
  aspectH?: string
  aspectW?: string
  objectFit?: any
  slideColor?: string
  textColor?: string
}
const Carousel = ({
  slides,
  aspectH,
  aspectW,
  objectFit,
  slideColor,
  textColor,
}: CarouselProps) => {
  let slideBGColor
  if (slideColor === undefined || slideColor === '') slideBGColor = 'bg-blue-dark'
  else slideBGColor = `bg-${slideColor}`

  let navColor
  if (textColor === undefined || textColor === '') navColor = 'text-blue-dark'
  else navColor = `text-${textColor}`
  function SetSlide({ slide }) {
    return (
      <div
        className={cn('relative w-full', {
          [`aspect-w-4 aspect-h-3`]: aspectW === undefined && aspectH === undefined,
          [`aspect-w-${aspectW} aspect-h-${aspectH}`]: aspectW != undefined && aspectH != undefined,
        })}
      >
        <Image
          src={slide.src}
          alt={slide.alt}
          placeholder='blur'
          layout='fill'
          objectFit={objectFit}
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
          clickable: true,
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
            <SwiperSlide key={slide.src} className={cn('cursor-grab', [slideBGColor])}>
              <SetSlide slide={slide} />
            </SwiperSlide>
          )
        })}
      </Swiper>
      <div className='flex flex-row justify-around mt-2'>
        <button className={cn('carousel-button-prev flex', `${navColor}`)}>
          <i
            className={cn(
              'mx-0 px-0 self-center h-8 w-8 flex flex-col justify-center rotate-180',
              `${navColor}`,
            )}
          >
            <ChevronRightIcon />
          </i>
          <span className='self-center'> prev</span>
        </button>
        <div
          className={`text-center carousel-pagination self-center h-full mt-1 font-italic ${navColor}`}
        />
        {/* <div className={cn('carousel-button-pagination block relative', `${navColor}`)} /> */}
        <button className={cn('carousel-button-next flex', `${navColor}`)}>
          <span className='self-center'> next</span>
          <i
            className={cn(
              'mx-0 px-0 self-center h-8 w-8 flex flex-col justify-center',
              `${navColor}`,
            )}
          >
            <ChevronRightIcon />
          </i>
        </button>
      </div>
    </div>
  )
}
export default Carousel
