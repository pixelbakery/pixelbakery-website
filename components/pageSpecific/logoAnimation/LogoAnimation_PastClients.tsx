import { InnerWrapper, PageSection } from '@parts'
import { H2, Lead } from '@typography'
import LogoAnimation_PastClients_Card from '@logoAnimation/LogoAnimation_PastClients_Card'

function LogoAnimation_PastClients() {
  return (
    <PageSection className='my-4 px-12 py-12 hidden md:block' id='descriptions'>
      <InnerWrapper className='mx-auto max-w-6xl'>
        <div className='mb-12'>
          <H2 className='pb-6'>Past Clients</H2>
          <Lead>Check out some of the other logo animations we&apos;ve done</Lead>
        </div>
        <div className='grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 lg:gap-16'>
          <LogoAnimation_PastClients_Card
            video='/img/motion-mixer/PixelBakery_MotionMixer_sampson.mp4'
            client='Sampson Construction'
          />
          <LogoAnimation_PastClients_Card
            video='/img/motion-mixer/PixelBakery_MotionMixer_doane.mp4'
            client='Doane University'
          />
          <LogoAnimation_PastClients_Card
            video='/img/motion-mixer/PixelBakery_MotionMixer_northern.mp4'
            client='The Northern Creative'
          />
          <LogoAnimation_PastClients_Card
            video='/img/motion-mixer/PixelBakery_MotionMixer_foundry.mp4'
            client='The Foundry'
          />
          <LogoAnimation_PastClients_Card
            video='/img/motion-mixer/PixelBakery_MotionMixer_caitlyn.mp4'
            client='Caitlyn Bea'
          />
          <LogoAnimation_PastClients_Card
            video='/img/motion-mixer/PixelBakery_MotionMixer_hudl.mp4'
            client='Hudl'
          />
          <LogoAnimation_PastClients_Card
            video='/img/motion-mixer/PixelBakery_MotionMixer_blackboard.mp4'
            client='Blackboard Design'
          />
          <LogoAnimation_PastClients_Card
            video='/img/motion-mixer/PixelBakery_MotionMixer_nelnet.mp4'
            client='Nelnet'
          />
          <LogoAnimation_PastClients_Card
            video='/img/motion-mixer/PixelBakery_MotionMixer_blueBlood.mp4'
            client='Blue Blood Brewing'
          />
        </div>
      </InnerWrapper>
    </PageSection>
  )
}
export default LogoAnimation_PastClients
