import { Services_Subservices_Box } from '@services'
import subservice from '@data/services-animation'
import { InnerWrapper, PageSection } from '@parts'
import { H2AndLead } from '@typography'

function Services_Subservices() {
  return (
    <PageSection id={'sub-services'}>
      <InnerWrapper>
        <div className='flex flex-col max-w-lg mx-auto gap-y-12 lg:max-w-full'>
          <div className='top-0 w-full col-span-5 '>
            <div className=''>
              <H2AndLead
                headerText={'there’s plenty of ways to butter your bread'}
                headerColor={'wine'}
                leadText={'and we’ve pretty much mastered them all'}
                leadColor={'blue'}
              />
            </div>
          </div>
          <div className='grid w-full grid-cols-1 gap-12 mx-auto lg:grid-cols-2 4xl:grid-cols-3'>
            {subservice.map((subservice) => (
              <Services_Subservices_Box subservice={subservice} key={subservice.service} />
            ))}
          </div>
        </div>
      </InnerWrapper>
    </PageSection>
  )
}
export default Services_Subservices
