import Main from '@parts/Main'

import {
  Onboarding_Calendly,
  Onboarding_Contact,
  Onboarding_Expectations,
  Onboarding_SEO,
} from '@onboarding/index'

import PageHeader_VarH from '@pageHeaders/PageHeader_VarH'

function Onboarding() {
  return (
    <Main id='page-onboarding'>
      <PageHeader_VarH header='Become a Client' subheader='All it takes is one great idea' />
      <Onboarding_Contact />
      <Onboarding_Calendly />
      <Onboarding_Expectations />
      <Onboarding_SEO />
    </Main>
  )
}

export default Onboarding
