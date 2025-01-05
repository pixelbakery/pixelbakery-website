import { InnerWrapper, PageSection, Button_Filled } from '@parts'

import { H2, Lead } from '@typography'

function Contact_Jobs() {
  return (
    <PageSection className=' bg-wine' id={'contact-careers'}>
      <InnerWrapper className=''>
        <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-12'>
          <div className='col-span-1'>
            <H2 color='blue'> Looking for a job? </H2>
          </div>
          <div className='col-span-1'>
            <Lead color='cream'>We&apos;re always searching for new family members</Lead>
            <p className='mb-8 text-lg font-medium leading-tight text-cream'>
              Got what it takes to rise with us? Great! Send us a link to your résumé or portfolio
              to become part of our talent pool.
            </p>
            <Button_Filled
              center={false}
              link={'/careers#positions'}
              text={'get to work'}
              textColor={'cream'}
              bgColor={'blue'}
              chevronDirection={'right'}
            />
          </div>
        </div>
      </InnerWrapper>
    </PageSection>
  )
}
export default Contact_Jobs
