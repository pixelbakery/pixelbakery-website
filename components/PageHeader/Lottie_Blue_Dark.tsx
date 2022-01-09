import React from 'react'
import Lottie from 'react-lottie-player'
import VarHPattern from '../../data/Patterns_Blue_Dark.json'

const thisPatern = VarHPattern
const playFrames = [
  [0, 23],
  [24, 95],
]
export default function Pattern() {
  return (
    <Lottie
      animationData={thisPatern}
      loop
      segments={playFrames}
      play
      rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
      style={{ height: '100%' }}
    />
  )
}
