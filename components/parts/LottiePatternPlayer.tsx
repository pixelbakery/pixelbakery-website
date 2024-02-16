/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react'

import dynamic from 'next/dynamic'
const LottieLight = dynamic(() => import('react-lottie-player/dist/LottiePlayerLight'), {
  ssr: false,
})

function AnimationFile() {
  const [animationData, setAnimationData] = useState<object>()
  const [segmentsEnabled, setSegmentsEnabled] = useState<boolean>(true)
  const [loopCount, setLoopCount] = useState<number>(0)
  const [segments, setSegments] = useState([0, 95])

  const lottieRef = useRef()
  useEffect(() => {
    setTimeout(() => {
      import('@data/lottie_patterns/Patterns_Master.json').then(setAnimationData)
    }, 1000)
  }, [])

  function getLoopVal() {
    setLoopCount(loopCount + 1)
    if (loopCount >= 0) {
      setSegments([24, 95])
    } else return
  }
  if (!animationData)
    return (
      <div className='absolute top-0 left-0 w-full h-full transition-all duration-700'>
        <div className='relative flex flex-col w-full h-full justify-center text-center self-center'>
          <span className='text-lg text-wine font-semibold transition-all duration-700'>
            Loading...
          </span>
        </div>
      </div>
    )
  return (
    <LottieLight
      rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
      ref={lottieRef}
      loop={true}
      play={true}
      animationData={animationData}
      segments={segmentsEnabled && segments}
      style={{
        alignSelf: 'center',
        width: '100%',
        height: '100%',
      }}
      useSubframes={true}
      onLoopComplete={() => getLoopVal()}
    />
  )
}

export default AnimationFile
