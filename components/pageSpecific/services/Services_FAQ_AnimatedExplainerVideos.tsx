import { PageSection, InnerWrapper } from '@parts/index'
import { FAQPageJsonLd } from 'next-seo'
import faq from '@data/faq_animatedExplainerVideos'
import About_Faq_Card from '@about/About_Faq_Card'
import H2AndLead from '@typography/H2AndLead'

const Services_FAQ_AnimatedExplainerVideos = () => {
  return (
    <>
      <PageSection id='animatedExplainerVideos-FAQ' color='pink-lighter'>
        <InnerWrapper>
          <H2AndLead
            headerText={'FAQ'}
            leadText={
              'Frequently asked questions we get about our animated explainer video production services'
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

export default Services_FAQ_AnimatedExplainerVideos
