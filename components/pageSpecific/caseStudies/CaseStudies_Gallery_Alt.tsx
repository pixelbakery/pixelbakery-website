import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import H2 from '@typography/H2'
import Image from 'next/image'
import Shimmer from '@lib/Shimmer'
import SNACK_Social_0 from '/public/img/case-studies/snacklins/SNACK_Social_0.jpg'
import SNACK_Social_2 from '/public/img/case-studies/snacklins/SNACK_Social_2.jpg'
import SNACK_Social_3 from '/public/img/case-studies/snacklins/SNACK_Social_3.jpg'
import SNACK_Social_4 from '/public/img/case-studies/snacklins/SNACK_Social_4.jpg'
import SNACK_Social_5 from '/public/img/case-studies/snacklins/SNACK_Social_5.jpg'
import SNACK_Social_6 from '/public/img/case-studies/snacklins/SNACK_Social_6.jpg'

import useEmblaCarousel from 'embla-carousel-react'
import { Fragment } from 'react'

const Carousel = ({ slides }) => {
  const [viewportRef, embla] = useEmblaCarousel({
    align: 'start',
    loop: true,
    skipSnaps: true,
  })
  return (
    <div className='w-full overflow-hidden' ref={viewportRef}>
      <div className='embla__container flex w-full'>
        {slides.map((index, i) => (
          <Fragment key={i}>{index}</Fragment>
        ))}
      </div>
    </div>
  )
}

const ImageSlide = ({ slide }) => {
  return (
    <div className='cursor-grab ml-1 mr-2 relative  grow-0 shrink-0  w-[86%]  sm:w-[45%] lg:w-[30%] aspect-1'>
      <Image
        src={slide}
        placeholder='blur'
        blurDataURL={`${Shimmer(1200, 1200)}`}
        alt='Snacklins Instagram posts that Pixel Bakery designed and managed'
      />
    </div>
  )
}
const VideoSlide = ({ poster, mp4, webm }) => {
  return (
    <div className='cursor-grab -mt-2 ml-1 mr-2 relative  grow-0 shrink-0  w-[86%] sm:w-[45%] lg:w-[30%]  aspect-1'>
      <video
        className='w-full h-full'
        playsInline={true}
        muted={true}
        loop
        autoPlay={true}
        controls={false}
        poster={`${process.env.NEXT_PUBLIC_IMG_PREFIX}${poster}`}
      >
        <source src={`${process.env.NEXT_PUBLIC_IMG_PREFIX}${webm}`} />
        <source src={`${process.env.NEXT_PUBLIC_IMG_PREFIX}${mp4}`} />
      </video>
    </div>
  )
}

const slides = [
  <ImageSlide slide={SNACK_Social_0} />,
  <VideoSlide
    poster={'/img/case-studies/snacklins/SNACK_Social_8.jpg'}
    mp4={'/img/case-studies/snacklins/SNACK_Social_8.mp4'}
    webm={'/img/case-studies/snacklins/SNACK_Social_8.webm'}
  />,
  <ImageSlide slide={SNACK_Social_2} />,
  <VideoSlide
    poster={'/img/case-studies/snacklins/SNACK_Social_10.jpg'}
    mp4={'/img/case-studies/snacklins/SNACK_Social_10.mp4'}
    webm={'/img/case-studies/snacklins/SNACK_Social_10.webm'}
  />,
  <ImageSlide slide={SNACK_Social_3} />,
  <VideoSlide
    poster={'/img/case-studies/snacklins/SNACK_Social_11.jpg'}
    mp4={'/img/case-studies/snacklins/SNACK_Social_11.mp4'}
    webm={'/img/case-studies/snacklins/SNACK_Social_11.webm'}
  />,
  <ImageSlide slide={SNACK_Social_4} />,
  <VideoSlide
    poster={'/img/case-studies/snacklins/SNACK_Social_9.jpg'}
    mp4={'/img/case-studies/snacklins/SNACK_Social_9.mp4'}
    webm={'/img/case-studies/snacklins/SNACK_Social_9.webm'}
  />,
  <ImageSlide slide={SNACK_Social_5} />,
  <ImageSlide slide={SNACK_Social_6} />,
  <VideoSlide
    poster={'/img/case-studies/snacklins/SNACK_Social_12.jpg'}
    mp4={'/img/case-studies/snacklins/SNACK_Social_12.mp4'}
    webm={'/img/case-studies/snacklins/SNACK_Social_12.webm'}
  />,
]
const CaseStudies_Gallery = () => {
  return (
    <>
      <PageSection
        color='blue-light'
        className=' border-b-24 border-t-24 border-blue'
        id={'gallery-alt'}
      >
        <InnerWrapper>
          <H2>Organic Social</H2>
          <p className='mb-12'>
            In the world of endless scroll and limitless social content, brand personality is
            EVERYTHING—that’s where we come in. Every month, our team works to blend seasonal,
            lifestyle, and wacky, just-for-fun content into a unique flavor only seen on the
            SNACKLINS feed. The signature punchy SNACKLINS voice is accompanied by memes, quizzes,
            custom photo shoots, and more. You name it, we’ve done it.
          </p>
          <Carousel slides={slides} />
        </InnerWrapper>
      </PageSection>
    </>
  )
}
export default CaseStudies_Gallery
