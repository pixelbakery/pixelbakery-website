// components/pageSpecific/home/Home_Landing_Normal.tsx
import dynamic from 'next/dynamic'
import { useState } from 'react'
import patternsMaster from 'public/lottie/Patterns_Master.json'
import PixelBakery_EasyBakeOven from '@data/lottie_misc/PixelBakery_EasyBakeOven.json'

const LottieLight = dynamic(() => import('react-lottie-player/dist/LottiePlayerLight'), {
  ssr: false,
})

export default function Home_Landing_Normal() {
  const [segments, setSegments] = useState<[number, number]>([1, 93])
  const [segmentsEnabled] = useState<boolean>(true)
  const [loopCount, setLoopCount] = useState<number>(0)

  function getLoopVal() {
    setLoopCount((prev) => prev + 1)

    if (loopCount >= 0) {
      setSegments([26, 93])
    }
  }

  // Minimal normal logic
  return (
    <div className='relative flex-grow h-full overflow-hidden bg-blue player-wrapper'>
      <div className='absolute top-0 left-0 z-0 w-full h-full overflow-hidden' id='lottie'>
        <LottieLight
          loop
          play
          segments={segmentsEnabled ? segments : undefined}
          onLoopComplete={getLoopVal}
          animationData={patternsMaster}
          style={{ width: '100%', height: '100%' }}
          className='lottie-blue-dark'
          rendererSettings={{ preserveAspectRatio: 'xMaxYMin slice' }}
        />
      </div>
      <div className='flex justify-center w-full h-full '>
        <div className='self-center block w-2/3 max-w-3xl lg:w-1/2 '>
          <LottieLight
            loop
            play
            animationData={PixelBakery_EasyBakeOven}
            style={{ width: '100%', height: '100%' }}
            rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
          />
        </div>
      </div>
    </div>
  )
}
