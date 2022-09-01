import Main from '@parts/Main'
import Onboarding_Calendly from '@onboarding/Onboarding_Calendly'
import Onboarding_Contact from '@onboarding/Onboarding_Contact'
import Onboarding_Expectations from '@onboarding/Onboarding_Expectations'
import dynamic from 'next/dynamic'
const PageHeader_VarH = dynamic(() => import('@pageHeaders/PageHeader_VarH'))
import Onboarding_SEO from '@onboarding/Onboarding_SEO'

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
