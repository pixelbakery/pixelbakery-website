import { InnerWrapper, PageSection } from '@parts'
import { H2 } from '@typography'
import Image from 'next/image'
import { Shimmer } from '@lib'
import useEmblaCarousel from 'embla-carousel-react'
import { Fragment, type ReactElement } from 'react'

const SNACK_IMAGES = {
  social0: '/img/case-studies/snacklins/SNACK_Social_1.jpg',
  social2: '/img/case-studies/snacklins/SNACK_Social_2.jpg',
  social3: '/img/case-studies/snacklins/SNACK_Social_3.jpg',
  social4: '/img/case-studies/snacklins/SNACK_Social_4.jpg',
  social5: '/img/case-studies/snacklins/SNACK_Social_5.jpg',
  social6: '/img/case-studies/snacklins/SNACK_Social_6.jpg',
} as const

interface CarouselProps {
  slides: ReactElement[]
}

interface ImageSlideProps {
  slide: string
}

interface VideoSlideProps {
  poster: string
  mp4: string
  webm: string
}

const Carousel = ({ slides }: CarouselProps) => {
  const [viewportRef, embla] = useEmblaCarousel({
    align: 'start',
    loop: true,
    skipSnaps: true,
  })

  return (
    <div className='w-full overflow-hidden' ref={viewportRef}>
      <div className='flex w-full embla__container'>
        {slides.map((slide, i) => (
          <Fragment key={i}>{slide}</Fragment>
        ))}
      </div>
    </div>
  )
}

const ImageSlide = ({ slide }: ImageSlideProps) => {
  return (
    <div className='cursor-grab ml-1 mr-2 relative grow-0 shrink-0 w-[86%] sm:w-[45%] lg:w-[30%] aspect-1'>
      <Image
        src={slide}
        width={1200}
        height={1200}
        placeholder='blur'
        blurDataURL={Shimmer(1200, 1200)}
        alt='Snacklins Instagram posts that Pixel Bakery designed and managed'
      />
    </div>
  )
}

const VideoSlide = ({ poster, mp4, webm }: VideoSlideProps) => {
  const PREFIX = process.env.NEXT_PUBLIC_IMG_PREFIX || ''

  return (
    <div className='cursor-grab -mt-2 ml-1 mr-2 relative grow-0 shrink-0 w-[86%] sm:w-[45%] lg:w-[30%] aspect-1'>
      <video
        className='w-full h-full'
        playsInline
        muted
        loop
        autoPlay
        controls={false}
        poster={`${PREFIX}${poster}`}
      >
        <source src={`${PREFIX}${webm}`} type='video/webm' />
        <source src={`${PREFIX}${mp4}`} type='video/mp4' />
      </video>
    </div>
  )
}

const slides = [
  <ImageSlide slide={SNACK_IMAGES.social0} key={1} />,
  <VideoSlide
    poster='/img/case-studies/snacklins/SNACK_Social_8.jpg'
    mp4='/img/case-studies/snacklins/SNACK_Social_8.mp4'
    webm='/img/case-studies/snacklins/SNACK_Social_8.webm'
    key={2}
  />,
  <ImageSlide slide={SNACK_IMAGES.social2} key={3} />,
  <VideoSlide
    poster='/img/case-studies/snacklins/SNACK_Social_10.jpg'
    mp4='/img/case-studies/snacklins/SNACK_Social_10.mp4'
    webm='/img/case-studies/snacklins/SNACK_Social_10.webm'
    key={4}
  />,
  // ... rest of the slides
]

const CaseStudies_Gallery = () => {
  return (
    <PageSection
      color='blue-light'
      className='border-b-24 border-t-24 border-blue'
      id='gallery-alt'
    >
      <InnerWrapper>
        <H2>Organic Social</H2>
        <p className='mb-12'>
          In the world of endless scroll and limitless social content, brand personality is
          EVERYTHING—that's where we come in. Every month, our team works to blend seasonal,
          lifestyle, and wacky, just-for-fun content into a unique flavor only seen on the SNACKLINS
          feed. The signature punchy SNACKLINS voice is accompanied by memes, quizzes, custom photo
          shoots, and more. You name it, we've done it.
        </p>
        <Carousel slides={slides} />
      </InnerWrapper>
    </PageSection>
  )
}

export default CaseStudies_Gallery
