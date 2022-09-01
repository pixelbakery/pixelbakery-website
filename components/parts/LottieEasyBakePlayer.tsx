import { useRef, useEffect } from 'react'
// import lottie from 'lottie-web'
import lottie from 'lottie-web'

interface LottieProps {
  animationData: any
}

const Lottie_BouncingTV = () => {
  const animationData = require('@data/PixelBakery_EasyBakeOven.json')
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
export default Lottie_BouncingTV
