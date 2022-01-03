import React from 'react'

import PageHeader_VariableHeight from '../components/PageHeader/PageHeader_VarH'
import LogoAnimation_Intro from '../components/LogoAnimation/LogoAnimation_Intro'
import LogoAnimation_Descriptions from '../components/LogoAnimation/LogoAnimation_Descriptions'
import LogoAnimation_PastClients from '../components/LogoAnimation/LogoAnimation_PastClients'
import Vimeo from '@u-wave/react-vimeo'
import LogoAnimation_Tiers from '../components/LogoAnimation/LogoAnimation_Tiers'
import LogoAnimation_GetStarted from '../components/LogoAnimation/LogoAnimation_GetStarted'
function LogoAnimation() {
  return (
    <main>
      <PageHeader_VariableHeight
        header={'Motion Mixer'}
        subheader={'Bring your brand to life and animate your logo'}
      />
      <LogoAnimation_Intro />

      <section className='lg:hidden bg-white my-4'>
        <div className=''>
          <Vimeo video={'376917772'} autoplay={false} showPortrait responsive={true} />
        </div>
      </section>

      <LogoAnimation_Tiers />
      <LogoAnimation_GetStarted />
      <LogoAnimation_Descriptions />
      <LogoAnimation_PastClients />
    </main>
  )
}
export default LogoAnimation
