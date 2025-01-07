import Lottie_EmergingMedia from '@data/lottie_services/lottie_services_emergingMedia.json' assert { type: 'json' }
import { PageSection_FullWidth, Button_Outlined } from '@parts'
import { H2 } from '@typography'
import dynamic from 'next/dynamic'
const LottiePlayer = dynamic(() => import('@parts/LottiePlayer'), {
  ssr: false,
})

function ServicesOverview_EmergingMedia() {
  return (
    <PageSection_FullWidth id='emerging-media'>
      <div className='grid gap-4 lg:grid-cols-2 '>
        <div className='flex flex-col justify-center order-last px-12 py-12 lg:order-first'>
          <H2 color='blue-dark' className='mb-6 2xl:mb-10 '>
            Emerging Media
          </H2>
          <p>
            With the development and expansion of social media, mobile marketing, email marketing,
            instant messaging, and various other digital platforms, it only makes sense that current
            trends in marketing are ever-evolving. Why not evolve with them?
          </p>
          <Button_Outlined
            text={'Emerging Media Services'}
            link={'/services/emerging-media'}
            color={'blue-dark'}
            chevronDirection='right'
          />
        </div>
        <div className='h-full max-h-screen bg-blue-dark'>
          <LottiePlayer anim={Lottie_EmergingMedia} />
        </div>
      </div>
    </PageSection_FullWidth>
  )
}
export default ServicesOverview_EmergingMedia
