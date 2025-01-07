//  ./components/parts/LottiePlayer.tsx
/* eslint-disable no-unused-vars */
import { useState } from 'react'
import dynamic from 'next/dynamic'

const LottieLight = dynamic(() => import('react-lottie-player/dist/LottiePlayerLight'), {
  ssr: false,
})

interface Props {
  anim: any
  preserveAspectRatio?: boolean
}

// If needed, define a minimal type for the player (rendererSettings, etc.)
interface LottieLightProps {
  rendererSettings?: {
    preserveAspectRatio?: string
    [key: string]: any
  }
  animationData: any
  loop?: boolean
  play?: boolean
  // Accept either a single [start, end] pair, multiple segment pairs, or a boolean:
  segments?: [number, number] | [number, number][] | boolean
  style?: React.CSSProperties
  useSubframes?: boolean
  onLoopComplete?: () => void
}

function AnimationFile({ anim }: Props) {
  const [segments, setSegments] = useState<[number, number] | [number, number][] | undefined>([
    0, 95,
  ])
  const [segmentsEnabled, setSegmentsEnabled] = useState<boolean>(true)

  const [loopCount, setLoopCount] = useState<number>(0)

  function getLoopVal() {
    setLoopCount((prev) => prev + 1)
    // Combine the two segment pairs here
    setSegments([
      [0, 95],
      [24, 95],
    ])
  }

  if (!Animation)
    return (
      <div className='relative flex flex-col self-center justify-center w-full h-full text-center'>
        <span className='text-lg font-semibold transition-all duration-700 text-wine'>
          Loading...
        </span>
      </div>
    )

  return (
    <LottieLight
      rendererSettings={{ preserveAspectRatio: 'xMidYMid meet' }}
      loop
      play
      animationData={anim}
      // Only supply segments if they're enabled
      segments={segmentsEnabled ? segments : undefined}
      style={{ width: '100%', height: '100%' }}
      onLoopComplete={getLoopVal}
    />
  )
}

export default AnimationFile
