import Lottie_Animation from '@data/lottie_services/lottie_services_animatedExplainers.json' assert { type: 'json' }
import Button_Outlined from '@parts/Button_Outlined'
import PageSection_FullWidth from '@parts/PageSection_FullWidth'
import H2 from '@typography/H2'
import dynamic from 'next/dynamic'
const LottiePlayer = dynamic(() => import('@parts/LottiePlayer'), {
  ssr: false,
  loading: () => (
    <div className={'relative  w-full aspect-16/9 bg-wine-100 py-96 flex flex-col justify-center'}>
      <p className='text-center text-wine font-extrabold text-4xl self-center'>Loading...</p>
    </div>
  ),
})

const ServicesOverview_AnimatedExplainers = () => {
  return (
    <PageSection_FullWidth id='animation'>
      <div className='grid lg:grid-cols-2 gap-4 '>
        <div className='bg-yellow h-full max-h-screen'>
          <LottiePlayer anim={Lottie_Animation} />
        </div>
        <div className='flex flex-col justify-center px-12 py-12'>
          <H2 color='peach' className='mb-6 2xl:mb-10 '>
            Animated <br />
            Explainer Videos
          </H2>
          <p>
            Generally clocking in around 60 to 90 seconds, animated explainer videos are used to
            explain your company’s product or service. By introducing audiences to your brand in a
            concise, visually pleasing way, you can make sure that everyone is on the same page—
            fast.
          </p>
          <Button_Outlined
            text={'Animated Explainer Services'}
            link={'/services/animated-explainer-videos'}
            color={'blue'}
            chevronDirection='right'
          />
        </div>
      </div>
    </PageSection_FullWidth>
  )
}
export default ServicesOverview_AnimatedExplainers
