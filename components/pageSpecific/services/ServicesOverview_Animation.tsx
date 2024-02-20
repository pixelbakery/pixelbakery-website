import Lottie_Animation from '@data/lottie_services/lottie_services_animation.json' assert { type: 'json' }
import Button_Outlined from '@parts/Button_Outlined'
import PageSection_FullWidth from '@parts/PageSection_FullWidth'
import H2 from '@typography/H2'
import dynamic from 'next/dynamic'
const LottiePlayer = dynamic(() => import('@parts/LottiePlayer'), {
  ssr: false,
})

function ServicesOverview_Animation() {
  return (
    <PageSection_FullWidth id='animation'>
      <div className='grid lg:grid-cols-2 gap-4 '>
        <div className='bg-blue-dark h-full max-h-screen'>
          <LottiePlayer anim={Lottie_Animation} />
        </div>
        <div className='flex flex-col justify-center px-12 py-12'>
          <H2 color='blue-dark' className='mb-6 2xl:mb-10 '>
            Animation &amp; <br /> Motion Design
          </H2>
          <p>
            Every animation project is full-service and includes project management, creative
            concepting, sound design, storyboarding, and voiceover as needed. Whether you’re looking
            for a lower thirds animation template or a sizzle reel of your company’s coolest
            products, we’ve got you covered.
          </p>
          <Button_Outlined
            text={'Animation Services'}
            link={'/services/animation'}
            color={'blue-dark'}
            chevronDirection='right'
          />
        </div>
      </div>
    </PageSection_FullWidth>
  )
}
export default ServicesOverview_Animation
