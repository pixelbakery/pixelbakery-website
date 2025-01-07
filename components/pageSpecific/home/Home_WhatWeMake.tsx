import { InnerWrapper, PageSection } from '@parts'
import { H2 } from '@typography'

const Home_WhatWeMake = () => {
  return (
    <PageSection id={'services-cta'} className={'relative'}>
      <InnerWrapper className='relative z-20'>
        <div className='relative grid grid-cols-1 xl:grid-cols-2 xl:gap-x-16 '>
          <div>
            <div className='text-2xl font-bold text-pink 2xl:text-4xl leading-noone'>
              to put it simply,
            </div>

            <H2 color='blue' className='max-w-4xl pt-0 mt-0 text-pb-blue-dark 2xl:text-8xl'>
              We build beautifully immersive worlds{' '}
            </H2>
          </div>
          <div className='flex flex-col justify-start w-full mx-auto -mt-6 lg:mx-0 md:-mt-0 lg:mb-4'>
            <p className='text-xl text-blue-dark'>
              We create immersive, motion-centric content across various mediums and campaigns, from
              your website to your social channels.
            </p>
            <p className='text-xl text-blue-dark'>
              Motion content enhances your brand's story with another dimension of life. It shifts
              the interaction with your audience from them simply reading your brand, to your brand
              speaking directly to them.
            </p>
          </div>
        </div>
      </InnerWrapper>
    </PageSection>
  )
}
export default Home_WhatWeMake
