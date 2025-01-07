import { InnerWrapper, PageSection } from '@parts'
import { H2 } from '@typography'

const Industries_Important_SaaS = () => {
  return (
    <PageSection id='why-important'>
      <InnerWrapper>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-12'>
          <div className=''>
            <H2>Why is video production important for SaaS companies and Startups?</H2>
          </div>
          <div className=''>
            <p>
              By harnessing the power of animation and video production, SaaS companies can unlock a
              world of effective communication, enhanced brand recognition, improved user
              experience, and accelerated growth.
            </p>
            <p>
              <span className='font-bold'>Fun fact:</span> Did you know that using videos on landing
              pages can increase conversion rates by up to 80%?
            </p>
            <p>
              Whether integrated into marketing campaigns, product demonstrations, or user
              onboarding processes, animations possess the remarkable ability to differentiate your
              SaaS brand, captivate your target audience, and create a lasting impact that resonates
              positively. Embrace the dynamic potential of animation and video production to elevate
              your SaaS company to new heights of success.
            </p>
          </div>
        </div>
      </InnerWrapper>
    </PageSection>
  )
}

export default Industries_Important_SaaS
