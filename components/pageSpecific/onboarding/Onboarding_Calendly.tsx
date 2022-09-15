import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import H2 from '@typography/H2'
import { InlineWidget } from 'react-calendly'
import Lead from '@typography/Lead'
interface Calendly {
  className?: string
  bgColor?: string
}
function Onboarding_Calendly({ ...props }: Calendly) {
  return (
    <PageSection
      color={props.bgColor ? `${props.bgColor}` : 'pink'}
      id='calendly'
      className={props.className ? props.className : ''}
    >
      <InnerWrapper className='mx-auto'>
        <H2
          noMaxWidth
          color='egg'
          className='text-center mx-auto lg:mb-0 lg:pb-0 max-w-3xl 2xl:max-w-3xl'
          noMargins
        >
          Schedule a meeting
        </H2>
        <Lead color='blue-dark text-center mx-auto mt-2' noMargins>
          Find a time that works best for you and your team.
        </Lead>
        <div className='xl:hidden mx-auto'>
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
