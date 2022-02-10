import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import H2 from '@typography/H2'
import { InlineWidget } from 'react-calendly'

function Onboarding_Calendly() {
  return (
    <PageSection color='pink'>
      <InnerWrapper>
        <H2 color='cream'>Schedule a meeting</H2>
        <InlineWidget
          url='https://calendly.com/pixelbakery/exploratory-meeting'
          styles={{
            height: '1000px',
            width: '100%',
          }}
        />
      </InnerWrapper>
    </PageSection>
  )
}
export default Onboarding_Calendly
