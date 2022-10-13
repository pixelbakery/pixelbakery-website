import Work_Services_Card from '../work/Work_Services_Card'
import PageSection from '@parts/PageSection'
import InnerWrapper from '@parts/InnerWrapper'
import H2 from '@typography/H2'
import Lead from '@typography/Lead'
import services from '@data/services'
import Services_AllServices_Card_Filled from '@services/Services_AllServices_Card_Filled'
import Button_Outlined from '@parts/Button_Outlined'
import H3 from '@typography/H3'
import Services_AllServices_Card_Outlined from '@services/Services_AllServices_Card_Outlined'
const Home_Services = () => {
  const all = {
    service: 'Overview of All Services',
    url: '/services',
    description: 'Take a glance at our menu.',
  }
  return (
    <PageSection color='blue' id='home-services'>
      <InnerWrapper className='md:max-w-3xl lg:max-w-6xl 2xl:max-w-10xl lg:px-6 2xl:px-12 mx-auto'>
        <div className=' w-full flex flex-col '>
          <div className=' mb-16'>
            <H2 color='blue-dark' className='text-blue-dark '>
              We are builders and this is is our craft. <br /> <br />
              Our hobbies are our profession.
            </H2>
            <Lead color='cream  '>
              Our team creates intentional, high-quality products that are results of purposeful
              visions and not taking any shortcuts.
            </Lead>
          </div>
        </div>

        <div className='w-full flex flex-col lg:flex-row gap-x-12 '>
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
              <p className='text-sm italic  leading-tight text-blue-dark'>
                Kinda like when they reintroduced wolves into Yellowstone 🍃
              </p>
            </div>
          </div>
          <div className='w-full lg:w-3/4 mt-12 lg:mt-0 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-6 lg:gap-x-8 lg:gap-y-12'>
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
