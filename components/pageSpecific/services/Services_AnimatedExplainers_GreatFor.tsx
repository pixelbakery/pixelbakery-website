import { InnerWrapper, PageSection } from '@parts'
import { H2 } from '@typography'

const Services_AnimatedExplainers_GreatFor = () => {
  return (
    <>
      <PageSection id='great-for' color='white'>
        <InnerWrapper>
          <H2>Who are Explainer Videos Great For?</H2>
          <p>
            The magic of explainer videos is that they’re a warm welcome to a wide range of
            demographics. By utilizing upbeat energy and animation, they create an emotional
            connection to the viewer, delivering an educational dopamine hit that requires no prior
            knowledge of your business or brand.
          </p>
        </InnerWrapper>
        <InnerWrapper>
          <div className='grid grid-cols-1 mt-12 md:grid-cols-2 gap-x-8'>
            <div></div>
            <div className=''>
              <H2 color='blue'>Why Choose Pixel Bakery?</H2>
              <p className=''>
                Through collaboration and consistency, we’ve built up a reputation for surpassing
                our client’s expectations. We work with clients for the duration of the project,
                making sure that their vision is executed to a T.
              </p>
            </div>
          </div>
        </InnerWrapper>
      </PageSection>
    </>
  )
}

export default Services_AnimatedExplainers_GreatFor
