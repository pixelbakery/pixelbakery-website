import { InnerWrapper, PageSection } from '@parts'
import { H2, Lead, H3 } from '@typography'
import services from '@data/services'
import {Services_AllServices_Card_Outlined, Services_AllServices_Card_Filled} from '@services'
const Home_Services = () => {
  const all = {
    service: 'Overview of All Services',
    url: '/services',
    description: 'Take a glance at our menu.',
  }
  return (
    <PageSection color='blue' id='home-services'>
      <InnerWrapper className='mx-auto md:max-w-3xl lg:max-w-6xl 2xl:max-w-10xl lg:px-6 2xl:px-12'>
        <div className='flex flex-col w-full '>
          <div className='mb-16 '>
            <H2 color='blue-dark' className='text-blue-dark '>
              We are builders and this is our craft.
            </H2>
            <Lead color='cream'>
              Our team creates intentional, custom-tailored video content by having a purposeful
              vision and not taking any shortcuts.
            </Lead>
          </div>
        </div>

        <div className='flex flex-col w-full lg:flex-row gap-x-12 '>
          <div className='w-full lg:w-1/3 xl:w-1/4'>
            <H3 color='cream'>Capabilities</H3>
            <div className='max-w-sm'>
              <p className='text-blue-dark lg:text-xl'>
                Our strategy is to build cohesive creative ecosystems for that content to live in.
              </p>
              <p className='text-blue-dark lg:text-xl'>
                When your Instagram videos harmonize with your YouTube pre-roll animations, and your
                YouTube pre-roll enhances your campaign messaging, your brand finds balance in the
                universe.
              </p>
              <p className='text-sm italic leading-tight text-blue-dark'>
                Kinda like when they reintroduced wolves into Yellowstone 🍃
              </p>
            </div>
          </div>
          <div className='grid w-full grid-cols-1 mt-12 lg:w-3/4 lg:mt-0 md:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-6 lg:gap-x-8 lg:gap-y-12'>
            {services.map((services) => (
              <Services_AllServices_Card_Filled
                service={services}
                key={services.service}
                primaryColor={'cream'}
                textColor={'blue-dark'}
              />
            ))}
            <Services_AllServices_Card_Outlined
              service={all}
              primaryColor={'cream'}
              textColor={'cream'}
            />
          </div>
        </div>
      </InnerWrapper>
    </PageSection>
  )
}

export default Home_Services
