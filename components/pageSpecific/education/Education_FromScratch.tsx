import { H2, Lead } from '@typography'
import { InnerWrapper, PageSection } from '@parts'

function Education_FromScratch() {
  return (
    <PageSection className='bg-white' id={'from-scratch-intro'}>
      <InnerWrapper>
        <H2 id='from-scratch'>From Scratch</H2>
        <Lead className='max-w-md my-6 text-xl leading-none text-blue-dark'>
          Complete A to Z tutorials on programs such as After Effects or Illustrator. Created for
          beginners.
        </Lead>
        <p className='text-4xl italic font-extrabold text-wine-100 '>coming soon...</p>
      </InnerWrapper>
    </PageSection>
  )
}

export default Education_FromScratch
