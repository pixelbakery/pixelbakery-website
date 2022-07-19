import Services_Header from '@services/Services_Header'
import Services_AllServices from '@services/Services_AllServices'
import Lead from '@typography/Lead'
import Store_Maintenance from '@store/Store_Maintenance'
import Main from '@parts/Main'
import { NextSeo } from 'next-seo'
import CaseStudies_CTA from '@caseStudies/CaseStudies_CTA'

export default function Services() {
  return (
    <Main>
      <NextSeo
        title='Web Hosting | Services'
        description={`We offer this service to any Nebraskan. You're welcome to choose how much you can afford.
          We'll help you install Wordpress (if that's your jam) and provide you with security
          updates as well as weekly backups.`}
        openGraph={{
          url: `https://pixelbakery.com/services/web-hosting`,
          title: 'Web Hosting | Services',
          description: `We offer this service to any Nebraskan. You're welcome to choose how much you can afford.
          We'll help you install Wordpress (if that's your jam) and provide you with security
          updates as well as weekly backups.`,
          images: [
            {
              url: 'https://cdn.pixelbakery.com/img/pixelbakery-thumbnail.jpg',
              width: 1200,
              height: 900,
              alt: 'Pixel Bakery Design Studio is a multi-disciplinary production studio focused on animation, motion design, and commercial film production.',
            },
            {
              url: 'https://cdn.pixelbakery.com/img/pixel-bakery-office.jpg',
              width: 1080,
              height: 810,
              alt: 'Pixel Bakery Design Studio is a multi-disciplinary production studio focused on animation, motion design, and commercial film production.',
            },
            {
              url: 'https://cdn.pixelbakery.com/img/pixel-bakery-samee-dan-1200x900.png',
              width: 1080,
              height: 810,
              alt: 'Daniel Hinz and Samee Callahan, two Pixel Bakery employees in Lincoln, Nebraska',
            },
          ],
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
      <CaseStudies_CTA />
      <Services_AllServices />
    </Main>
  )
}
