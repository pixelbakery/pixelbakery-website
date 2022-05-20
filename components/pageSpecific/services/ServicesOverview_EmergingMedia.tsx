import { Lottie_EmergingMedia } from '@lib/lottie_helpers'
import Button_Outlined from '@parts/Button_Outlined'
import PageSection_FullWidth from '@parts/PageSection_FullWidth'
import H2 from '@typography/H2'

function ServicesOverview_EmergingMedia() {
  return (
    <PageSection_FullWidth id='emerging-media'>
      <div className='grid lg:grid-cols-2 gap-4 '>
        <div className='flex flex-col justify-center px-12  py-12 order-last lg:order-first'>
          <H2 color='blue-dark' className='mb-6 2xl:mb-10 '>
            Emerging Media
          </H2>
          <p>
            With the development and expansion of social media, mobile marketing, email marketing,
            instant messaging, and various other digital platforms, it only makes sense that current
            trends in marketing are ever-evolving. Why not evolve with them?
          </p>
          <Button_Outlined
            text={'More'}
            link={'/services/emerging-media'}
            color={'blue-dark'}
            chevronDirection='right'
          />
        </div>
        <div className='bg-blue-dark h-full max-h-screen'>
          <Lottie_EmergingMedia />
        </div>
      </div>
    </PageSection_FullWidth>
  )
}
export default ServicesOverview_EmergingMedia
