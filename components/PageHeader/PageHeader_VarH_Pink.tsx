import React from 'react'
import Lottie from 'react-lottie-player'

import classNames from 'classnames'

import Pattern from '../../data/Patterns_Pink.json'

import PropTypes from 'prop-types'

PageHeader_VariableHeight.propTypes = {
  header: PropTypes.string,
  subheader: PropTypes.string,
  pattern2: PropTypes.object,
}

// Local Variables

const primaryColor2 = 'pink'
const accentColor2 = 'pink-light'
const subheaderColor2 = 'cream text-opacity-75'

const pattern2 = Pattern
const playFrames = [
  [0, 23],
  [24, 95],
]

function PageHeader_VariableHeight({ header, subheader }) {
  function Pattern({ pattern2 }) {
    return (
      <Lottie
        animationData={pattern2}
        loop
        segments={playFrames}
        play
        rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
        style={{ height: '100%' }}
      />
    )
  }

  return (
    <section
      className={classNames('relative overflow-hidden lander-variableHeight my-4', [
        `bg-${accentColor2}`,
      ])}
      id='topOfPage'
    >
      <div className=' z-0 absolute  top-0 left-0 w-full h-full overflow-hidden lottie' id='lottie'>
        <Pattern pattern2={pattern2} />
      </div>
      <div className='relative py-16 my-20 h-full flex flex-col justify-center bg-transparent '>
        <div
          className={classNames(
            'my-20 max-w-xs  sm:max-w-md md:max-w-lg lg:max-w-3xl py-12 flex justify-center ',
            [`bg-${primaryColor2}`],
          )}
        >
          <div className='w-fit px-6'>
            <h1
              className={classNames('leading-none mb-0 pb-0 text-6xl lg:text-7xl', [
                `text-${accentColor2}`,
              ])}
            >
              {header}
            </h1>
            <div className={classNames('my-2 text-2xl font-bold', [`text-${subheaderColor2}`])}>
              {subheader}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default PageHeader_VariableHeight