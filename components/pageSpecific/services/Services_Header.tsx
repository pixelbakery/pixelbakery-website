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
  id: string
}

function Services_Header({
  isLottie,
  bgColor,
  lottieComponent,
  serviceName,
  videoSourceMP4,
  subheader,
  children,
  id,
}: PropsWithChildren<Props>) {
  const VideoContent = () => {
    return (
      <ReactPlayer
        muted={true}
        playsInline={true}
        autoPlay={true}
        loop={true}
        controls={false}
        width='100%'
        height='100%'
        className={`bg-${bgColor} w-full h-full relative  xl:object-cover`}
        url={`${videoSourceMP4}`}
        config={{
          file: {
            attributes: {
              autoPlay: true,
              loop: true,
              playsInline: true,
              muted: true,

              style: { width: '100%', height: '100%' },
            },
          },
        }}
      />
    )
  }

  return (
    <section
      className='h-full my-4 overflow-hidden lander-services xl:h-screen xl:max-h-screen'
      id={id}
    >
      <div className='grid h-full grid-cols-1  gap-y-12 md:gap-3 xl:grid-cols-2'>
        <div className={cn(`overflow-hidden h-[66vh] col-span-1  xl:h-full`, `bg-${bgColor}`)}>
          {isLottie ? <LottiePlayer anim={lottieComponent} /> : <VideoContent />}
        </div>
        <div className='flex flex-col justify-start col-span-1 px-10 py-6 '>
          <div className='max-w-lg mx-auto xl:pt-40 4xl:max-w-3xl'>
            <BackLink text={'Services'} href={'/services'} />
            <H1 color='blue-dark' className='pt-0 mt-2 mb-4 2xl:mb-2'>
              {serviceName}
            </H1>
            <Lead color='peach'>{`${subheader}`}</Lead>
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}
export default Services_Header
