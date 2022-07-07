// import { Lottie_Animation } from '@lib/lottie_helpers'
import Button_Outlined from '@parts/Button_Outlined'
import PageSection_FullWidth from '@parts/PageSection_FullWidth'
import H2 from '@typography/H2'

function ServicesOverview_CreativeStrategy() {
  return (
    <PageSection_FullWidth id='creative-strategy'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 '>
        <div className='col-span-1 bg-blue h-full max-h-screen '>
          <div className='relative h-full w-full'>
            <video
              className='h-full w-full object-cover hideControls'
              muted
              loop
              controls={false}
              autoPlay
              playsInline
            >
              <source src='/img/PB_ServiceAniamtion_CreativeStrategy.mp4' type='video/mp4' />
            </video>
          </div>
        </div>
        <div className='col-span-1 flex flex-col justify-center px-12  py-12'>
          <H2 color='blue' className='mb-6 2xl:mb-10 '>
            Creative Concepting &amp; Strategy
          </H2>
          <p>
            We're more than just designers – we're thinkers, strategizers, and consultants. From the
            initial discovery meeting to the final deliverable, our leadership team at Pixel Bakery
            is all about strategizing the best way to deliver your message.
          </p>
          <Button_Outlined
            text={'More'}
            link={'/services/creative-strategy'}
            color={'blue'}
            chevronDirection='right'
          />
        </div>
      </div>
    </PageSection_FullWidth>
  )
}
export default ServicesOverview_CreativeStrategy
