import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import H2 from '@typography/H2'
import { InlineWidget } from 'react-calendly'

function Onboarding_Calendly() {
  return (
    <PageSection color='pink' id='calendly'>
      <InnerWrapper className='-mx-4 md:mx-auto'>
        <H2 color='cream'>Schedule a meeting</H2>
        <div className='xl:hidden'>
          <InlineWidget
            url='https://calendly.com/pixelbakery/exploratory-meeting'
            styles={{
              height: '1250px',
              width: '100%',
              overflow: 'hidden',
            }}
          />
        </div>
        <div className='hidden xl:block'>
          <InlineWidget
            url='https://calendly.com/pixelbakery/exploratory-meeting'
            styles={{
              height: '800px',
              width: '100%',
              overflow: 'hidden',
            }}
          />
        </div>
      </InnerWrapper>
    </PageSection>
  )
}
export default Onboarding_Calendly
