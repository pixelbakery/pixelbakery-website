import Lottie from 'react-lottie-player'
// import VarHPattern from '@data/Patterns_Blue_Dark.json'
import { useState, useEffect } from 'react'

export default function Pattern() {
  const playFrames: [number, number][] = [
    [0, 23],
    [24, 95],
  ]

  const LottieAnimation = () => {
    const [animationData, setAnimationData] = useState(null)

    useEffect(() => {
      import('@data/Patterns_Blue_Dark.json').then(setAnimationData)
    }, [])

    if (!animationData) return <div>Loading...</div>
    return (
      <Lottie
        animationData={animationData}
        segments={playFrames as any}
        loop
        play
        rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
        style={{ height: '100%' }}
      />
    )
  }

  return <LottieAnimation />
}
