import { useState } from 'react'
import dynamic from 'next/dynamic'
import PropTypes from 'prop-types'

function randomize(myArray) {
  return myArray[Math.floor(Math.random() * myArray.length)]
}
PageHeader_VarH.propTypes = {
  header: PropTypes.string,
  subheader: PropTypes.string,
  playFrames: PropTypes.array,
}
const Blue = ({ header, subheader }) => {
  const PageHeader_VarH_Test = dynamic(() => import('./PageHeader_VarH_Test'), { ssr: false })

  return (
    <PageHeader_VarH_Test
      animationData={require('@data/Patterns_Blue.json')}
      primaryColor={'blue'}
      accentColor={'blue-dark'}
      subheaderColor={'cream'}
      header={header}
      subheader={subheader}
    />
  )
}
const Blue_Dark = ({ header, subheader }) => {
  const PageHeader_VarH_Test = dynamic(() => import('./PageHeader_VarH_Test'), { ssr: true })
  return (
    <PageHeader_VarH_Test
      animationData={require('@data/Patterns_Blue_Dark.json')}
      primaryColor={'blue-dark'}
      accentColor={'blue'}
      subheaderColor={'cream'}
      subheader={subheader}
      header={header}
    />
  )
}
const Cream = ({ header, subheader }) => {
  const PageHeader_VarH_Test = dynamic(() => import('./PageHeader_VarH_Test'), { ssr: true })
  return (
    <PageHeader_VarH_Test
      animationData={require('@data/Patterns_Cream.json')}
      primaryColor={'cream'}
      accentColor={'peach'}
      subheaderColor={'wine'}
      subheader={subheader}
      header={header}
    />
  )
}
const Pink = ({ header, subheader }) => {
  const PageHeader_VarH_Test = dynamic(() => import('./PageHeader_VarH_Test'), { ssr: true })
  return (
    <PageHeader_VarH_Test
      animationData={require('@data/Patterns_Pink.json')}
      primaryColor={'pink'}
      accentColor={'pink-light'}
      subheaderColor={'cream text-opacity-75'}
      subheader={subheader}
      header={header}
    />
  )
}
const Pink_Light = ({ header, subheader }) => {
  const PageHeader_VarH_Test = dynamic(() => import('./PageHeader_VarH_Test'), { ssr: true })
  return (
    <PageHeader_VarH_Test
      animationData={require('@data/Patterns_Pink_Light.json')}
      primaryColor={'pink-light'}
      accentColor={'pink'}
      subheaderColor={'blue-dark'}
      subheader={subheader}
      header={header}
    />
  )
}
const Peach = ({ header, subheader }) => {
  const PageHeader_VarH_Test = dynamic(() => import('./PageHeader_VarH_Test'), { ssr: true })
  return (
    <PageHeader_VarH_Test
      animationData={require('@data/Patterns_Peach.json')}
      primaryColor={'peach'}
      accentColor={'egg'}
      subheaderColor={'egg'}
      subheader={subheader}
      header={header}
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
  //       <PageHeader_VarH_Test
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

  return <header className='bg-blue'>{Rand}</header>
}
export default PageHeader_VarH
