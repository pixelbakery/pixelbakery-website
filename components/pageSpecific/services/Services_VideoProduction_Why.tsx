import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import H2 from '@typography/H2'
import Lead from '@typography/Lead'

function Services_VideoProduction_Why() {
  return (
    <PageSection id='why-video'>
      <InnerWrapper>
        <div className='grid grid-cols-1 md:grid-cols-2'>
          <div>
            <H2 color='blue'>Why Your Brand Needs Video Content</H2>
          </div>
          <div>
            <Lead>
              You have 9 seconds to engage your potential customers before they scroll past you
            </Lead>
            <p>
              We live in an attention-based economy, and if you don&apos;t fight for someone&apos;s
              eyeballs with different and interesting mediums you&apos;re losing out on potential
              customers!
            </p>
            <p>
              Video content gives your brand another dimension of life. Video changes the
              interaction with your audience from reading your brand, to your brand speaking
              directly to them. It&apos;s a powerful weapon that will resonate with your audience
              and make them feel something, and go out and change either themselves, others or the
              world they live in.
            </p>
            <p>
              We use video production to create authentic and relatable campaigns across a bunch of
              different mediums from your website to your social channels. This not only builds
              brand integrety, but a cohesive brand identity that captivates and engages audiences.
            </p>
            <p>Meet your audience where they're at.</p>
          </div>
        </div>
      </InnerWrapper>
    </PageSection>
  )
}

export default Services_VideoProduction_Why
