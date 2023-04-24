import { useEffect, useRef } from 'react'
import Lead from '@typography/Lead'
// import lottie from 'lottie-web'
import lottie from 'lottie-web/build/player/lottie_light'
interface LottieProps {
  animationData: any
  width: number
  height: number
}

const LottiePatternPlayer = ({ animationData }: LottieProps) => {
  const element = useRef<HTMLDivElement>()
  const lottieInstance = useRef<any>()

  useEffect(() => {
    if (element.current) {
      lottieInstance.current?.destroy()
      lottieInstance.current = lottie.loadAnimation({
        container: element.current,
        renderer: 'svg',
        loop: true,
        // autoplay: true,

        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
          progressiveLoad: true,
        },
        animationData: animationData,
      })
    }

    lottieInstance.current.playSegments(
      [
        [0, 23],
        [24, 95],
      ],
      true,
    )

    return () => {
      lottieInstance.current?.destroy()
      lottieInstance.current = null
    }
  }, [animationData])

  if (!animationData) {
    return (
      <div className='w-full h-full flex flex-col justify-center'>
        <Lead color='cream' className='self-center text-center'>
          Loading
        </Lead>
      </div>
    )
  }
  return <div style={{ height: '100%', width: '100%' }} ref={element} />
}

export default LottiePatternPlayer
