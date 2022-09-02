import Work_Services_Card from '../work/Work_Services_Card'
import PageSection from '@parts/PageSection'
import InnerWrapper from '@parts/InnerWrapper'
import H2 from '@typography/H2'
import Lead from '@typography/Lead'

function Home_Services() {
  return (
    <PageSection color='blue' id='home-services'>
      <InnerWrapper>
        <div className=' w-full flex flex-col '>
          <div className=' mb-16'>
            <H2
              color='blue-dark'
              className='text-blue-dark font-bold max-w-md 2xl:text-8xl 2xl:max-w-4xl leading-none'
            >
              And we&apos;re great at what we do.{' '}
            </H2>
            <Lead color='cream'>
              We are builders. This is our craft. <br />
              Our hobbies are our profession.
            </Lead>
          </div>
          <div className='max-w-md'>
            <Work_Services_Card service={'See Everything We Create'} url={'/services'} />
          </div>
        </div>
      </InnerWrapper>
    </PageSection>
  )
}

export default Home_Services
