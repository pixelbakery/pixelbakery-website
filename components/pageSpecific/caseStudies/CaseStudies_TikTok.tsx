import PageSection from '@parts/PageSection'
import H2 from '@typography/H2'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/keyboard'
import InnerWrapper from '@parts/InnerWrapper'
import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false })

const ImgPrefix = process.env.NEXT_PUBLIC_IMG_PREFIX

// Do not put video file extension in the path. Must have TWO versions: an mp4 .h264 and a webm .v8
const slides = [
  {
    videoPath: '/img/case-studies/snacklins/tiktoks/SNACKLINS_TikTok_ComeOnBrain',
    title: 'Come On, Brain',
  },
  {
    videoPath: '/img/case-studies/snacklins/tiktoks/SNACKLINS_TikTok_DontBeRediculous',
    title: `Don't Be Rediculous`,
  },
  {
    videoPath: '/img/case-studies/snacklins/tiktoks/SNACKLINS_TikTok_EatYourVegetables',
    title: 'Eat Your Vegetables',
  },
  {
    videoPath: '/img/case-studies/snacklins/tiktoks/SNACKLINS_TikTok_HappySad',
    title: 'Happy Sad',
  },
  {
    videoPath: '/img/case-studies/snacklins/tiktoks/SNACKLINS_TikTok_HelloYou',
    title: 'Hello, You',
  },
  {
    videoPath: '/img/case-studies/snacklins/tiktoks/SNACKLINS_TikTok_HotGirlShit',
    title: 'Hot Girl Shit',
  },
  {
    videoPath: '/img/case-studies/snacklins/tiktoks/SNACKLINS_TikTok_HowBizarre',
    title: 'How Bizarre',
  },
  { videoPath: '/img/case-studies/snacklins/tiktoks/SNACKLINS_TikTok_ItWasMe', title: 'It Was Me' },
  {
    videoPath: '/img/case-studies/snacklins/tiktoks/SNACKLINS_TikTok_NobleQuest',
    title: 'Noble Quest',
  },
  {
    videoPath: '/img/case-studies/snacklins/tiktoks/SNACKLINS_TikTok_NotIntoShortGuys',
    title: 'Not Into Short Guys',
  },
  { videoPath: '/img/case-studies/snacklins/tiktoks/SNACKLINS_TikTok_Obsessed', title: 'Obsessed' },
  {
    videoPath: '/img/case-studies/snacklins/tiktoks/SNACKLINS_TikTok_PeopleCanDoHardThings',
    title: 'People Can Do Hard Things',
  },
  {
    videoPath: '/img/case-studies/snacklins/tiktoks/SNACKLINS_TikTok_Relationships',
    title: 'People Can Do Hard Things',
  },
]
// SLIDE COMPONENT
const SetSlide = ({ slide }) => {
  return (
    <div className=' aspect-h-16 aspect-w-9 w-full  overflow-hidden'>
      <ReactPlayer
        url={[`${ImgPrefix}${slide.videoPath}.webm`, `${ImgPrefix}${slide.videoPath}.mp4`]}
        poster={`${ImgPrefix}${slide.videoPath}.jpg`}
        playsinline={true}
        className={' rounded-lg  cursor-pointer'}
        controls
        width={'100%'}
        height={'100%'}
        attributes={[{ poster: `${ImgPrefix}${slide.videoPath}.jpg` }]}
      />
      <span className='w-full flex flex-col justify-center text-center text-cream text-md -z-10'>
        Loading...
      </span>
    </div>
  )
}

// CAROUSEL WRAPPER
const Carousel = () => {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={'auto'}
      navigation={{
        nextEl: '.carousel-button-next',
        prevEl: '.carousel-button-prev',
      }}
      allowTouchMove={false}
      pagination={{
        clickable: true,
        el: '.carousel-pagination',
        type: 'fraction',
      }}
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
      modules={[Navigation, Pagination]}
      className=' w-full aspect-w-9 aspect-h-16'
      watchSlidesProgress={true}
      // onActiveIndexChange={(s) => test(s)}
      loop
      // onSwiper={(swiper) => console.log(swiper)}
    >
      {slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <SetSlide slide={slide} />
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}
const CaseStudies_TikTok = () => {
  return (
    <PageSection color='wine border-t-32 border-b-32 border-pink'>
      <InnerWrapper>
        <H2 color='pink'>TikTok </H2>
        <p className='text-cream'>
          Not everything has to be a 20-person crew and a bunch of huge cameras. We believe in
          meeting our audiences where they&apos;re at. Our generation wants something that feels
          organic, authentic, and relatable. There&apos;s a tool for every job, and sometimes those
          tools are iPhone cameras and selfie sticks.{' '}
        </p>
        <p className='text-cream'>
          At PB, we’re not afraid to jump into a new medium. When we were approached to take on
          SNACKLINS TikToks, we knew to call on one of our many Gen-Zers to get the job done. On a
          monthly basis, Maria and our creative director choose a TikTok trend that SNACKLINS can
          fit snugly into and execute on it with our Pixel Bakery flair.
        </p>
        <Carousel />
        <div className='flex flex-row justify-around text-cream mt-4 text-lg mx-auto max-w-3xl'>
          <button className='carousel-button-prev'>prev</button>
          <div className='text-center carousel-pagination font-italic'></div>
          <button className='carousel-button-next'>next</button>
        </div>
      </InnerWrapper>
    </PageSection>
  )
}
export default CaseStudies_TikTok
