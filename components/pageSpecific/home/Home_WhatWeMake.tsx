import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import H2 from '@typography/H2'
import Vimeo from '@u-wave/react-vimeo'

function Home_WhatWeMake() {
  return (
    <PageSection>
      <InnerWrapper>
        <div className='text-pink text-2xl  2xl:text-4xl  leading-noone font-bold'>
          to put it simply,
        </div>

        <H2 color='blue' className='text-pb-blue-dark 2xl:text-8xl mt-0 pt-0 max-w-4xl'>
          We build beautifully immersive worlds{' '}
        </H2>
        <div className='mx-auto lg:mx-0 lg:w-3/5  flex flex-col  justify-center py-8 mb-4'>
          <p className='lead  text-wine max-w-xl'>
            Dynamically reconceptualize business schemas whereas ethical meta-services.
            Monotonectally develop premier synergy and resource maximizing value. Competently
            redefine extensive information.
          </p>
        </div>
        <div className=' w-full'>
          <Vimeo video={'523920082'} responsive={true} controls={true} />
        </div>
      </InnerWrapper>
    </PageSection>
  )
}
export default Home_WhatWeMake
