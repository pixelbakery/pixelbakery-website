import PageSection from '@parts/PageSection'
import H2 from '@typography/H2'
import { Navigation, Pagination, Scrollbar, A11y, Keyboard } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/keyboard'
import Vimeo from '@u-wave/react-vimeo'
import { ChevronRightIcon } from '@images/UI_Icons'
import ReactPlayer from 'react-player'

const slides = [
  '/img/case-studies/snacklins/snacklins_tiktok_1.mp4',
  '/img/case-studies/snacklins/snacklins_tiktok_1.mp4',
  '/img/case-studies/snacklins/snacklins_tiktok_1.mp4',
]

function SetSlide({ slide }) {
  return (
    <div className='  z-50 '>
      <video
        controls
        className={'h-full w-auto  border-6 border-cream rounded-lg hover:cursor-grab'}
      >
        <source src={'/img/case-studies/snacklins/snacklins_tiktok_1.mp4'} type='video/mp4' />
      </video>
    </div>
  )
}

function CaseStudies_TikTok() {
  return (
    <PageSection color='wine border-t-32 border-b-32 border-pink'>
      <H2 color='pink'>TikTok</H2>
      <p className='text-cream'>
        At PB, we’re not afraid to jump into a new medium. When we were approached to take on
        SNACKLINS TikToks, we knew to call on one of our many Gen-Zers to get the job done. On a
        monthly basis, Maria and our creative director choose a TikTok trend that SNACKLINS can fit
        snugly into and execute on it with our Pixel Bakery flair.
      </p>
      <Swiper
        spaceBetween={20}
        slidesPerView={1.25}
        navigation={{
          nextEl: '.carousel-button-next',
          prevEl: '.carousel-button-prev',
        }}
        pagination={{
          clickable: true,
          el: '.carousel-pagination',
          type: 'fraction',
        }}
        // loop={true}
        keyboard={{
          enabled: true,
        }}
        modules={[Navigation, Pagination, Scrollbar, A11y, Keyboard]}
        className=' w-full aspect-w-9 aspect-h-16'
      >
        {slides.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <SetSlide slide={slide} />
            </SwiperSlide>
          )
        })}
      </Swiper>
      <div className='flex flex-row justify-around text-cream mt-4 text-lg'>
        <button className='carousel-button-prev'>prev</button>
        <div className='text-center carousel-pagination font-italic'></div>
        <button className='carousel-button-next'>next</button>
      </div>
    </PageSection>
  )
}
export default CaseStudies_TikTok
