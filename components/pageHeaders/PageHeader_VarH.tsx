import { useState } from 'react'
import dynamic from 'next/dynamic'
import PropTypes from 'prop-types'
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

interface PageHeader_VarH {
  header: string
  subheader: string
}

const Blue = ({ header, subheader }: PageHeader_VarH) => {
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
const Blue_Dark = ({ header, subheader }: PageHeader_VarH) => {
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
const Cream = ({ header, subheader }: PageHeader_VarH) => {
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
const Pink = ({ header, subheader }: PageHeader_VarH) => {
  // const PageHeader_VarH_Content = dynamic(() => import('./PageHeader_VarH_Content'), { ssr: true })
  return (
    <PageHeader_VarH_Content
      animationData={Patterns_Pink}
      primaryColor={'pink'}
      subheaderColor={'pink-light '}
      subheader={subheader}
      header={header}
      accentColor={'pink-light'}
    />
  )
}
const Pink_Light = ({ header, subheader }: PageHeader_VarH) => {
  // const PageHeader_VarH_Content = dynamic(() => import('./PageHeader_VarH_Content'), { ssr: true })
  return (
    <PageHeader_VarH_Content
      animationData={Patterns_Pink_Light}
      primaryColor={'pink-light'}
      subheaderColor={'blue-dark'}
      subheader={subheader}
      header={header}
      accentColor={'pink'}
    />
  )
}
const Peach = ({ header, subheader }: PageHeader_VarH) => {
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

function PageHeader_VarH({ header, subheader }: PageHeader_VarH) {
  const [arr] = useState([
    <Blue header={header} subheader={subheader} />,
    <Blue_Dark header={header} subheader={subheader} />,
    <Pink header={header} subheader={subheader} />,
    <Pink_Light header={header} subheader={subheader} />,
    <Cream header={header} subheader={subheader} />,
    <Peach header={header} subheader={subheader} />,
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
