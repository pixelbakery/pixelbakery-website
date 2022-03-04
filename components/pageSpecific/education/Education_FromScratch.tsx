import H2 from '@typography/H2'

import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import Lead from '@typography/Lead'

function Education_FromScratch() {
  return (
    <PageSection className='bg-white'>
      <InnerWrapper>
        <H2 id='from-scratch'>From Scratch</H2>
        <Lead className='max-w-md text-xl text-blue-dark leading-none my-6'>
          Complete A to Z tutorials on programs such as After Effects or Illustrator. Created for
          beginners.
        </Lead>
        <p className='font-extrabold text-wine-100 italic text-4xl '>coming soon...</p>
      </InnerWrapper>
    </PageSection>
  )
}

export default Education_FromScratch
