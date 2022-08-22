// import Lottie from 'react-lottie-player'
import classNames from 'classnames'
import { PropsWithChildren, ReactNode, useEffect, useRef } from 'react'
import lottie from 'lottie-web'
import InnerWrapper from './InnerWrapper'

interface LottieProps {
  animationData: any
  width: number
  height: number
}
type Props = {
  children?: ReactNode
  bgColor?: string
}

const Lottie = ({ animationData }: LottieProps) => {
  const element = useRef<HTMLDivElement>()
  const lottieInstance = useRef<any>()

  useEffect(() => {
    if (element.current) {
      lottieInstance.current?.destroy()
      lottieInstance.current = lottie.loadAnimation({
        container: element.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,

        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        },
        animationData: animationData,
      })
    }

    return () => {
      lottieInstance.current?.destroy()
      lottieInstance.current = null
    }
  }, [animationData])

  return <div style={{ height: '100%', width: '100%' }} ref={element} />
}

const Wrapper = ({ bgColor, children }: PropsWithChildren<Props>) => {
  return (
    <div className={classNames('relative  w-full h-full ', [`bg-${bgColor}`])}>
      <div className='' id='lottie'>
        {children}
      </div>
    </div>
  )
}
export const Marq_Unicorn = ({ bgColor }) => {
  return (
    <Wrapper bgColor={bgColor}>
      <div className='-mb-40 lg:-mb-64 2xl:-mb-72  max-w-sm lg:max-w-md  relative z-0'>
        <Lottie
          animationData={require('@data/lottie/Marq_Lottie_FloatingUnicorn.json')}
          width={100}
          height={100}
        />
      </div>
    </Wrapper>
  )
}
export const Marq_MarchingSolders = ({ bgColor }) => {
  return (
    <InnerWrapper>
      <Wrapper bgColor={bgColor}>
        <div className='mt-12 w-full h-full overflow-hidden'>
          <Lottie
            animationData={require('@data/lottie/Marq_Lottie_MarchingSoldiers.json')}
            width={100}
            height={50}
          />
        </div>
      </Wrapper>
    </InnerWrapper>
  )
}
