import { PageSection, InnerWrapper } from '@parts'
import { FAQPageJsonLd } from 'next-seo'
import faqData from '@data/faq_creativeStrategy'

import { H2, Lead } from '@typography'
import Services_FAQ_Card from '@services/Services_FAQ_Card'

const Services_FAQ_CreativeStrategy = () => {
  return (
    <>
      <PageSection id='two' color='pink-lighter'>
        <InnerWrapper>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-x-4 md:gap-x-8'>
            <div className='col-span-1'>
              <H2 noMargins={true}>FAQ</H2>
              <Lead noMargins={true}>
                Frequently asked questions we get about our creative strategy/direction services
              </Lead>
            </div>

            <div className='flex flex-col justify-center col-span-1 gap-y-4 md:col-span-2'>
              {faqData.map((faq, index) => (
                <Services_FAQ_Card key={index} faq={faq} index={index} />
              ))}
            </div>
          </div>
        </InnerWrapper>
      </PageSection>
      <FAQPageJsonLd mainEntity={faqData} />
    </>
  )
}

export default Services_FAQ_CreativeStrategy
