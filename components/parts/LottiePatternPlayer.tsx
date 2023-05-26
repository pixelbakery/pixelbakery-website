import { useEffect, useRef, useState } from 'react'
// import Patterns_Master from '@data/lottie_patterns/Patterns_Master.json' assert { type: 'json' }

// import lottie from 'lottie-web'
import lottie from 'lottie-web/build/player/lottie_light'

const LottiePatternPlayer = () => {
  const element = useRef<HTMLDivElement>()
  const lottieInstance = useRef<any>()
  const [data, setData] = useState(null)
  useEffect(() => {
    import('@data/lottie_patterns/Patterns_Master.json').then((data) => {
      setData(data)
    })
  }, [])
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
          // progressiveLoad: true,
        },
        animationData: data,
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
  })

  return <div style={{ height: '100%', width: '100%' }} ref={element} />
}

export default LottiePatternPlayer
