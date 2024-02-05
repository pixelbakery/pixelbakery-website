import Services_Subservices_Box from '@services/Services_Subservices_Box'
import subservice from '@data/services-animation'
import PageSection from '@parts/PageSection'
import InnerWrapper from '@parts/InnerWrapper'
import H2AndLead from '@typography/H2AndLead'

function Services_Subservices() {
  return (
    <PageSection id={'sub-services'}>
      <InnerWrapper>
        <div className='flex flex-col gap-y-12  max-w-lg lg:max-w-full mx-auto'>
          <div className=' col-span-5  w-full top-0'>
            <div className=' '>
              <H2AndLead
                headerText={'there’s plenty of ways to butter your bread'}
                headerColor={'wine'}
                leadText={'and we’ve pretty much mastered them all'}
                leadColor={'blue'}
              />
            </div>
          </div>
          <div className='w-full grid grid-cols-1 lg:grid-cols-2 4xl:grid-cols-3 gap-12 mx-auto'>
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
