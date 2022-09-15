import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import H2 from '@typography/H2'
import Lead from '@typography/Lead'
import dynamic from 'next/dynamic'
const Video = dynamic(() => import('@parts/Video'), {
  ssr: false,
})

function Home_WhatWeMake() {
  return (
    <PageSection id={'services-cta'}>
      <InnerWrapper>
        <div className='grid grid-cols-1 xl:grid-cols-2 xl:gap-x-16 mb-12 lg:mb-24'>
          <div>
            <div className='text-pink text-2xl  2xl:text-4xl  leading-noone font-bold'>
              to put it simply,
            </div>

            <H2 color='blue' className='text-pb-blue-dark 2xl:text-8xl mt-0 pt-0 max-w-4xl'>
              We build beautifully immersive worlds{' '}
            </H2>
          </div>
          <div className='mx-auto lg:mx-0 w-full flex flex-col -mt-6 md:-mt-0 justify-center lg:py-8 lg:mb-4'>
            <Lead color='peach' className='mb-0 pb-0 pt-0 lg:mb-4'>
              Our team creates intentional, high-quality products that are results of purposeful
              visions and not taking any shortcuts.
            </Lead>
          </div>
        </div>
        <div className=' w-full'>
          <Video url='https://vimeo.com/523920082' />
        </div>
      </InnerWrapper>
    </PageSection>
  )
}
export default Home_WhatWeMake
