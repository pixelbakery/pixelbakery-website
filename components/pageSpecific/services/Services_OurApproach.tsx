import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import H2 from '@typography/H2'
import Lead from '@typography/Lead'
import Link from 'next/link'

function Services_OurApproach() {
  return (
    <PageSection color='blue'>
      <InnerWrapper>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-8'>
          <H2 color='cream'>Our Approach</H2>
          <div className='col-span-1'>
            <Lead color='blue-dark'>
              Everything we do is goal-oriented, founded in research, and executed on with a clear
              vision.
            </Lead>
            <p className='text-cream font-semibold text-xl max-w-lg'>
              Our method is to represent your brand in the most{' '}
              <Link href={'/recipes/why-authenticity-in-advertising-matters'} passHref>
                <a className='text-blue-dark'>authentic and relatable</a>
              </Link>{' '}
              way possible.
            </p>
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
export default Services_OurApproach
