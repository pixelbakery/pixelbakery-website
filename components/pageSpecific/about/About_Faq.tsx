import faq from '@data/faq'
import About_Faq_Card from '@about/About_Faq_Card'
import PageSection from '@parts/PageSection'
import H2 from '@typography/H2'
import InnerWrapper from '@parts/InnerWrapper'
import Lead from '@typography/Lead'
import { FAQPageJsonLd } from 'next-seo'

export default function Aboout_Faq() {
  return (
    <>
      <FAQPageJsonLd mainEntity={faq} />
      <PageSection className='bg-pink-light' id='faq'>
        <InnerWrapper>
          <div className='mb-12'>
            <H2 color={'blue'} className='mb-4'>
              Some questions we get asked frequently
            </H2>
            <Lead color='peach'>what's a website without one of these?</Lead>
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
