import Work_Services_Card from './Work_Services_Card'
import services from '@data/services'
import PageSection from '@parts/PageSection'
import InnerWrapper from '@parts/InnerWrapper'
import H2 from '@typography/H2'
import Lead from '@typography/Lead'

function Work_Services() {
  return (
    <PageSection color={'white'} id='whatwemake'>
      <InnerWrapper>
        <div className='grid grid-cols-2 gap-12'>
          <div className='grid grid-cols-2 col-span-2 xl:col-span-1'>
            <div className='col-span-1 lg:col-span-2'>
              <H2 className='pr-8 text-blue-dark'>We&apos;re a specialized team</H2>
            </div>
            <div className='col-span-2'>
              <Lead color='pink'>We do a few things and we do them well.</Lead>
              <Lead color='pink'>
                We&apos;re like a scalpel; <br /> we operate with precision and intent.
              </Lead>
              <Lead color='pink'>But, like, keyframes instead of open heart surgery.</Lead>
            </div>
          </div>
          <div className='grid grid-cols-1 col-span-2 gap-3  xl:col-span-1 sm:grid-cols-2'>
            {services.map((service) => (
              <Work_Services_Card
                service={service.service}
                url={service.url}
                key={service.service}
              />
            ))}
          </div>
        </div>
      </InnerWrapper>
    </PageSection>
  )
}
export default Work_Services
