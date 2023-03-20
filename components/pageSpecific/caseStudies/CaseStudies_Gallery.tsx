import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import H2 from '@typography/H2'

import Image from 'next/image'
import Image_VarH from '@parts/Image_VarH'
import Shimmer from '@lib/Shimmer'
import useEmblaCarousel from 'embla-carousel-react'
import { Fragment } from 'react'

const Carousel = ({ slides }) => {
  // eslint-disable-next-line no-unused-vars
  const [viewportRef, embla] = useEmblaCarousel({
    align: 'start',
    loop: true,
    skipSnaps: true,
  })
  return (
    <div className='w-full overflow-hidden' ref={viewportRef}>
      <div className='embla__container flex w-full'>
        {slides.map((slide, i) => (
          <Fragment key={i}>
            <ImageSlide slide={slide} />
          </Fragment>
        ))}
      </div>
    </div>
  )
}
const ImageSlide = ({ slide }) => {
  return (
    <div className='overflow-hidden cursor-grab ml-1 mr-2 relative  grow-0 shrink-0  w-[86%]  sm:w-[45%] lg:w-[30%] aspect-1 h-full'>
      <Image
        src={`${process.env.NEXT_PUBLIC_IMG_PREFIX}${slide.src}`}
        width={slide.width}
        height={slide.height}
        className={'w-full h-full object-cover'}
        placeholder='blur'
        blurDataURL={`${Shimmer(slide.width, slide.height)}`}
        alt='Snacklins Instagram posts that Pixel Bakery designed and managed'
      />
    </div>
  )
}

const slides = [
  { src: '/img/case-studies/snacklins/SNACK_Carousel_01.jpg', width: 514, height: 540 },
  { src: '/img/case-studies/snacklins/SNACK_Carousel_02.jpg', width: 540, height: 540 },
  { src: '/img/case-studies/snacklins/SNACK_Carousel_03.jpg', width: 540, height: 540 },
  { src: '/img/case-studies/snacklins/SNACK_Carousel_04.jpg', width: 833, height: 540 },
  { src: '/img/case-studies/snacklins/SNACK_Carousel_05.jpg', width: 360, height: 540 },
  { src: '/img/case-studies/snacklins/SNACK_Carousel_06.jpg', width: 350, height: 540 },
]

function CaseStudies_Gallery() {
  return (
    <>
      <PageSection id={'product-photography'}>
        <InnerWrapper>
          <div className='relative'></div>

          <H2>Product Photography</H2>
          <p>
            A SNACKLINS photoshoot is never complete without napkins covered in chip crumbs and a
            backdrop soaked with grease stains. 😅 We work in close collaboration with our client to
            come up with a shot list for each quarter’s photoshoot. Our creative director works
            on-set to make sure the SNACKLINS crisps and the SNACKLINS brand are harmoniously
            captured in each image. All photo edits, composites, and color work are dialed-in to
            perfection by our in-house team.
          </p>
          <div className='lg:hidden'>
            <Carousel slides={slides} />
          </div>
          <div className='hidden lg:grid grid-cols-2 gap-x-6'>
            {/* Left Images */}
            <div className='col-span-1'>
              <div className='grid grid-cols-2 gap-6'>
                <div className='col-span-2 relative'>
                  <Image_VarH
                    openInNewWindow={true}
                    src={`${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/case-studies/snacklins/SNACK_01.jpg`}
                    alt={'Snacklins food photography and social media design'}
                  />
                </div>
                <div className='col-span-1 relative'>
                  <Image_VarH
                    openInNewWindow={true}
                    src={`${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/case-studies/snacklins/SNACK_02.jpg`}
                    alt={'Snacklins food photography and social media design'}
                  />
                </div>
                <div className='col-span-1  relative'>
                  <Image_VarH
                    openInNewWindow={true}
                    src={`${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/case-studies/snacklins/SNACK_03.jpg`}
                    alt={'Snacklins food photography and social media design'}
                  />
                </div>
              </div>
            </div>
            <div className='col-span-1 relative'>
              <div className='grid grid-cols-2 gap-6'>
                <div className='col-span-1'>
                  <Image_VarH
                    openInNewWindow={true}
                    src={`${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/case-studies/snacklins/SNACK_05.jpg`}
                    alt={'Snacklins food photography and social media design'}
                  />
                </div>
                <div className='col-span-1  relative'>
                  <Image_VarH
                    openInNewWindow={true}
                    src={`${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/case-studies/snacklins/SNACK_04.jpg`}
                    alt={'Snacklins food photography and social media design'}
                  />
                </div>
                <div className='col-span-2 relative'>
                  <Image_VarH
                    openInNewWindow={true}
                    src={`${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/case-studies/snacklins/SNACK_06.jpg`}
                    alt={'Snacklins food photography and social media design'}
                  />
                </div>
              </div>
            </div>
          </div>
        </InnerWrapper>
      </PageSection>
    </>
  )
}
export default CaseStudies_Gallery
