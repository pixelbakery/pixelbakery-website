import { ReactNode, PropsWithChildren } from 'react'
import cn from 'classnames'
import H1 from '@typography/H1'
import BackLink from '@parts/BackLink'
import Lead from '@typography/Lead'

import dynamic from 'next/dynamic'
// import ReactPlayer from 'react-player/lazy'
import Loading from '@utility/Loading'

const ReactPlayer = dynamic(() => import('react-player/lazy'), {
  ssr: false,
  loading: () => (
    <div className={'relative h-100 w-100'}>
      <Loading />
    </div>
  ),
})
const LottiePlayer = dynamic(() => import('@parts/LottiePlayer'), {
  ssr: false,
  loading: () => (
    <div className={'relative h-100 w-100'}>
      <Loading />
    </div>
  ),
})
type Props = {
  children?: ReactNode
  serviceName: string
  isLottie: boolean
  lottieComponent?: any
  subheader: string
  videoSourceMP4?: string
  videoSourceWEBM?: string
  bgColor: string
}

function Services_Header({
  isLottie,
  bgColor,
  lottieComponent,
  serviceName,
  videoSourceMP4,
  videoSourceWEBM,
  subheader,
  children,
}: PropsWithChildren<Props>) {
  const VideoContent = () => {
    return (
      <ReactPlayer
        muted={true}
        playsinline={true}
        autoPlay={true}
        loop={true}
        controls={false}
        width='100%'
        height='100%'
        className={`bg-${bgColor} w-full h-full relative  xl:object-cover`}
        url={[`${videoSourceWEBM}`, `${videoSourceMP4}`]}
        config={{
          file: {
            attributes: {
              autoPlay: true,
              loop: true,
              playsinline: true,
              muted: true,
              class: 'object-contain xl:object-cover ',
              style: { width: '100%', height: '100%' },
            },
          },
        }}
      />
    )
  }

  return (
    <section className='lander-services my-4  overflow-hidden h-full xl:h-screen xl:max-h-screen'>
      <div className=' grid gap-y-12 md:gap-3 grid-cols-1 xl:grid-cols-2 h-full'>
        <div className={cn(`overflow-hidden h-[66vh] col-span-1  xl:h-full`, `bg-${bgColor}`)}>
          {isLottie ? <LottiePlayer anim={lottieComponent} /> : <VideoContent />}
        </div>
        <div className=' col-span-1 flex flex-col justify-start py-6 px-10 '>
          <div className='xl:pt-40 max-w-lg 4xl:max-w-3xl mx-auto'>
            <BackLink text={'Services'} href={'/services'} />
            <H1 className='mt-2 pt-0 mb-4 2xl:mb-2 text-blue-dark'>{serviceName}</H1>
            <Lead color='peach'>{`${subheader}`}</Lead>
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}
export default Services_Header
