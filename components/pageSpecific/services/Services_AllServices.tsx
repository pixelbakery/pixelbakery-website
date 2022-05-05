import Services_AllServicess_Card from './Services_AllServices_Card'
import services from '@data/services'
import PageSection from '@parts/PageSection'
import InnerWrapper from '@parts/InnerWrapper'
import H2 from '@typography/H2'
import Lead from '@typography/Lead'

function Services_AllServices() {
  return (
    <PageSection>
      <InnerWrapper>
        <div className='grid grid-cols-12 '>
          <div className='col-span-12 md:col-span-4 flex flex-col justify-center'>
            <H2 color='blue-dark'>Some of our other talents</H2>
          </div>

          <div className=' mx-auto flex flex-wrap col-span-12 -mt-2'>
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
