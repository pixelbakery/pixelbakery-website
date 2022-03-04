import Lottie from 'react-lottie-player'
import VarHPattern from '@data/Patterns_Blue_Dark.json'

export default function Pattern() {
  const playFrames: [number, number][] = [
    [0, 23],
    [24, 95],
  ]
  return (
    <Lottie
      animationData={VarHPattern}
      loop
      segments={playFrames as any}
      play
      rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
      style={{ height: '100%' }}
    />
  )
}
