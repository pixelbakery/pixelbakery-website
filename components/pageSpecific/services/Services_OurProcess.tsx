import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import H2 from '@typography/H2'
import Lead from '@typography/Lead'

function Services_OurProcess() {
  return (
    <PageSection color='blue'>
      <InnerWrapper>
        <div className='grid grid-cols-1 md:grid-cols-2'>
          <H2 color='cream'>Our Process</H2>
          <div className='col-span-1'>
            <Lead color='blue-dark'>
              Everything we do is goal-oriented, founded in research, and executed on with a clear
              vision.
            </Lead>
            <p className='text-cream font-semibold text-xl max-w-lg'>
              Our clients are with us every step of the way. Our job is not to tell you what to do,
              but to listen, consult, and execute.
            </p>
          </div>
        </div>
      </InnerWrapper>
    </PageSection>
  )
}
export default Services_OurProcess
