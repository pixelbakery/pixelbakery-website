import PageSection from '@parts/PageSection'
import Vimeo from '@u-wave/react-vimeo'

function Home_WhatWeMake() {
  return (
    <section className='my-4 py-8 px-8 lg:py-32'>
      <div className='max-w-md  md:max-w-2xl xl:max-w-6xl mx-auto'>
        <div className='text-pink text-2xl  2xl:text-4xl  leading-noone font-bold'>
          to put it simply,
        </div>

        <h2 className='text-pb-blue-dark 2xl:text-8xl mt-0 pt-0 max-w-4xl'>
          We build beautifuly immersive worlds{' '}
        </h2>
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
      </div>
    </section>
  )
}
export default Home_WhatWeMake
