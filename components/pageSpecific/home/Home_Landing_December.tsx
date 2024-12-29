// components/pageSpecific/home/Home_Landing_December.tsx
import dynamic from 'next/dynamic'
import { useMemo } from 'react'
import patternsMasterMobile from 'public/lottie/patterns_december_mobile.json' assert { type: 'json' }
import patternsWreath from 'public/lottie/wreath_3x4.json' assert { type: 'json' }
import patternsBell from 'public/lottie/bell_2x2.json' assert { type: 'json' }
import patternsCandle from 'public/lottie/candle_2x2.json' assert { type: 'json' }
// import patternsCandycane from 'public/lottie/candycane_4x2.json' assert { type: 'json' }
import patternsCups from 'public/lottie/cups_4x2.json' assert { type: 'json' }
// import patternsJello from 'public/lottie/jello_2x4.json' assert { type: 'json' }
import patternsLogo from 'public/lottie/logo_3x2.json' assert { type: 'json' }
import patternsOven from 'public/lottie/oven_3x2.json' assert { type: 'json' }
import patternsPresent from 'public/lottie/present_1x2.json' assert { type: 'json' }
import patternsSled from 'public/lottie/sled_4x2.json' assert { type: 'json' }
import patternsSnowman from 'public/lottie/snowman_2x2.json' assert { type: 'json' }
// import patternsWindow from 'public/lottie/window_3x2.json' assert { type: 'json' }

const LottieLight = dynamic(() => import('react-lottie-player/dist/LottiePlayerLight'), {
  ssr: false,
})

export default function Home_Landing_December() {
  const animations = useMemo(() => {
    return {
      mobile: patternsMasterMobile,
      wreath: patternsWreath,
      bell: patternsBell,
      candle: patternsCandle,
      cups: patternsCups,
      logo: patternsLogo,
      oven: patternsOven,
      present: patternsPresent,
      sled: patternsSled,
      snowman: patternsSnowman,
      // window: patternsWindow,
      // jello: patternsJello,
      // candycane: patternsCandycane,
    }
  }, [])
  const LottiePlayer = ({ anim, renderSettings = 'xMidYMin slice' }: any) => {
    return (
      <LottieLight
        animationData={anim}
        loop
        play
        rendererSettings={{ preserveAspectRatio: renderSettings }}
        style={{ width: '100%', height: '100%' }}
      />
    )
  }
  if (!animations) {
    return (
      <div
        className='absolute top-0 left-0 w-full h-full transition-all duration-700 bg-cream'
        id='loading-december'
      >
        <div className='relative flex flex-col self-center justify-center w-full h-full text-center'>
          <h1 className='sr-only'>Pixel Bakery Design Studio – Home</h1>
          <span className='text-lg font-semibold transition-all duration-700 text-wine'>
            Loading...
          </span>
        </div>
      </div>
    )
  }
  return (
    <div
      className='items-center justify-center w-full h-full overflow-hidden md:w-3/5 player-wrapper grow'
      id='header-december'
    >
      <div className='grid w-full h-full grid-cols-5 grid-rows-3 p-0 bg-gray-200 xl:grid-cols-7 2xl:grid-cols-8 xl:grid-rows-3 sm:gap-2'>
        <div className='flex items-center justify-center col-span-5 row-span-3 bg-pink-200 bg-egg sm:hidden'>
          <LottiePlayer anim={animations.mobile} renderSettings={'xMidYMin slice'} />
        </div>
        <div className='items-center justify-center hidden col-span-2 row-span-1 xl:col-span-2 xl:order-6 sm:flex'>
          {/* bell */}
          <LottiePlayer anim={animations.bell} renderSettings={'xMidYMid slice'} />
        </div>
        <div className='items-center justify-center order-2 hidden col-span-3 row-span-1 xl:col-span-4 xl:flex'>
          {/* cups */}
          <LottiePlayer anim={animations.cups} renderSettings={'xMidYMid slice'} />
        </div>
        <div className='items-center justify-center hidden col-span-3 row-span-2 xl:col-span-3 bg-pink-lighter sm:flex xl:order-3'>
          {/* wreath */}
          <LottiePlayer anim={animations.wreath} renderSettings={'xMidYMid slice'} />
        </div>
        <div className='items-center justify-center hidden col-span-2 row-span-1 sm:flex xl:col-span-1 2xl:col-span-2 xl:order-5'>
          {/* snowman */}
          <LottiePlayer anim={animations.snowman} renderSettings={'xMidYMid slice'} />
        </div>
        <div className='items-center justify-center hidden col-span-4 row-span-1 md:col-span-3 lg:hidden bg-pink-lighter sm:flex'>
          {/* logo */}
          <LottiePlayer anim={animations.logo} renderSettings={'xMidYMin slice'} />
        </div>
        <div className='items-center justify-center hidden col-span-1 row-span-1 md:hidden bg-pink-lighter sm:flex 2xl:flex lg:order-0'>
          {/* present */}
          <LottiePlayer anim={animations.present} renderSettings={'xMidYMid slice'} />
        </div>
        <div className='items-center justify-center hidden col-span-2 row-span-1 md:flex bg-pink-lighter xl:col-span-2 lg:order-5 xl:order-7'>
          {/* candle */}
          <LottiePlayer anim={animations.candle} renderSettings={'xMidYMid slice'} />
        </div>
        <div className='items-center justify-center hidden col-span-3 row-span-1 xl:col-span-3 bg-pink-lighter xl:flex xl:order-4'>
          {/* oven */}
          <LottiePlayer anim={animations.oven} renderSettings={'xMidYMid slice'} />
        </div>
        <div className='items-center justify-center hidden col-span-3 row-span-1 2xl:col-span-4 bg-pink-lighter lg:flex lg:order-4 xl:order-6'>
          {/* sled */}
          <LottiePlayer anim={animations.sled} renderSettings={'xMidYMid slice'} />
        </div>
      </div>
    </div>
  )
}
