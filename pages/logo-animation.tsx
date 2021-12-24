import React from 'react'

import PageHeader_VariableHeight from '../components/PageHeader/PageHeader_VarH'
import LogoAnimation_Descriptions from '../components/LogoAnimation/LogoAnimation_Descriptions'
import LogoAnimation_PastClients from '../components/LogoAnimation/LogoAnimation_PastClients'
import Vimeo from '@u-wave/react-vimeo'
import LogoAnimation_Tiers from '../components/LogoAnimation/LogoAnimation_Tiers'

function LogoAnimation() {
  return (
    <main>
      <PageHeader_VariableHeight
        header={'Motion Mixer'}
        subheader={'Bring your brand to life and animate your logo'}
      />
      <section className='bg-white my-4 py-12'>
        <div className='mx-auto max-w-4xl xl:max-w-6xl px-12'>
          <h2 className='text-4xl max-w-sm '>Logo Animation Packages</h2>
          <p className='text-wine text-lg font-medium text-opacity-75 max-w-lg pb-12'>
            Introducing The PB Motion Mixer. An affordable way to get your brand moving. We’ll take
            that beautifully vectorized logo you already have, and make it move in a way that shouts
            your brand’s persona.
          </p>
          <div className='hidden lg:block mb-12'>
            <Vimeo video={'376917772'} autoplay={false} showPortrait responsive={true} />
          </div>
        </div>
      </section>
      <section className='lg:hidden bg-white my-4'>
        <div className=''>
          <Vimeo video={'376917772'} autoplay={false} showPortrait responsive={true} />
        </div>
      </section>
      <LogoAnimation_Tiers />
      <LogoAnimation_Descriptions />
      <LogoAnimation_PastClients />
    </main>
  )
}
export default LogoAnimation
