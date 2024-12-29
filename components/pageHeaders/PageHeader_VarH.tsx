// components/pageHeaders/PageHeader_VarH.tsx
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import { useMemo } from 'react'
import cn from 'classnames'

import patternsMaster from 'public/lottie/Patterns_Master.json'

import PageHeader_TextBox from '@pageHeaders/PageHeader_TextBox'
import { backgroundColorVariant, TextColorVariant } from '@lib/colorHelper'

const LottieLight = dynamic(() => import('react-lottie-player/dist/LottiePlayerLight'), {
  ssr: false,
})

export interface Theme {
  id: string
  objectColor: string
  backgroundColor: backgroundColorVariant
  textboxColor: string
  headerColor: TextColorVariant
  subheaderColor: TextColorVariant
}

interface HeaderThemeProps {
  header: string
  subheader: string
  theme?: Theme
}

const themes: Theme[] = [
  {
    id: '1',
    objectColor: 'blue',
    backgroundColor: 'blue-dark',
    textboxColor: 'blue',
    headerColor: 'blue-dark',
    subheaderColor: 'blue',
  },
  {
    id: '2',
    objectColor: 'blue-dark',
    backgroundColor: 'blue',
    textboxColor: 'blue-dark',
    headerColor: 'blue',
    subheaderColor: 'blue-dark',
  },
  {
    id: '3',
    objectColor: 'cream',
    backgroundColor: 'peach',
    textboxColor: 'cream',
    headerColor: 'peach',
    subheaderColor: 'blue-dark',
  },
  {
    id: '4',
    objectColor: 'pink',
    backgroundColor: 'pink-lighter',
    textboxColor: 'pink',
    headerColor: 'pink-lighter',
    subheaderColor: 'pink-lighter',
  },
  {
    id: '5',
    objectColor: 'pink-lighter',
    backgroundColor: 'pink',
    textboxColor: 'pink-lighter',
    headerColor: 'pink',
    subheaderColor: 'blue-dark',
  },
  {
    id: '6',
    objectColor: 'peach',
    backgroundColor: 'egg',
    textboxColor: 'peach',
    headerColor: 'egg',
    subheaderColor: 'egg',
  },
]

export default function LottieBg({ header, subheader }: HeaderThemeProps) {
  const [animationData, setAnimationData] = useState<object | null>(null)
  const [colorData, setColorData] = useState<Theme | null>(null)
  const [segmentsEnabled] = useState<boolean>(true)
  const [loopCount, setLoopCount] = useState<number>(0)
  const [segments, setSegments] = useState<[number, number]>([0, 94])

  const hoverAnimations = useMemo(() => {
    const animations = patternsMaster
    return animations
  }, [])

  const color = useMemo(() => {
    const colors = themes
    setColorData(colors[Math.floor(Math.random() * colors.length)])
    return colors[Math.floor(Math.random() * colors.length)]
  }, [])

  useEffect(() => {
    // Ensure this code only runs in the browser
    if (typeof window !== 'undefined') {
      // Dynamically import the animation JSON
      import('@data/lottie_patterns/Patterns_Master.json').then(setAnimationData)
    }
  }, [])
  function getLoopVal() {
    setLoopCount((prev) => prev + 1)

    if (loopCount >= 0) {
      setSegments([25, 94])
    }
  }

  if (!animationData) {
    return (
      <div className='relative flex flex-col self-center justify-center w-full h-full text-center lander-variableHeight bg-cream'>
        <h1 className='sr-only'>{header}</h1>
        <span className='text-lg font-semibold transition-all duration-700 text-wine'>
          Loading...
        </span>
      </div>
    )
  }
  // Once we have a theme, render as usual
  return (
    <header
      className={cn(
        'relative my-4 overflow-hidden lander-variableHeight',
        `bg-${colorData?.backgroundColor}`,
      )}
    >
      <PageHeader_TextBox
        backgroundColor={`${colorData?.textboxColor}` as backgroundColorVariant}
        header={`${header}`}
        headerColor={`${colorData?.headerColor}` as TextColorVariant}
        subheader={`${subheader}`}
        subheaderColor={`${colorData?.subheaderColor}` as TextColorVariant}
        loading={false}
      />
      <div
        className={`z-0 absolute top-0 left-0 w-full h-full overflow-hidden lottie lottie-${colorData?.objectColor}`}
      >
        <LottieLight
          loop
          play
          onLoopComplete={getLoopVal}
          segments={segmentsEnabled ? segments : undefined}
          animationData={hoverAnimations}
          style={{ width: '100%', height: '100%' }}
          rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
          className={cn(`lottie-${colorData} `)}
        />
      </div>
    </header>
  )
}
