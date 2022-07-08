import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import H2 from '@typography/H2'
import Lead from '@typography/Lead'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/keyboard'
import { Navigation, Pagination, Scrollbar, A11y, Keyboard } from 'swiper'
import H3 from '@typography/H3'
import Image from 'next/image'

const slides = [
  {
    header: 'the client',
    body: ' History says that’s how SNACKLINS vegan plant crisps were created. And soon after, they got their big break by making a deal with Mark Cuban on Shark Tank.',
  },
  {
    header: 'How it Started',
    body: 'Pixel Bakery teamed up with SNACKLINS starting in June of 2020 for an ongoing content kit. This kit includes deliverables such as emails, organic social media posts, photoshoots, and TikToks.',
  },
  {
    header: `How it's Going`,
    body: `An ongoing retainer allows our team to continue building and growing on the brand as we go. We’ve been able to create a beautifully homogenous identity for the SNACKLINS brand.`,
  },
]
function CaseStudies_ProjectIntro_Alt() {
  const SetSlide = ({ slide }) => {
    return (
      <div className='h-full'>
        <H3 color='blue-dark mb-4 pb-5'>{slide.header}</H3>
        <p>{slide.body}</p>
      </div>
    )
  }
  const Carousel = () => {
    return (
      <Swiper
        spaceBetween={25}
        slidesPerView={1.15}
        keyboard={{
          enabled: true,
        }}
        modules={[A11y, Keyboard]}
        className='lg:hidden'
      >
        {slides.map((slide, index) => {
          return (
            <SwiperSlide
              key={index}
              className='h-full self-stretch border-blue rounded-2xl border-2 hover:cursor-grab p-6'
            >
              <SetSlide slide={slide} />
            </SwiperSlide>
          )
        })}
      </Swiper>
    )
  }
  return (
    <section className='my-5 lg:-my-5 py-0 lg:py-0  lg:overflow-visible z-10  flex relative'>
      <div className='hidden lg:block lg:w-1/4 relative mx-auto'>
        <div className='absolute  -bottom-5  -top-40 xl:top-0 -mb-20 -mt-20 origin-bottom right-0 left-0'>
          <div className='relative max-h-[125vh]  h-[130%] xl:h-[120%] bottom-0  -top-40 xl:-top-40 scale-[130%] 2xl:scale-100'>
            <Image
              src={'/img/case-studies/snacklins/SNACK_Q3-Photos_Shot-06.png'}
              layout='fill'
              objectFit='contain'
              width={1568}
              height={4337}
              className={'relative origin-bottom bottom-0 h-full object-contain'}
            />
          </div>
        </div>
      </div>
      {/* <div className=' left-0 bg-yellow   h-full w-auto '>
        <div className='relative w-full left-0  right-0 -mt-20 mb-0 bottom-20 top-0 origin-bottom 2xl:h-[120%] h-full overflow-visible'>
          <Image
            src={'/img/case-studies/snacklins/SNACK_Q3-Photos_Shot-06.png'}
            layout='intrinsic'
            objectFit='contain'
            width={1568}
            height={4337}
            className={'relative object-bottom  object-contain'}
          />
        </div>
      </div> */}
      <div className=' w-full lg:w-3/4  py-12 px-8 lg:pl-12 mx-auto '>
        <InnerWrapper className='max-w-xl md:max-w-3xl xl:max-w-6xl mx-auto'>
          <div className='pr-12 xl:pr-24 mx-auto'>
            <div className='mb-6 flex relative flex-row h-full'>
              <div>
                <H2 className=' max-w-2xl md:max-w-2xl mb-10 2xl:max-w-4xl '>
                  what do you do after you build a brand?
                </H2>
                <Lead color='pink' className='lg:mb-6 max-w-2xl'>
                  A muslim man obsessed with the idea of a meat-free pork rind and yuca, mushroom,
                  and onion walk into the back of a Washington, D.C. barbeque joint...
                </Lead>
              </div>
            </div>
            <Carousel />
            <div className='hidden lg:block '>
              <div className='grid 2xl:grid-cols-3 gap-x-24'>
                {slides.map((slide, index) => {
                  return (
                    <div key={index} className='col-span-1'>
                      <H3 color='blue-dark'>{slide.header}</H3>
                      <p>{slide.body}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </InnerWrapper>
      </div>
    </section>
  )
}
export default CaseStudies_ProjectIntro_Alt
