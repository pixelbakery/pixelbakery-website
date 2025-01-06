import faq from '@data/faq_general'
import About_Faq_Card from '@about/About_Faq_Card'
import { PageSection, InnerWrapper } from '@parts'
import { H2, Lead } from '@typography'

import { FAQPageJsonLd } from 'next-seo'

const About_Faq = () => {
  return (
    <>
      <FAQPageJsonLd mainEntity={faq} />
      <PageSection className='bg-pink-lighter' id='faq'>
        <InnerWrapper>
          <div className='mb-12'>
            <H2 color={'blue'} className='mb-4'>
              Some questions we get asked frequently
            </H2>
            <Lead color='peach'>what&apos;s a website without one of these?</Lead>
          </div>
          <div className='grid grid-cols-1 gap-y-4'>
            {faq.map((faq, index) => (
              <About_Faq_Card faq={faq} key={faq.questionName} index={index} />
            ))}
          </div>
        </InnerWrapper>
      </PageSection>
    </>
  )
}

export default About_Faq
