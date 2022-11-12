import Main from '@parts/Main'
import dynamic from 'next/dynamic'
import PageHeader_LoadingContent from '@pageHeaders/PageHeader_LoadingContent'

import {
  Onboarding_Calendly,
  Onboarding_Contact,
  Onboarding_Expectations,
  Onboarding_SEO,
} from '@onboarding/index'

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
