import { useState } from 'react'
import dynamic from 'next/dynamic'
const PageHeader_VarH_Content = dynamic(() => import('./PageHeader_VarH_Content'), {
  ssr: false,
})

import Patterns_Blue from '@data/lottie_patterns/Patterns_Blue.json' assert { type: 'json' }
import Patterns_Blue_Dark from '@data/lottie_patterns/Patterns_Blue_Dark.json' assert { type: 'json' }
import Patterns_Pink from '@data/lottie_patterns/Patterns_Pink.json' assert { type: 'json' }
import Patterns_Pink_Light from '@data/lottie_patterns/Patterns_Pink_Light.json' assert { type: 'json' }
import Patterns_Peach from '@data/lottie_patterns/Patterns_Peach.json' assert { type: 'json' }
import Patterns_Cream from '@data/lottie_patterns/Patterns_Cream.json' assert { type: 'json' }

import { RandomArrayItem } from '@lib/helpers'

interface Props {
  header: string
  subheader: string
}

const Blue = ({ header, subheader }: Props) => {
  return (
    <PageHeader_VarH_Content
      header={header}
      primaryColor={'blue'}
      accentColor={'blue-dark'}
      subheader={subheader}
      subheaderColor={'cream'}
      animationData={Patterns_Blue}
    />
  )
}
const Blue_Dark = ({ header, subheader }: Props) => {
  // const PageHeader_VarH_Content = require('./PageHeader_VarH_Content')
  return (
    <PageHeader_VarH_Content
      animationData={Patterns_Blue_Dark}
      primaryColor={'blue-dark'}
      subheaderColor={'cream'}
      subheader={subheader}
      header={header}
      accentColor={'blue'}
    />
  )
}
const Cream = ({ header, subheader }: Props) => {
  // const PageHeader_VarH_Content = dynamic(() => import('./PageHeader_VarH_Content'), { ssr: true })
  return (
    <PageHeader_VarH_Content
      animationData={Patterns_Cream}
      accentColor={'peach'}
      primaryColor={'cream'}
      subheaderColor={'blue-dark  '}
      subheader={subheader}
      header={header}
    />
  )
}
const Pink = ({ header, subheader }: Props) => {
  // const PageHeader_VarH_Content = dynamic(() => import('./PageHeader_VarH_Content'), { ssr: true })
  return (
    <PageHeader_VarH_Content
      animationData={Patterns_Pink}
      primaryColor={'pink'}
      subheaderColor={'pink-lighter '}
      subheader={subheader}
      header={header}
      accentColor={'pink-lighter'}
    />
  )
}
const Pink_Light = ({ header, subheader }: Props) => {
  // const PageHeader_VarH_Content = dynamic(() => import('./PageHeader_VarH_Content'), { ssr: true })
  return (
    <PageHeader_VarH_Content
      animationData={Patterns_Pink_Light}
      primaryColor={'pink-lighter'}
      subheaderColor={'blue-dark'}
      subheader={subheader}
      header={header}
      accentColor={'pink'}
    />
  )
}
const Peach = ({ header, subheader }: Props) => {
  return (
    <PageHeader_VarH_Content
      animationData={Patterns_Peach}
      primaryColor={'peach'}
      subheaderColor={'egg'}
      subheader={subheader}
      header={header}
      accentColor={'egg'}
    />
  )
}

function PageHeader_VarH({ header, subheader }: Props) {
  const [arr] = useState([
    <Blue header={header} subheader={subheader} key={1} />,
    <Blue_Dark header={header} subheader={subheader} key={2} />,
    <Pink header={header} subheader={subheader} key={3} />,
    <Pink_Light header={header} subheader={subheader} key={4} />,
    <Cream header={header} subheader={subheader} key={5} />,
    <Peach header={header} subheader={subheader} key={6} />,
  ])

  return (
    <header className='bg-cream relative overflow-hidden lander-variableHeight my-4'>
      {/* <div className='absolute w-full h-full flex flex-col justify-center bg-blue'>
        <p>
          <Lead color='cream' className='self-center text-center'>
            Loading...
          </Lead>
        </p>
      </div> */}
      {arr[RandomArrayItem(arr.length)]}
    </header>
  )
}
export default PageHeader_VarH
