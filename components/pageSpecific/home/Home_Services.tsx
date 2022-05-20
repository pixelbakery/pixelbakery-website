import Work_Services_Card from '../work/Work_Services_Card'
import services from '@data/services'
import PageSection from '@parts/PageSection'
import InnerWrapper from '@parts/InnerWrapper'
import H2 from '@typography/H2'
import Lead from '@typography/Lead'
import Link from 'next/link'
import Button_Filled from '@parts/Button_Filled'
// import gsap from 'gsap'
// import { PbIconMixerAbs } from "../icons/abs/index";

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
          {/* <div className='mx-auto w-full grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-12 lg:grid-cols-3 justify-items-stretch -mt-2 mb-16'>
            {services.map((service) => (
              <Work_Services_Card
                service={service.service}
                url={service.url}
                key={service.service}
              />
            ))}
          </div> */}
          <div className='max-w-md'>
            <Work_Services_Card service={'See Everything We Create'} url={'/services'} />
          </div>
        </div>
      </InnerWrapper>
    </PageSection>
  )
}

export default Home_Services
