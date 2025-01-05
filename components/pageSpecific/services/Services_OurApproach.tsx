import { InnerWrapper, PageSection } from '@parts'
import { H2, Lead } from '@typography'
import Link from 'next/link'

function Services_OurApproach() {
  return (
    <PageSection color='blue' id={'our-approach'}>
      <InnerWrapper>
        <div
          className='grid grid-cols-1 md:grid-cols-2 gap-x-8'
          itemType='https://schema.org/AboutPage'
        >
          <H2 color='cream'>Our Approach</H2>
          <div className='col-span-1'>
            <Lead color='blue-dark'>
              Everything we do is goal-oriented, founded in research, and executed on with a clear
              vision.
            </Lead>
            <p className='max-w-lg text-xl font-semibold text-cream'>
              Our method is to represent your brand in the most{' '}
              <Link
                hrefLang={'en-US'}
                href={'/recipes/why-authenticity-in-advertising-matters'}
                className='duration-200 text-blue-dark'
              >
                authentic and relatable
              </Link>{' '}
              way possible.
            </p>
            <p className='max-w-lg text-xl font-semibold text-cream'>
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
