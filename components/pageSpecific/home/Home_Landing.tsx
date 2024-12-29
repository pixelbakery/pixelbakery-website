// components/pageSpecific/home/Home_Landing.tsx
import dynamic from 'next/dynamic'
import Home_Landing_SideNav from './Home_Landing_SideNav'

const DecemberPlayer = dynamic(() => import('./Home_Landing_December'), { ssr: false })
const NormalPlayer = dynamic(() => import('./Home_Landing_Normal'), { ssr: false })

interface Props {
  dynamicAnimation: string
}

export default function Home_Landing({ dynamicAnimation }: Props) {
  const isDecember = dynamicAnimation === 'december'

  return (
    <section className='flex w-full my-4 overflow-hidden lander'>
      <Home_Landing_SideNav />

      <div className='relative flex-grow h-full bg-blue player-wrapper'>
        {isDecember ? <DecemberPlayer /> : <NormalPlayer />}
      </div>
    </section>
  )
}
