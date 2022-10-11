import Main from '@parts/Main'
import dynamic from 'next/dynamic'
const PageHeader_VarH = dynamic(() => import('@pageHeaders/PageHeader_VarH'))
import LogoAnimation_Intro from '@logoAnimation/LogoAnimation_Intro'
import LogoAnimation_Descriptions from '@logoAnimation/LogoAnimation_Descriptions'
import LogoAnimation_PastClients from '@logoAnimation/LogoAnimation_PastClients'
import LogoAnimation_Tiers from '@logoAnimation/LogoAnimation_Tiers'
import LogoAnimation_GetStarted from '@logoAnimation/LogoAnimation_GetStarted'
import LogoAnimation_SEO from '@logoAnimation/LogoAnimation_SEO'

function LogoAnimation() {
  return (
    <Main>
      <LogoAnimation_SEO />
      <PageHeader_VarH
        header={'Motion Mixer'}
        subheader={'Bring your logo to life with an eye-catching and memorable animation'}
      />
      <LogoAnimation_Intro />
      <LogoAnimation_Tiers />
      <LogoAnimation_GetStarted />
      <LogoAnimation_Descriptions />
      <LogoAnimation_PastClients />
    </Main>
  )
}
export default LogoAnimation
