import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import { Navigation, Pagination, Scrollbar, A11y, Keyboard } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/keyboard'
import { ChevronRightIcon } from '@images/UI_Icons'

function SetSlide({ slide }) {
  return (
    <div className='relative w-full aspect-w-9 aspect-h-16'>
      <video>
        <source src={`${process.env.NEXT_PUBLIC_IMG_PREFIX}${slide.src}`} type={'video/mp4'} />
      </video>
    </div>
  )
}
function CaseStudies_VerticalVideoSlider({ slides }) {
  return (
    <PageSection color='wine'>
      <InnerWrapper>
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
      </InnerWrapper>
    </PageSection>
  )
}
export default CaseStudies_VerticalVideoSlider
