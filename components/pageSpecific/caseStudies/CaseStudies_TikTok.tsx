import PageSection from '@parts/PageSection'
import H2 from '@typography/H2'
import { Navigation, Pagination, Scrollbar, A11y, Keyboard } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/keyboard'
import InnerWrapper from '@parts/InnerWrapper'

import { useCallback, useEffect, useRef, useState } from 'react'

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
    title: 'Relationships',
  },
]

function CaseStudies_TikTok() {
  // const onSlideChange = useCallback(() => {
  //   // list stays the same as the intial value
  //   console.log(JSON.stringify(listRef.current))
  //   setListInCb(listRef.current)
  // }, [])
  // let [mySwiper, setMySwiper] = useState(null)
  const [swiperInstance, setSwiperInstance] = useState(null)
  // let [slideIndex, setSlideIndex] = useState(slides[0].title)
  function test(index) {
    console.log('changed ', index.realIndex)
    // setSlideIndex(index.realIndex)
  }
  let titleRef = useRef(null)
  let swiperRef = useRef(null)

  const handleHelpMe = (slide) => {
    console.log(slide.realIndex)

    // setSwiperInstance(slide.realIndex)
  }
  useEffect(() => {
    let text = titleRef.current
    let swiper = swiperRef.current
    // titleRef.current.textContent = titleRef.current.toString()
    function idk() {
      console.log('asdga')
    }
    if (handleHelpMe) {
      idk()
    }
  }, [handleHelpMe])

  // useEffect(() => {
  //   let mySwiper = Swiper('.swiper-container', {
  //     loop: true,
  //     slidesPerView: '2',
  //     centeredSlides: true,
  //     pagination: {
  //       el: '.swiper-pagination',
  //       clickable: true,
  //     },
  //   })
  //   setMySwiper(mySwiper)
  // }, [])

  // const [activeTitle, setActiveTitle] = useState('')

  // SLIDE COMPONENT
  function SetSlide({ slide }) {
    return (
      <video
        controls
        muted={false}
        className={
          'h-full w-auto  border-2 border-cream rounded-lg hover:cursor-grab drop-shadow-md'
        }
        preload={'auto'}
        playsInline
        poster={`${slide.videoPath}.jpg`}
      >
        <source src={`${slide.videoPath}.webm`} type='video/webm' />
        <source src={`${slide.videoPath}.mp4`} type='video/mp4' />
      </video>
    )
  }

  // useEffect(() => {
  //   if (swiperInstance) {
  //   }
  //   titleRef.current.textContent = thumbsSwiper.activeIndex
  //   // if (swiperInstance.onSlideChange) {
  //   //   swiperInstance.on('slideChange', console.log('hi'))
  //   // }
  // }, [thumbsSwiper])

  // CAROUSEL WRAPPER
  const Carousel = () => {
    // useEffect(
    //   function () {
    //     setTimeout(() => {
    //       if (swiperInstance) {
    //         swiperInstance.on('slideChange', (s) => test(s))
    //       }
    //       titleRef.current.textContent = swiperInstance.realIndex
    //     }, 2000) // Update the content of the element after 2seconds
    //   },
    //   [swiperInstance],
    // )

    return (
      <Swiper
        // onSwiper={setSwiperInstance}
        spaceBetween={20}
        slidesPerView={'auto'}
        navigation={{
          nextEl: '.carousel-button-next',
          prevEl: '.carousel-button-prev',
        }}
        // onSwiper={(s) => {
        //   console.log('initialize swiper', s)
        //   setSwiper(s)
        // }}
        pagination={{
          clickable: true,
          el: '.carousel-pagination',
          type: 'fraction',
        }}
        breakpoints={{
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
        onSlideChange={(s) => handleHelpMe(s)}
        // onActiveIndexChange={(s) => test(s)}
        loop
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {slides.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <SetSlide slide={slide} />
            </SwiperSlide>

            // <SwiperSlide key={index}>
            //   <>
            //     {({ isActive }) => (
            //       <div>Current slide is {handleActiveSlide(slide) ? 'active' : 'not active'}</div>
            //     )}
            //     <SetSlide slide={slide} />
            //   </>
            // </SwiperSlide>
          )
        })}
      </Swiper>
    )
  }

  return (
    <PageSection color='wine border-t-32 border-b-32 border-pink'>
      <InnerWrapper>
        <H2 color='pink'>TikTok </H2>

        <h2 ref={titleRef} />
        <p className='text-cream'>
          Not everything has to be a 20-person crew and a bunch of huge cameras. We believe in
          meeting our audiences where they're at. Our generation wants something that feels organic,
          authentic, and relatable. There's a tool for every job, and sometimes those tools are
          iPhone cameras and selfie sticks.{' '}
        </p>
        <p className='text-cream'>
          At PB, we’re not afraid to jump into a new medium. When we were approached to take on
          SNACKLINS TikToks, we knew to call on one of our many Gen-Zers to get the job done. On a
          monthly basis, Maria and our creative director choose a TikTok trend that SNACKLINS can
          fit snugly into and execute on it with our Pixel Bakery flair.
        </p>
        {/* <H2>{slideIndex.toString()}</H2> */}
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
