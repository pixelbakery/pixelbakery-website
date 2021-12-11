import React from 'react'
import faq from '../../data/faq'

import FAQbox from './about-faq-card'
import PageSection from '../PageSection'

export default function FAQ() {
  return (
    <PageSection className='bg-pink-light'>
      <div className='wrapper mx-auto max-w-md  md:max-w-5xl'>
        <h2 className='text-blue max-w-lg pb-16'> Some questions we get asked frequently</h2>
        {faq.map((faq) => (
          <FAQbox faq={faq} key={faq.q} />
        ))}
      </div>
    </PageSection>
  )
}
