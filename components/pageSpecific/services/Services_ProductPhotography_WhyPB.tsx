import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import H2 from '@typography/H2'
import { Lead } from '@typography/index'

//TODO: Add section filled with examples of work
const Services_AnimatedExplainers_GreatFor = () => {
  return (
    <>
      <PageSection id='why-pb' color='cream'>
        <InnerWrapper>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-12'>
            <div className='col-span-1'>
              <H2>Why Choose Pixel Bakery?</H2>
            </div>
            <div className='col-span-1'>
              <Lead>We rise to the top.</Lead>
              <p>
                We don’t just shoot some of the most gorgeous content: we use design and aesthetics
                as narrative tools, making intentional choices that communicate your brand’s values
                and dedication to quality through our photography.
                {/* Here are some examples. (link to
                product photography work) */}
              </p>
            </div>
          </div>
        </InnerWrapper>
      </PageSection>
    </>
  )
}

export default Services_AnimatedExplainers_GreatFor
