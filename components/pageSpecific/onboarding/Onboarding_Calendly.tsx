import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import { H1, H2 } from '@typography/index'
// import { InlineWidget } from 'react-calendly'
import Lead from '@typography/Lead'
import dynamic from 'next/dynamic'

const InlineWidget = dynamic(() => import('react-calendly').then((module) => module.InlineWidget), {
  ssr: false,
  loading: () => (
    <div className={'relative h-100 w-full bg-wine-100 py-96 flex flex-col justify-center'}>
      <p className='text-center text-wine font-extrabold text-4xl self-center'>Loading...</p>
    </div>
  ),
})
interface Calendly {
  className?: string
  bgColor?: string
  h1?: boolean
}
function Onboarding_Calendly({ ...props }: Calendly) {
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
          <InlineWidget
            url='https://calendly.com/pixelbakery/exploratory-meeting?hide_gdpr_banner=1'
            styles={{
              height: '1250px',
              width: '100%',
              overflow: 'hidden',
            }}
          />
        </div>
        <div className='hidden xl:block'>
          <InlineWidget
            url='https://calendly.com/pixelbakery/exploratory-meeting?hide_gdpr_banner=1'
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
