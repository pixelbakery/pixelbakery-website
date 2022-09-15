import Services_AllServicess_Card from './Services_AllServices_Card'
import services from '@data/services'
import PageSection from '@parts/PageSection'
import InnerWrapper from '@parts/InnerWrapper'
import H2 from '@typography/H2'
import Lead from '@typography/Lead'
import BackLink from '@parts/BackLink'

function Services_AllServices() {
  return (
    <PageSection id={'all-services'}>
      <InnerWrapper>
        <div className='grid grid-cols-12  '>
          <div className='col-span-12 lg:col-span-4 flex flex-col justify-center max-w-lg lg:max-w-full mx-auto'>
            <H2 color='blue-dark mb-2 2xl:mb-4'>Some of our other talents</H2>
            <div className='my-6'>
              <BackLink text={'See them all'} href={'/services'} />
            </div>
          </div>

          <div className=' mx-auto  col-span-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-4 gap-y-6'>
            {services.map((services) => (
              <Services_AllServicess_Card service={services} key={services.service} />
            ))}
          </div>
        </div>
      </InnerWrapper>
    </PageSection>
  )
}

export default Services_AllServices
