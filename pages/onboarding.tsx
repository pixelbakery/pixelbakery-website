import Main from '@parts/Main'
const PageHeader_VarH = dynamic(() => import('@pageHeaders/PageHeader_VarH'))

import Onboarding_Calendly from '@onboarding/Onboarding_Calendly'
import Onboarding_Contact from '@onboarding/Onboarding_Contact'
import Onboarding_Expectations from '@onboarding/Onboarding_Expectations'
import { NextSeo } from 'next-seo'
import dynamic from 'next/dynamic'

function Onboarding() {
  return (
    <Main id='page-onboarding'>
      <NextSeo
        title='Become a Client | Pixel Bakery'
        description={`We know that trust is something that is earned over time. Our initial projects with our clients usually start small. This is a relationship after all, and it's important to us that both parties are happy and healthy.`}
        openGraph={{
          url: `https://pixelbakery.com/onboarding`,
          images: [
            {
              url: `https://pixelbakery.com/img/pixelbakery-thumbnail.jpg`,
              alt: `Pixel Bakery Design Studio (PBDS) is a multi-disciplinary production studio focused on animation, motion design, and commercial film production`,
            },
          ],
          title: 'Become a Client',
          description: `We know that trust is something that is earned over time. Our initial projects with our clients usually start small. This is a relationship after all, and it's important to us that both parties are happy and healthy.`,
        }}
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
