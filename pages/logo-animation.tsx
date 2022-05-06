import PageHeader_VariableHeight from '@pageHeaders/PageHeader_VarH'
import LogoAnimation_Intro from '@logoAnimation/LogoAnimation_Intro'
import LogoAnimation_Descriptions from '@logoAnimation/LogoAnimation_Descriptions'
import LogoAnimation_PastClients from '@logoAnimation/LogoAnimation_PastClients'
import Vimeo from '@u-wave/react-vimeo'
import LogoAnimation_Tiers from '@logoAnimation/LogoAnimation_Tiers'
import LogoAnimation_GetStarted from '@logoAnimation/LogoAnimation_GetStarted'
import Main from '@parts/Main'
import { NextSeo } from 'next-seo'
function LogoAnimation() {
  return (
    <Main>
      <NextSeo
        title='Logo Animation | Services | Pixel Bakery'
        description={`bring your logo to life with an eye-catching and memorable animation`}
      />
      <PageHeader_VariableHeight
        header={'Motion Mixer'}
        subheader={'Bring your logo to life with an eye-catching and memorable animation'}
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
    </Main>
  )
}
export default LogoAnimation
