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
        title='3D Modeling | Services | Pixel Bakery'
        description={
          'Pixel Bakery is a multi-disciplinary production studio focused on animation, motion design, and commercial film production.'
        }
        openGraph={{
          url: `https://pixelbakery.com/services/3d-modeling`,
          title: '3D Modeling | Services | Pixel Bakery',
          description:
            'Pixel Bakery is a multi-disciplinary production studio focused on animation, motion design, and commercial film production.',
        }}
      />
      <Services_Header serviceName='3D Modeling'>
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
