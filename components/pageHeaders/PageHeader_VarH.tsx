import { useState } from 'react'
import dynamic from 'next/dynamic'
import PropTypes from 'prop-types'
import Lead from '@typography/Lead'
const PageHeader_VarH_Content = dynamic(() => import('./PageHeader_VarH_Content'), { ssr: false })

function randomize(myArray) {
  return myArray[Math.floor(Math.random() * myArray.length)]
}
PageHeader_VarH.propTypes = {
  header: PropTypes.string,
  subheader: PropTypes.string,
  playFrames: PropTypes.array,
}

const Blue = ({ header, subheader }) => {
  return (
    <PageHeader_VarH_Content
      header={header}
      primaryColor={'blue'}
      accentColor={'blue-dark'}
      subheader={subheader}
      subheaderColor={'cream'}
      animationData={require('@data/Patterns_Blue.json')}
    />
  )
}
const Blue_Dark = ({ header, subheader }) => {
  // const PageHeader_VarH_Content = require('./PageHeader_VarH_Content')
  return (
    <PageHeader_VarH_Content
      animationData={require('@data/Patterns_Blue_Dark.json')}
      primaryColor={'blue-dark'}
      subheaderColor={'cream'}
      subheader={subheader}
      header={header}
      accentColor={'blue'}
    />
  )
}
const Cream = ({ header, subheader }) => {
  // const PageHeader_VarH_Content = dynamic(() => import('./PageHeader_VarH_Content'), { ssr: true })
  return (
    <PageHeader_VarH_Content
      animationData={require('@data/Patterns_Cream.json')}
      accentColor={'peach'}
      primaryColor={'cream'}
      subheaderColor={'blue-dark  '}
      subheader={subheader}
      header={header}
    />
  )
}
const Pink = ({ header, subheader }) => {
  // const PageHeader_VarH_Content = dynamic(() => import('./PageHeader_VarH_Content'), { ssr: true })
  return (
    <PageHeader_VarH_Content
      animationData={require('@data/Patterns_Pink.json')}
      primaryColor={'pink'}
      subheaderColor={'pink-light '}
      subheader={subheader}
      header={header}
      accentColor={'pink-light'}
    />
  )
}
const Pink_Light = ({ header, subheader }) => {
  // const PageHeader_VarH_Content = dynamic(() => import('./PageHeader_VarH_Content'), { ssr: true })
  return (
    <PageHeader_VarH_Content
      animationData={require('@data/Patterns_Pink_Light.json')}
      primaryColor={'pink-light'}
      subheaderColor={'blue-dark'}
      subheader={subheader}
      header={header}
      accentColor={'pink'}
    />
  )
}
const Peach = ({ header, subheader }) => {
  return (
    <PageHeader_VarH_Content
      animationData={require('@data/Patterns_Peach.json')}
      primaryColor={'peach'}
      subheaderColor={'egg'}
      subheader={subheader}
      header={header}
      accentColor={'egg'}
    />
  )
}

function PageHeader_VarH({ header, subheader }) {
  const [arr] = useState([
    <Blue header={header} subheader={subheader} />,
    <Blue_Dark header={header} subheader={subheader} />,
    <Pink header={header} subheader={subheader} />,
    <Pink_Light header={header} subheader={subheader} />,
    <Cream header={header} subheader={subheader} />,
    <Peach header={header} subheader={subheader} />,
  ])
  const [Rand] = useState(randomize(arr))
  // PageHeader_VarH_Pink,
  // PageHeader_VarH_Pink_Light,
  // PageHeader_VarH_Blue,
  // PageHeader_VarH_Blue_Dark,
  // PageHeader_VarH_Cream,

  // useEffect(() => {
  //   if (element.current) {
  //     setRandomNumber(Math.floor(Math.random() * patterns.length))
  //     console.log(randomNumber)

  //     element.current = (
  //       <PageHeader_VarH_Content
  //         animationData={patterns[0].pattern}
  //         header={header}
  //         subheader={subheader}
  //         primaryColor={patterns[0].primaryColor}
  //         accentColor={patterns[0].accentColor}
  //         subheaderColor={patterns[0].subheaderColor}
  //       />
  //     )
  //   }
  //   return () => {
  //     element.current = null
  //   }
  // }, [patterns])

  // const ThisPattern = patterns[randomNumber]

  return (
    <header className='bg-cream relative overflow-hidden lander-variableHeight my-4'>
      <div className='absolute w-full h-full flex flex-col justify-center bg-blue'>
        <Lead color='cream' className='self-center text-center'>
          Loading...
        </Lead>
      </div>
      {Rand}
    </header>
  )
}
export default PageHeader_VarH
