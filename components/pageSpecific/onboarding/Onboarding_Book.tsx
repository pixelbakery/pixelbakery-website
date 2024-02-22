import { Button_Outlined } from '@parts/index'
import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import { H1, H2 } from '@typography/index'
// import { InlineWidget } from 'react-calendly'
import Lead from '@typography/Lead'
import dynamic from 'next/dynamic'

const Onboarding_Book_Calendly = dynamic(() => import('@onboarding/Onboarding_Book_Calendly'), {
  ssr: false,
})

interface CalendlyProps {
  className?: string
  bgColor?: string
  h1?: boolean
}
const Onboarding_Book = ({ ...props }: CalendlyProps) => {
  return (
    <PageSection
      color={props.bgColor ? `${props.bgColor}` : 'pink'}
      id='calendly'
      className={props.className ? props.className : ''}
    >
      <InnerWrapper className='mx-auto'>
        {props.h1 ? (
          <H1 className='text-center mx-auto' color='cream'>
            Schedule a Meeting
          </H1>
        ) : (
          <H2
            noMaxWidth
            color='egg'
            className='text-center mx-auto lg:mb-0 lg:pb-0 max-w-3xl 2xl:max-w-3xl'
            noMargins
          >
            Schedule a meeting
          </H2>
        )}
        <Lead color='blue-dark' className='blue-dark text-center mx-auto mt-2' noMargins>
          Find a time that works best for you and your team.
        </Lead>
        <div className='xl:hidden mx-auto'>
          <Onboarding_Book_Calendly
            url='https://calendly.com/pixelbakery/exploratory-meeting?hide_gdpr_banner=1'
            styles={{
              height: '1250px',
              width: '100%',
              overflow: 'hidden',
            }}
          />
        </div>
        <div className='hidden xl:block'>
          <Onboarding_Book_Calendly
            url='https://calendly.com/pixelbakery/exploratory-meeting?hide_gdpr_banner=1'
            styles={{
              height: '800px',
              width: '100%',
              overflow: 'hidden',
            }}
          />
        </div>
        <div className='w-full flex justify-center flex-col mx-auto'>
          <Lead noMargins className='text-center self-center' color='cream'>
            Searching for our Zoom link?
          </Lead>
          <Button_Outlined
            text={`😉 It's right here`}
            link='https://pixelbakery.com/zoom'
            color='blue-dark'
            center
            className='my-1 py-1'
            chevronDirection='right'
            title='Zoom link'
          />
        </div>
      </InnerWrapper>
    </PageSection>
  )
}
export default Onboarding_Book
