import { useRef, useEffect } from 'react'

import lottie from 'lottie-web'

interface LottieProps {
  animationData: any
}

export const Lottie_BouncingTV = ({ animationData }: LottieProps) => {
  const element = useRef<HTMLDivElement>(null)
  const lottieInstance = useRef<any>()

  useEffect(() => {
    lottieInstance.current = lottie.loadAnimation({
      animationData,
      container: element.current,
    })

    return () => {
      lottieInstance.current?.destroy()
      lottieInstance.current = null
    }
  }, [animationData])

  return <div style={{ height: '100%', width: '100%' }} ref={element}></div>
}
