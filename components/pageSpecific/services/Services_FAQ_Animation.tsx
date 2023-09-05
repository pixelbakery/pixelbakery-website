import { PageSection, InnerWrapper } from '@parts/index'
import { FAQPageJsonLd } from 'next-seo'
import faq from '@data/faq_animation'
import About_Faq_Card from '@about/About_Faq_Card'
import H2AndLead from '@typography/H2AndLead'

const Services_FAQ_Animation = () => {
  return (
    <>
      <PageSection id='animation-FAQ' color='pink-lighter'>
        <InnerWrapper>
          <H2AndLead
            headerText={'FAQ'}
            leadText={
              'Frequently asked questions we get about our animation and motion graphics production services'
            }
          >
            FAQ
          </H2AndLead>
          <div className='grid grid-cols-1 gap-y-4'>
            {faq.map((faq, index) => (
              <About_Faq_Card faq={faq} key={faq.questionName} index={index} />
            ))}
          </div>
        </InnerWrapper>
      </PageSection>
      <FAQPageJsonLd mainEntity={faq} />
    </>
  )
}

export default Services_FAQ_Animation
