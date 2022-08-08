import { ReactNode, PropsWithChildren, useEffect, useState } from 'react'
import cn from 'classnames'
import H1 from '@typography/H1'
import BackLink from '@parts/BackLink'
import Lead from '@typography/Lead'
import Lottie from 'react-lottie-player'

type Props = {
  children?: ReactNode
  serviceName: string
  isLottie: boolean
  LottieComponent?: any
  subheader: string
  videoSourceMP4?: string
  videoSourceWEBM?: string
  bgColor: string
}

function Services_Header({
  isLottie,
  bgColor,
  LottieComponent,
  serviceName,
  videoSourceMP4,
  videoSourceWEBM,
  subheader,
  children,
}: PropsWithChildren<Props>) {
  const LottieAnimation = () => {
    const [animationData, setAnimationData] = useState(null)

    useEffect(() => {
      setAnimationData(LottieComponent)
    }, [])

    if (!animationData)
      return (
        <div className='w-full h-full flex flex-col justify-center'>
          <Lead color='cream' className='self-center text-center'>
            Loading
          </Lead>
        </div>
      )
    return (
      <Lottie
        animationData={LottieComponent}
        loop
        play
        rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
      />
    )
  }
  const VideoContent = () => {
    return (
      <video
        className='w-full h-full object-cover hideControls'
        muted
        autoPlay
        loop
        playsInline
        controls={false}
      >
        {videoSourceWEBM != undefined ? (
          <source
            // src='https://cdn.pixelbakery.com/img/PB_ServiceAniamtion_SocialMedia.webm'
            src={`${videoSourceWEBM}`}
            type='video/webm'
          />
        ) : (
          ''
        )}
        <source src={`${videoSourceMP4}`} type='video/mp4' />
      </video>
    )
  }

  return (
    <section className='lander-services my-4  overflow-hidden lg:max-h-screen'>
      <div className=' grid gap-y-12 md:gap-3 grid-cols-1 lg:grid-cols-2'>
        <div
          className={cn(
            `overflow-hidden h-[66vh] col-span-1  lg:h-full origin-bottom`,
            `bg-${bgColor}`,
          )}
        >
          <div
            className={
              (cn(` origin-bottom bg-yellow col-span-1 h-[33vh] lg:h-full`), `bg-${bgColor}`)
            }
          >
            {isLottie ? <LottieAnimation /> : <VideoContent />}
          </div>
        </div>
        <div className=' col-span-1 flex flex-col justify-start py-6 px-10 '>
          <div className='lg:pt-32 xl:pt-40 max-w-lg 4xl:max-w-3xl mx-auto'>
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
