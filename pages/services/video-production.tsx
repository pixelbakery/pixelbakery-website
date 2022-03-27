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
        title='Pixel Bakery – Services – Commercial Video Production'
        description={`Commercial video production can include video advertisements, TV commercials, YouTube
          pre-roll ads, online advertisements, or digital campaigns. These are all great ways to
          give your brand more recognition and to boost your marketplace identity. With our
          experience in both video production and animation, there are no limits to what we can
          produce for your brand.`}
        openGraph={{
          url: `https://pixelbakery.com/services/video-production`,
          title: 'Pixel Bakery – Services – Commercial Video Production',
          description: `Commercial video production can include video advertisements, TV commercials, YouTube
          pre-roll ads, online advertisements, or digital campaigns. These are all great ways to
          give your brand more recognition and to boost your marketplace identity. With our
          experience in both video production and animation, there are no limits to what we can
          produce for your brand.`,
        }}
      />
      <Services_Header serviceName='Commercial Video Production'>
        <Lead>Making your story come to life.</Lead>
        <p>
          Commercial video production can include video advertisements, TV commercials, YouTube
          pre-roll ads, online advertisements, or digital campaigns. These are all great ways to
          give your brand more recognition and to boost your marketplace identity. With our
          experience in both video production and animation, there are no limits to what we can
          produce for your brand.
        </p>
      </Services_Header>
      <Services_Subservices />
      <Services_Related />
      <Services_AllServices />
      <Services_OurProcess />
      <Store_Maintenance />
    </Main>
  )
}
