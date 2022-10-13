import Main from '@parts/Main'
import Onboarding_Calendly from '@onboarding/Onboarding_Calendly'
import Onboarding_Contact from '@onboarding/Onboarding_Contact'
import Onboarding_Expectations from '@onboarding/Onboarding_Expectations'
import dynamic from 'next/dynamic'

import Onboarding_SEO from '@onboarding/Onboarding_SEO'
import PageHeader_LoadingContent from '@pageHeaders/PageHeader_LoadingContent'
const PageHeader_VarH = dynamic(() => import('@pageHeaders/PageHeader_VarH'), {
  loading: () => (
    <PageHeader_LoadingContent
      header='start something wonderful'
      subheader='All it takes is one great idea'
    />
  ),
  ssr: false,
})
function Onboarding() {
  return (
    <Main id='page-onboarding'>
      <Onboarding_SEO />
      <PageHeader_VarH
        header='start something wonderful'
        subheader='All it takes is one great idea'
      />
      <Onboarding_Contact />
      <Onboarding_Calendly />
      <Onboarding_Expectations />
    </Main>
  )
}

export default Onboarding
