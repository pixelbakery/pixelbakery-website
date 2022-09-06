import { useRef, useEffect } from 'react'
import lottie from 'lottie-web'

interface LottieProps {
  anim: any
  preserveAspectRatio?: boolean
}

const LottiePlayer = ({ anim, preserveAspectRatio }: LottieProps) => {
  const animationData = anim
  const element = useRef<HTMLDivElement>(null)
  const lottieInstance = useRef<any>()
  let aspect = 'xMidYMid slice'
  if (preserveAspectRatio === false) aspect = ''
  useEffect(() => {
    lottieInstance.current = lottie.loadAnimation({
      animationData,
      renderer: 'svg',
      container: element.current,
      rendererSettings: {
        preserveAspectRatio: aspect,
      },
    })

    return () => {
      lottieInstance.current?.destroy()
      lottieInstance.current = null
    }
  }, [animationData])

  return <div style={{ height: '100%', width: '100%' }} ref={element}></div>
}
export default LottiePlayer
