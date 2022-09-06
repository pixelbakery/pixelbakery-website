import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import H2 from '@typography/H2'
import { Navigation, Pagination, Scrollbar, A11y, Keyboard } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/keyboard'
import 'swiper/css/navigation'
import Image from 'next/image'
import Image_VarH from '@parts/Image_VarH'
const slides = [
  '/img/case-studies/snacklins/SNACK_Carousel_01.jpg',
  '/img/case-studies/snacklins/SNACK_Carousel_02.jpg',
  '/img/case-studies/snacklins/SNACK_Carousel_03.jpg',
  '/img/case-studies/snacklins/SNACK_Carousel_04.jpg',
  '/img/case-studies/snacklins/SNACK_Carousel_05.jpg',
  '/img/case-studies/snacklins/SNACK_Carousel_06.jpg',
]

function CaseStudies_Gallery() {
  const SetSlide = ({ slide }) => {
    return (
      <div className='h-full aspect-w-1 aspect-h-1 flex flex-col justify-center relative'>
        <Image
          layout='fill'
          objectFit='cover'
          alt={'Snacklins food and packaging photography that Pixel Bakery produced'}
          src={`${process.env.NEXT_PUBLIC_IMG_PREFIX}${slide}`}
          placeholder={'blur'}
          blurDataURL={`${process.env.NEXT_PUBLIC_IMG_PREFIX}${slide}`}
          className='block w-full  self-center object-contain '
        />
      </div>
    )
  }

  const Carousel = () => {
    return (
      <>
        <Swiper
          spaceBetween={15}
          slidesPerView={1.15}
          // centeredSlides={true}
          keyboard={{
            enabled: true,
          }}
          modules={[A11y, Keyboard, Pagination, Navigation]}
          className='lg:hidden'
          loop
        >
          {slides.map((slide: string) => {
            return (
              <SwiperSlide key={slide}>
                <div className='hover:cursor-grab bg-blue'>
                  <SetSlide slide={slide} />
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </>
    )
  }
  return (
    <>
      <PageSection>
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
          <div className='2xl:hidden'>
            <Carousel />
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
