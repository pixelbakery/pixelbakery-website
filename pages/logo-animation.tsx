import type { ReactElement } from 'react'
import Layout_Defaualt from 'components/layouts/Layout_Default'

import PageHeader_VarH from '@pageHeaders/PageHeader_VarH'

import LogoAnimation_Intro from '@logoAnimation/LogoAnimation_Intro'
import LogoAnimation_Descriptions from '@logoAnimation/LogoAnimation_Descriptions'
import LogoAnimation_PastClients from '@logoAnimation/LogoAnimation_PastClients'
import LogoAnimation_Tiers from '@logoAnimation/LogoAnimation_Tiers'
import LogoAnimation_GetStarted from '@logoAnimation/LogoAnimation_GetStarted'
import LogoAnimation_SEO from '@logoAnimation/LogoAnimation_SEO'

function Page_LogoAnimation() {
  return (
    <>
      <LogoAnimation_SEO />
      <PageHeader_VarH
        header={'Logo Animation'}
        subheader={'Bring your logo to life with an eye-catching and memorable animation'}
      />
      <LogoAnimation_Intro />
      <LogoAnimation_Tiers />
      <LogoAnimation_GetStarted />
      <LogoAnimation_Descriptions />
      <LogoAnimation_PastClients />
    </>
  )
}
//Set page layout
Page_LogoAnimation.getLayout = function getLayout(page: ReactElement) {
  return <Layout_Defaualt>{page}</Layout_Defaualt>
}
export default Page_LogoAnimation
