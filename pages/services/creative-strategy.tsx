// import Services_Subservices from '@services/Services_Subservices'
import Services_AllServices from '@services/Services_AllServices'
import Services_OurProcess from '@services/Services_OurProcess'
import Lead from '@typography/Lead'
import Main from '@parts/Main'
import { NextSeo } from 'next-seo'
import H1 from '@typography/H1'
import CaseStudies_CTA from '@caseStudies/CaseStudies_CTA'
import BackLink from '@parts/BackLink'
import Services_Header from '@services/Services_Header'
import Lottie_Animation from '@data/lottie_services/lottie_services_creativeStrategy.json'

export default function Services_CreativeStrategy() {
  return (
    <Main>
      <NextSeo
        title='Creative Strategy | Services'
        description={`From the initial discovery meeting to the final deliverable, our leadership team at Pixel
          Bakery is all about strategizing the best way to deliver your message. Before any
          pre-production on a project begins, PB develops a communication strategy and creative
          brief based on a client's goals, pain points, and ideas.`}
        openGraph={{
          url: `https://pixelbakery.com/services/creative-strategy`,
          title: 'Creative Strategy | Services',
          description: `From the initial discovery meeting to the final deliverable, our leadership team at Pixel
          Bakery is all about strategizing the best way to deliver your message. Before any
          pre-production on a project begins, PB develops a communication strategy and creative
          brief based on a client's goals, pain points, and ideas.`,
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
      <Services_Header
        serviceName={'Creative Strategy'}
        isLottie={true}
        subheader={`We're more than just designers – we're thinkers, strategizers, and
                consultants.`}
        bgColor={'blue-dark'}
        LottieComponent={Lottie_Animation}
      >
        <p>
          From the initial discovery meeting to the final deliverable, our leadership team at Pixel
          Bakery is all about strategizing the best way to deliver your message. Before any
          pre-production on a project begins, PB develops a communication strategy and creative
          brief based on a client&apos;s goals, pain points, and ideas.
        </p>
        <p>
          Between a client&apos;s invaluable knowledge of their brand and our dedication to
          providing a homogeneous brand experience from start to finish, PB knows that a unifying
          theme that ties a project together is the key to a successful campaign.
        </p>
      </Services_Header>
      <CaseStudies_CTA />
      <Services_AllServices />
      <Services_OurProcess />
    </Main>
  )
}
