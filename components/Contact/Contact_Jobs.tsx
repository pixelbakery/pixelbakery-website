import React from 'react'
import Button_Filled from '../parts/Button_Filled'
import PageSection from '../PageSection'
import H2 from '../H2'
import InnerWrapper from '../InnerWrapper'
import Lead from '../Lead'

function Contact_Jobs() {
  return (
    <PageSection className=' bg-wine '>
      <InnerWrapper className=''>
        <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-12'>
          <div className='col-span-1'>
            <H2 color='blue'> Looking for a job? </H2>
          </div>
          <div className='col-span-1'>
            <Lead color='cream'>We&apos;re always searching for new family members</Lead>
            <p className='text-cream font-medium mb-8 leading-tight text-lg'>
              Got what it takes to rise with us? Great! Send us a link to your résumé or portfolio
              to become part of our talent pool.
            </p>
          </div>

          <div className=' lg:col-span-2 grid grid-cols-1 lg:grid-cols-3 lg:gap-4'>
            <Button_Filled
              center={true}
              link={'/careers#positions'}
              text={'get to work'}
              textColor={'cream'}
              bgColor={'blue'}
              chevronDirection={'right'}
            />
            <Button_Filled
              link={'/careers#vendors'}
              center={true}
              text={"get to freelancin'"}
              textColor={'cream'}
              bgColor={'blue'}
              chevronDirection={'right'}
            />
            <Button_Filled
              link={'/careers#talent'}
              center={true}
              text={"get to actin'"}
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
