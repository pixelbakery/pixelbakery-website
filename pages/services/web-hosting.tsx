import Services_Header from '@services/Services_Header'
import Services_Subservices from '@services/Services_Subservices'
import Services_Related from '@services/Services_Related'
import Services_AllServices from '@services/Services_AllServices'
import Services_OurProcess from '@services/Services_OurProcess'
import Lead from '@typography/Lead'
import Store_Maintenance from '@store/Store_Maintenance'
import Main from '@parts/Main'
import { NextSeo } from 'next-seo'

export default function Services() {
  return (
    <Main>
      <NextSeo
        title='Pixel Bakery – Services – Web Hosting'
        description={`We offer this service to any Nebraskan. You're welcome to choose how much you can afford.
          We'll help you install Wordpress (if that's your jam) and provide you with security
          updates as well as weekly backups.`}
        openGraph={{
          url: `https://pixelbakery.com/services/web-hosting`,
          title: 'Pixel Bakery – Services – Web Hosting',
          description: `We offer this service to any Nebraskan. You're welcome to choose how much you can afford.
          We'll help you install Wordpress (if that's your jam) and provide you with security
          updates as well as weekly backups.`,
        }}
      />
      <Services_Header serviceName='Web Hosting'>
        <Lead>Because you deserve it.</Lead>
        <p>
          We offer this service to any Nebraskan. You're welcome to choose how much you can afford.
          We'll help you install Wordpress (if that's your jam) and provide you with security
          updates as well as weekly backups. Email Jordan for more information:{' '}
          <a href='mailto:jordan@pixelbakery.com'>jordan@pixelbakery.com</a>
        </p>
      </Services_Header>
      <Services_AllServices />
      <Store_Maintenance />
    </Main>
  )
}
