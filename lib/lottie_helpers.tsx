import Lead from '@typography/Lead'
import { useState, useEffect } from 'react'
import Lottie from 'react-lottie-player'

export const Lottie_Animation = () => {
  const [animationData_Animation, setAnimationData] = useState(null)
  useEffect(() => {
    import('@data/lottie_services/lottie_services_animation.json').then(setAnimationData)
  }, [])

  if (!animationData_Animation)
    return (
      <div className='w-full h-full flex flex-col justify-center'>
        <Lead color='cream' className='self-center text-center'>
          Loading
        </Lead>
      </div>
    )
  return (
    <Lottie
      animationData={animationData_Animation}
      loop
      play
      rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
    />
  )
}

export const Lottie_EmergingMedia = () => {
  const [animationData_EmergingMedia, setAnimationData] = useState(null)
  useEffect(() => {
    import('@data/lottie_services/lottie_services_emergingMedia.json').then(setAnimationData)
  }, [])

  if (!animationData_EmergingMedia)
    return (
      <div className='w-full h-full flex flex-col justify-center'>
        <Lead color='cream' className='self-center text-center'>
          Loading
        </Lead>
      </div>
    )
  return (
    <Lottie
      animationData={animationData_EmergingMedia}
      loop
      play
      rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
    />
  )
}

export const Lottie_VideoProduction = () => {
  const [animationData_Video, setAnimationData] = useState(null)
  useEffect(() => {
    import('@data/lottie_services/lottie_services_videoProduction.json').then(setAnimationData)
  }, [])

  if (!animationData_Video)
    return (
      <div className='w-full h-full flex flex-col justify-center'>
        <Lead color='cream' className='self-center text-center'>
          Loading
        </Lead>
      </div>
    )
  return (
    <Lottie
      animationData={animationData_Video}
      loop
      play
      rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
    />
  )
}

export const Lottie_Marq_MarchingSoldiers = () => {
  const [animationData_Video, setAnimationData] = useState(null)
  useEffect(() => {
    import('@data/lottie/Marq_Lottie_MarchingSoldiers.json').then(setAnimationData)
  }, [])

  if (!animationData_Video)
    return (
      <div className='w-full h-full flex flex-col justify-center'>
        <Lead color='cream' className='self-center text-center'>
          Loading
        </Lead>
      </div>
    )
  return (
    <Lottie
      animationData={animationData_Video}
      loop
      play
      rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
    />
  )
}

export const Lottie_Marq_FloatingUnicorn = () => {
  const [animationData_Video, setAnimationData] = useState(null)
  useEffect(() => {
    import('@data/lottie/Marq_Lottie_FloatingUnicorn.json').then(setAnimationData)
  }, [])

  if (!animationData_Video)
    return (
      <div className='w-full h-full flex flex-col justify-center'>
        <Lead color='cream' className='self-center text-center'>
          Loading
        </Lead>
      </div>
    )
  return (
    <Lottie
      animationData={animationData_Video}
      loop
      play
      rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
    />
  )
}
