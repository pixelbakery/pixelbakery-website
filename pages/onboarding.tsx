import type { ReactElement } from 'react'
import Layout_Defaualt from 'components/layouts/Layout_Default'

import {
  Onboarding_Calendly,
  Onboarding_Contact,
  Onboarding_Expectations,
  Onboarding_SEO,
} from '@onboarding/index'

import PageHeader_VarH from '@pageHeaders/PageHeader_VarH'

function Page_Onboarding() {
  return (
    <>
      <PageHeader_VarH header='Become a Client' subheader='All it takes is one great idea' />
      <Onboarding_Contact />
      <Onboarding_Calendly />
      <Onboarding_Expectations />
      <Onboarding_SEO />
    </>
  )
}

//Set page layout
Page_Onboarding.getLayout = function getLayout(page: ReactElement) {
  return <Layout_Defaualt>{page}</Layout_Defaualt>
}
export default Page_Onboarding
