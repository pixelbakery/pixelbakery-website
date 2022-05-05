import Lottie from 'react-lottie-player'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import PageHeader_TextBox from './PageHeader_TextBox'
import { useState, useEffect } from 'react'

PageHeader_VariableHeight.propTypes = {
  header: PropTypes.string,
  subheader: PropTypes.string,
  pattern3: PropTypes.object,
}

// Local Variables

const primaryColor = 'pink-light'
const accentColor = 'pink'
const subheaderColor = 'blue-dark '

function PageHeader_VariableHeight({ header, subheader }) {
  const playFrames: [number, number][] = [
    [0, 23],
    [24, 95],
  ]
  const LottieAnimation = () => {
    const [animationData, setAnimationData] = useState(null)

    useEffect(() => {
      import('@data/Patterns_Pink_Light.json').then(setAnimationData)
    }, [])

    if (!animationData) return <div>Loading...</div>
    return (
      <Lottie
        animationData={animationData}
        segments={playFrames as any}
        loop
        play
        rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
        style={{ height: '100%' }}
      />
    )
  }

  return (
    <div
      className={classNames('relative overflow-hidden lander-variableHeight my-4', [
        `bg-${accentColor}`,
      ])}
      id='topOfPage'
    >
      <div className=' z-0 absolute  top-0 left-0 w-full h-full overflow-hidden lottie' id='lottie'>
        <LottieAnimation />
      </div>
      <PageHeader_TextBox
        header={header}
        primaryColor={primaryColor}
        accentColor={accentColor}
        subheader={subheader}
        subheaderColor={subheaderColor}
      />
    </div>
  )
}
export default PageHeader_VariableHeight
