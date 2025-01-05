import { InnerWrapper, PageSection } from '@parts'
import { H2, Lead } from '@typography'

function Services_Animation_Why() {
  return (
    <PageSection color='cream' id={'why-animation'}>
      <InnerWrapper>
        <div className='md:mx-12 lg:mx-0'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-lg lg:max-w-full mx-auto'>
            <div>
              <H2>Why Your Brand Needs Motion Design</H2>
            </div>
            <div>
              <Lead>
                You have 9 seconds to engage your potential customers before they scroll past you
              </Lead>
              <p>
                We all consume video content more now than ever, and it will only continue to grow.{' '}
              </p>
              <p>
                Animation and motion design gives your brand another dimension of life. Video
                changes the interaction with your audience from reading your brand, to your brand
                speaking directly to them.
              </p>
              <p>
                We use animation to create immersive, motion-centric campaigns across a bunch of
                different mediums from your website to your social channels. This not only builds
                brand integrety, but a cohesive brand identity that captivates and engages
                audiences.
              </p>
              <p>Meet your audience where they're at.</p>
            </div>
          </div>
        </div>
      </InnerWrapper>
    </PageSection>
  )
}

export default Services_Animation_Why
