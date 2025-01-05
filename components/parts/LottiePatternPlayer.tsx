// components/parts/LottiePatternPlayer.tsx
import { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'

// ❶ No SSR for Lottie. That’s usually good, as Lottie is purely client-based anyway.
const LottieLight = dynamic(() => import('react-lottie-player/dist/LottiePlayerLight'), {
  ssr: false,
})
interface Theme {
  objectColor: string
  backgroundColor: string
  textboxColor: string
  headerColor: string
  subheaderColor: string
}
const themes: Theme[] = [
  {
    objectColor: 'blue',
    backgroundColor: 'blue-dark',
    textboxColor: 'blue',
    headerColor: 'blue-dark',
    subheaderColor: 'blue',
  },
  {
    objectColor: 'blue-dark',
    backgroundColor: 'blue',
    textboxColor: 'blue-dark',
    headerColor: 'blue',
    subheaderColor: 'blue-dark',
  },
  {
    objectColor: 'cream',
    backgroundColor: 'peach',
    textboxColor: 'cream',
    headerColor: 'peach',
    subheaderColor: 'blue-dark',
  },
  {
    objectColor: 'pink',
    backgroundColor: 'pink-lighter',
    textboxColor: 'pink',
    headerColor: 'pink-lighter',
    subheaderColor: 'pink-lighter',
  },
  {
    objectColor: 'pink-lighter',
    backgroundColor: 'pink',
    textboxColor: 'pink-lighter',
    headerColor: 'pink',
    subheaderColor: 'blue-dark',
  },
  {
    objectColor: 'peach',
    backgroundColor: 'egg',
    textboxColor: 'peach',
    headerColor: 'egg',
    subheaderColor: 'egg',
  },
]

function AnimationFile() {
  const [animationData, setAnimationData] = useState<object>()
  const [segmentsEnabled] = useState<boolean>(true)
  const [loopCount, setLoopCount] = useState<number>(0)
  const [segments, setSegments] = useState([0, 95])
  const lottieRef = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      import('@data/lottie_patterns/Patterns_Master.json').then(setAnimationData)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  function getLoopVal() {
    setLoopCount((prev) => prev + 1)
    // Example logic: If loopCount >= 0, jump to a different segment range
    if (loopCount >= 0) {
      setSegments([24, 95])
    }
  }

  if (!animationData) {
    return (
      <div className='absolute top-0 left-0 w-full h-full transition-all duration-700'>
        <div className='relative flex flex-col self-center justify-center w-full h-full text-center'>
          <span className='text-lg font-semibold transition-all duration-700 text-wine'>
            Loading...
          </span>
        </div>
      </div>
    )
  }

  return (
    <LottieLight
      rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
      ref={lottieRef}
      loop
      play
      animationData={animationData}
      segments={segmentsEnabled ? segments : undefined}
      style={{
        alignSelf: 'center',
        width: '100%',
        height: '100%',
      }}
      useSubframes
      onLoopComplete={getLoopVal}
    />
  )
}

export default AnimationFile
