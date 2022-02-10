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
          <div className='col-span-2 xl:col-span-1 grid grid-cols-2'>
            <div className='col-span-1 lg:col-span-2'>
              <H2 className='text-blue-dark pr-8'>We&apos;re a specialized team</H2>
            </div>
            <div className='col-span-2'>
              <Lead color='pink'>we do a few things and we do it well.</Lead>
              <Lead color='pink'>
                we&apos;re like a scalpel; <br /> we operate with precision and intent.
              </Lead>
              <Lead color='pink'>but, like, keyframes instead of open heart surgery.</Lead>
            </div>
          </div>
          <div className=' col-span-2 xl:col-span-1 grid grid-cols-1 sm:grid-cols-2 gap-3  '>
            {services.map((service) => (
              <Work_Services_Card
                service={service.service}
                url={service.url}
                key={service.service}
              />
            ))}
          </div>
          {/* <div class="col-span-1 flex flex-wrap -m-2">
                              <div class="h-12 m-2 w-1/2 rounded-md text-white bg-pink-light flex items-center justify-center text-2xl font-semibold ">1</div>
                              <div class="h-12 m-2 w-1/2 rounded-md text-white bg-pink-light flex items-center justify-center text-2xl font-semibold ">2</div>
                              <div class="h-12 m-2 w-1/2 rounded-md text-white bg-pink-light flex items-center justify-center text-2xl font-semibold ">3</div>
                          </div> */}
        </div>
      </InnerWrapper>
    </PageSection>
  )
}
export default Work_Services
