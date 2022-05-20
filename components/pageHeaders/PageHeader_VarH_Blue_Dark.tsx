import Lottie from 'react-lottie-player'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import PageHeader_TextBox from '@pageHeaders/PageHeader_TextBox'
import { useState, useEffect } from 'react'
import Lead from '@typography/Lead'

PageHeader_VariableHeight.propTypes = {
  header: PropTypes.string,
  subheader: PropTypes.string,
  thisPatern: PropTypes.object,
}

function PageHeader_VariableHeight({ header, subheader }) {
  // Local Variables
  const primaryColor = 'blue-dark'
  const accentColor = 'blue'
  const subheaderColor = 'cream'
  const playFrames: [number, number][] = [
    [0, 23],
    [24, 95],
  ]
  const LottieAnimation = () => {
    const [animationData, setAnimationData] = useState(null)

    useEffect(() => {
      import('@data/Patterns_Blue_Dark.json').then(setAnimationData)
    }, [])

    if (!animationData)
      return (
        <div className='w-full h-full flex flex-col justify-center'>
          <Lead color='cream' className='self-center text-center'>
            Loading
          </Lead>
        </div>
      )
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
