import Services_Header from '@services/Services_Header'
import Services_Subservices from '@services/Services_Subservices'
import Services_Related from '@services/Services_Related'
import Services_AllServices from '@services/Services_AllServices'
import Services_OurProcess from '@services/Services_OurProcess'
import Services_Modulation from '@services/Services_Modulation'
import Lead from '@typography/Lead'
import Store_Maintenance from '@store/Store_Maintenance'
import Main from '@parts/Main'
import { NextSeo } from 'next-seo'

export default function Services_Animation() {
  return (
    <Main>
      <NextSeo
        title='Animation | Services | Pixel Bakery'
        description={
          'We specialize in 2D and 3D animation, motion graphics, stop motion, and 3D modeling'
        }
        openGraph={{
          url: `https://pixelbakery.com/services/animation`,
          title: 'Animation | Services | Pixel Bakery',
          description:
            'We specialize in 2D and 3D animation, motion graphics, stop motion, and 3D modeling',
        }}
      />
      <Services_Header serviceName='Animation'>
        <Lead color='peach'>
          We specialize in 2D and 3D animation, motion graphics, stop motion, and 3D modeling
        </Lead>
        <p className='mt-6 leading-loose'>
          Every animation project is full-service and includes project management, creative
          concepting, sound design, storyboarding, and voiceover as needed. Whether you’re looking
          for a lower thirds animation template or a sizzle reel of your company’s coolest products,
          we’ve got you covered. Check out what else we have to offer below.
        </p>
      </Services_Header>
      <Services_Subservices />
      {/* <Services_Related /> */}
      <Services_Modulation />
      <Services_AllServices />
      <Services_OurProcess />
    </Main>
  )
}
