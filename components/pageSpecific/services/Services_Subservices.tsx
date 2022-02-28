import Servicess_Subservicess_Box from './Servicess_Subservices_Box'
import subservice from '@data/services-animation'
import PageSection from '@parts/PageSection'
import InnerWrapper from '@parts/InnerWrapper'
import H2 from '@typography/H2'
import Lead from '@typography/Lead'

function Services_Subservices() {
  return (
    <PageSection>
      <InnerWrapper>
        <div className='grid grid-cols-4'>
          <div className=' col-span-4 md:h-screen justify-center md:max-w-md mx-auto md:sticky top-0 md:overflow-auto'>
            <div className=''>
              <H2 color='wine'>there’s plenty of ways to butter your bread</H2>
              <Lead color='blue'>and we’ve pretty much mastered all of them.</Lead>
            </div>
          </div>
          <div className=' col-span-4 md:col-span-2 w-full h-full    mx-auto'>
            <div>
              {subservice.map((subservice) => (
                <Servicess_Subservicess_Box subservice={subservice} key={subservice.service} />
              ))}
            </div>
          </div>
        </div>
      </InnerWrapper>
    </PageSection>
  )
}
export default Services_Subservices
