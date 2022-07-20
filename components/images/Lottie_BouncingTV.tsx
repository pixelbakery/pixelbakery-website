import { useState, useEffect } from 'react'
import Lottie from 'react-lottie-player'

function Lottie_bouncingTV() {
  const [animationData, setAnimationData] = useState(null)
  useEffect(() => {
    import('@data/Lottie_bouncingTV.json').then(setAnimationData)
  }, [])

  if (!animationData) return <></>
  return (
    <>
      <Lottie animationData={animationData} loop play style={{ height: '100%' }} />
    </>
  )
}

export default Lottie_bouncingTV
