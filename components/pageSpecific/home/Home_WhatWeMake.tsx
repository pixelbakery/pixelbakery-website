import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import H2 from '@typography/H2'

const Home_WhatWeMake = () => {
  return (
    <PageSection id={'services-cta'} className={'relative'}>
      <InnerWrapper className='relative z-20'>
        <div className='relative grid grid-cols-1 xl:grid-cols-2 xl:gap-x-16 '>
          <div>
            <div className='text-pink text-2xl  2xl:text-4xl  leading-noone font-bold'>
              to put it simply,
            </div>

            <H2 color='blue' className='text-pb-blue-dark 2xl:text-8xl mt-0 pt-0 max-w-4xl'>
              We build beautifully immersive worlds{' '}
            </H2>
          </div>
          <div className='mx-auto lg:mx-0 w-full flex flex-col -mt-6 md:-mt-0 justify-start lg:mb-4'>
            <p className='text-blue-dark text-xl'>
              We create immersive, motion-centric content across various mediums and campaigns, from
              your website to your social channels.
            </p>
            <p className='text-blue-dark text-xl'>
              Motion content enhances your brand's story with another dimension of life. It shifts
              the interaction with your audience from them simply reading your brand, to your brand
              speaking directly to the
            </p>
          </div>
        </div>
      </InnerWrapper>
    </PageSection>
  )
}
export default Home_WhatWeMake
