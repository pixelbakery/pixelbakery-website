import Services_AllServices_Card_Filled from './Services_AllServices_Card_Filled'
import services from '@data/services'
import { InnerWrapper, PageSection } from '@parts'
import H2 from '@typography/H2'
import BackLink from '@parts/BackLink'
import Link from 'next/link'

function Services_AllServices() {
  return (
    <PageSection id={'all-services'}>
      <InnerWrapper>
        <div>
          <H2 className='mb-2 blue-dark 2xl:mb-4'>Some of our other talents</H2>
          <div className='my-6'>
            <BackLink text={'See them all'} href={'/services'} />
          </div>
        </div>

        <div className='grid grid-cols-1 col-span-12 mx-auto mt-12 md:grid-cols-2 xl:grid-cols-4 3xl:grid-cols-3 gap-x-4 lg:gap-x-10 gap-y-6 lg:gap-y-14'>
          {services.map((services) => (
            <Services_AllServices_Card_Filled
              service={services}
              key={services.service}
              primaryColor={'pink-lighter'}
              textColor={'pink'}
              detailsHoverColor={'blue-dark'}
            />
          ))}
          <ul className='sr-only'>
            {services.map((service, index) => (
              <li key={index} className='sr-only'>
                <Link hrefLang={'en-US'} href={service.url}>
                  {service.service}, {service.description}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </InnerWrapper>
    </PageSection>
  )
}

export default Services_AllServices
