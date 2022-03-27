import Services_Header from '@services/Services_Header'
import Services_Subservices from '@services/Services_Subservices'
import Services_Related from '@services/Services_Related'
import Services_AllServices from '@services/Services_AllServices'
import Services_OurProcess from '@services/Services_OurProcess'
import Store_Maintenance from '@store/Store_Maintenance'
import Lead from '@typography/Lead'
import Main from '@parts/Main'
import { NextSeo } from 'next-seo'

export default function Services() {
  return (
    <Main>
      <NextSeo
        title='Pixel Bakery – Services – UI/UX'
        description={`Engage with your audience on their favorite platforms.`}
        openGraph={{
          url: `https://pixelbakery.com/services/ui-ux`,
          title: 'Pixel Bakery – Services – UI/UX',
          description: `Engage with your audience on their favorite platforms.`,
        }}
      />
      <Services_Header serviceName='UI / UX Design'>
        <Lead>Coming Soon 😉 </Lead>
      </Services_Header>
      {/* <Services_Subservices />
      <Services_Related /> */}
      <Services_AllServices />
      <Services_OurProcess />
      <Store_Maintenance />
    </Main>
  )
}
