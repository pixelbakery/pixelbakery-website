import Main from '@parts/Main'
import PageHeader_VarH from '@pageHeaders/PageHeader_VarH'
import Onboarding_Calendly from '@onboarding/Onboarding_Calendly'
import Onboarding_Contact from '@onboarding/Onboarding_Contact'
import Onboarding_Expectations from '@onboarding/Onboarding_Expectations'
import { NextSeo } from 'next-seo'

function Onboarding() {
  return (
    <Main id='page-onboarding'>
      <NextSeo
        title='Pixel Bakery – Become a Client'
        description={`Learn what it's like to be a Pixel Bakery client and get started with a project`}
      />
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
