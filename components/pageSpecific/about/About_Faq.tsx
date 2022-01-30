import { useEffect } from 'react'
import faq from '@data/faq'

import About_Faq_Card from './About_Faq_Card'
import PageSection from '@parts/PageSection'
import { gsap } from 'gsap'
export default function Aboout_Faq() {
  return (
    <PageSection className='bg-pink-light' id='faq'>
      <div className='wrapper mx-auto max-w-md  md:max-w-5xl'>
        <h2 className='text-blue max-w-lg pb-16'> Some questions we get asked frequently</h2>
        {faq.map((faq, index) => (
          <About_Faq_Card faq={faq} key={faq.q} index={index} />
        ))}
      </div>
    </PageSection>
  )
}
