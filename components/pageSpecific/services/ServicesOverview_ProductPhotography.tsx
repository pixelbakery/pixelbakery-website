const Button_Outlined = dynamic(() => import('@parts/Button_Outlined'), {
  ssr: false,
})
import PageSection_FullWidth from '@parts/PageSection_FullWidth'
import { H2 } from '@typography/index'
import dynamic from 'next/dynamic'
import ReactPlayer from 'react-player/lazy'

const ServicesOverview_AnimatedExplainers = () => {
  return (
    <PageSection_FullWidth id='animation'>
      <div className='grid lg:grid-cols-2 gap-4 '>
        <div className='bg-pink h-full max-h-screen order-last'>
          <ReactPlayer
            muted={true}
            playsinline={true}
            autoPlay={true}
            loop={true}
            controls={false}
            width='100%'
            height='100%'
            className='bg-pink'
            url={`${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/services/PB_ServiceAnimation_ProductPhotography.mp4`}
            config={{
              file: {
                attributes: {
                  autoPlay: true,
                  loop: true,
                  playsinline: true,
                  muted: true,
                  style: { width: '100%', height: '100%', objectFit: 'cover' },
                },
              },
            }}
          />
        </div>
        <div className='flex flex-col justify-center px-12 py-12 order-1'>
          <H2 color='pink' className='mb-6 2xl:mb-10 '>
            Product Photography
          </H2>
          <p>
            Product photography is one of the most effective ways to show potential customers who
            you are and what you sell. Photos are the entryway into your brand, and they should
            accurately reflect the effort and consideration you’ve put into everything you’ve built.
          </p>
          <Button_Outlined
            text={'More'}
            link={'/services/product-photography'}
            color={'pink'}
            chevronDirection='right'
          />
        </div>
      </div>
    </PageSection_FullWidth>
  )
}
export default ServicesOverview_AnimatedExplainers
