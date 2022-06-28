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
              className='h-full border-blue rounded-2xl border-2 hover:cursor-grab p-6'
            >
              <SetSlide slide={slide} />
            </SwiperSlide>
          )
        })}
      </Swiper>
    )
  }
  return (
    <PageSection>
      <InnerWrapper>
        <div className='mb-6'>
          <H2>what do you do after you build a brand?</H2>
          <Lead color='pink'>
            A muslim man obsessed with the idea of a meat-free pork rind and yuca, mushroom, and
            onion walk into the back of a Washington, D.C. barbeque joint...
          </Lead>
        </div>
        <Carousel />
        <div className='hidden lg:block mt-24'>
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
      </InnerWrapper>
    </PageSection>
  )
}
export default CaseStudies_ProjectIntro_Alt
