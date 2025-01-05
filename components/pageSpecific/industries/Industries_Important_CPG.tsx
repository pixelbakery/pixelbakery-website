import { InnerWrapper, PageSection } from '@parts'
import H2 from '@typography/H2'

const Industries_Important_CPG = () => {
  return (
    <PageSection id='why-important'>
      <InnerWrapper>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-12'>
          <div className=''>
            <H2>Why is Video Production and Animation Important for CPG brands?</H2>
          </div>
          <div className=''>
            <p>
              If your competitors aren't doing it, they will do it- it's only a matter of time.
              Animation and video production will help your brand stand out from all of the noise
              and bring a more exciting and immersive experience to your brand identity.
            </p>
            <p>
              Animated content is an effective tool for CPG brands to leave a positive and lasting
              impact on viewers. Animation and video production bring products to life, creating
              visually captivating content that grabs attention and engages audiences.
            </p>
            <p>
              By leveraging animation and video production, CPG companies can effectively
              communicate their brand story, differentiate their products from competitors, and
              leave a lasting impression on their target audience.
            </p>
          </div>
        </div>
      </InnerWrapper>
    </PageSection>
  )
}

export default Industries_Important_CPG
