import Services_AllServices_Card_Filled from './Services_AllServices_Card_Filled'
import services from '@data/services'
import PageSection from '@parts/PageSection'
import InnerWrapper from '@parts/InnerWrapper'
import H2 from '@typography/H2'
import BackLink from '@parts/BackLink'

function Services_AllServices() {
  return (
    <PageSection id={'all-services'}>
      <InnerWrapper>
        <div>
          <H2 color='blue-dark mb-2 2xl:mb-4'>Some of our other talents</H2>
          <div className='my-6'>
            <BackLink text={'See them all'} href={'/services'} />
          </div>
        </div>

        <div className='mt-12 mx-auto  col-span-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 3xl:grid-cols-3 gap-x-4 lg:gap-x-10 gap-y-6 lg:gap-y-14'>
          {services.map((services) => (
            <Services_AllServices_Card_Filled
              service={services}
              key={services.service}
              primaryColor={'pink-lighter'}
              textColor={'pink'}
              detailsHoverColor={'blue-dark'}
            />
          ))}
        </div>
      </InnerWrapper>
    </PageSection>
  )
}

export default Services_AllServices
