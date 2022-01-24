import React from 'react'
import Lottie from 'react-lottie-player'

import classNames from 'classnames'

import Pattern from '../../data/Patterns_Blue.json'

import PropTypes from 'prop-types'
import H1 from '../H1'

PageHeader_VariableHeight.propTypes = {
  header: PropTypes.string,
  subheader: PropTypes.string,
  thisPatern: PropTypes.object,
}

// Local Variables

const primaryColor = 'blue'
const accentColor = 'blue-dark'
const subheaderColor = 'cream'

const thisPatern = Pattern
const playFrames = [
  [0, 23],
  [24, 95],
]

function PageHeader_VariableHeight({ header, subheader }) {
  function Pattern({ thisPatern }) {
    return (
      <Lottie
        animationData={thisPatern}
        loop
        segments={playFrames as any}
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
        <Pattern thisPatern={thisPatern} />
      </div>
      <div className='relative py-16 my-20 h-full flex flex-col justify-center bg-transparent '>
        <div
          className={classNames(
            'my-20 max-w-xs  sm:max-w-md md:max-w-lg lg:max-w-3xl py-12 flex justify-center ',
            [`bg-${primaryColor}`],
          )}
        >
          <div className='w-fit px-6'>
            <H1 color={accentColor}>{header}</H1>
            <div className={classNames('my-2 text-2xl font-bold', [`text-${subheaderColor}`])}>
              {subheader}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default PageHeader_VariableHeight
