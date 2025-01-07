import dynamic from 'next/dynamic'

const Onboarding_Book_Calendly = dynamic(() => import('@onboarding/Onboarding_Book_Calendly'), {
  ssr: false,
})

import { InnerWrapper, PageSection, Button_Outlined } from '@parts'
import { H1, H2, Lead } from '@typography/index'

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
          <H1 className='mx-auto text-center' color='cream'>
            Schedule a Meeting
          </H1>
        ) : (
          <H2
            noMaxWidth
            color='egg'
            className='max-w-3xl mx-auto text-center lg:mb-0 lg:pb-0 2xl:max-w-3xl'
            noMargins
          >
            Schedule a meeting
          </H2>
        )}
        <Lead color='blue-dark' className='mx-auto mt-2 text-center blue-dark' noMargins>
          Find a time that works best for you and your team.
        </Lead>
        <div className='mx-auto xl:hidden'>
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
        <div className='flex flex-col justify-center w-full mx-auto'>
          <Lead noMargins className='self-center text-center' color='cream'>
            Searching for our Zoom link?
          </Lead>
          <Button_Outlined
            text={`😉 It's right here`}
            link='https://pixelbakery.com/zoom'
            color='blue-dark'
            center
            className='py-1 my-1'
            chevronDirection='right'
            title='Zoom link'
          />
        </div>
      </InnerWrapper>
    </PageSection>
  )
}
export default Onboarding_Book
