import React from 'react'
import Lottie from 'react-lottie-player'
import classNames from 'classnames'
import Patterns_Peach from '../data/Patterns_Peach.json'
import Patterns_Yellow from '../data/Patterns_Yellow.json'
import Patterns_Cream from '../data/Patterns_Cream.json'
import Patterns_Wine from '../data/Patterns_Wine.json'
import Patterns_Pink from '../data/Patterns_Pink.json'
import Patterns_Pink_Light from '../data/Patterns_Pink_Light.json'
import Patterns_Blue_Dark from '../data/Patterns_Blue_Dark.json'
import Patterns_Blue from '../data/Patterns_Blue.json'
import Patterns_Blue_Light from '../data/Patterns_Blue_Light.json'
import PropTypes from 'prop-types'
PageHeader_VariableHeight.propTypes = {
  header: PropTypes.string,
  subheader: PropTypes.string,
}

const playFrames = [
  [0, 23],
  [24, 95],
]
const PatternPeach = ({ pattern }) => {
  return (
    <Lottie
      animationData={pattern}
      loop
      segments={playFrames}
      play
      rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
      style={{ height: '100%' }}
    />
  )
}

function PageHeader_VariableHeight({ header, subheader }) {
  const setPattern = Math.floor(Math.random() * 3)

  let headerClass = 'leading-none mb-0 pb-0 text-6xl lg:text-7xl'
  let sectionClass = 'relative overflow-hidden lander-variableHeight my-4'
  let textBoxClass =
    'my-20 max-w-xs  sm:max-w-md md:max-w-lg lg:max-w-3xl py-12 flex justify-center '
  let subheaderClass = 'my-2 text-2xl font-bold'
  let pattern, color, accentColor, subheaderColor

  if (setPattern === 0) {
    pattern = Patterns_Peach
    // color = 'peach'
    // accentColor = 'blue-dark'
    // subheaderColor = 'cream'
  } else if (setPattern === 1) {
    pattern = Patterns_Blue_Dark
    // color = 'blue-dark'
    // accentColor = 'blue-light'
    // subheaderColor = 'blue-dark'
  } else if (setPattern === 2) {
    pattern = Patterns_Pink
    // color = 'pink'
    // accentColor = 'pink-light'
    // subheaderColor = 'blue-dark'
  }

  // headerClass = classNames(headerClass, {
  //   [`text-${  accentColor}`]: true,
  // })

  // sectionClass = classNames(sectionClass, {
  //   [`bg-${accentColor}`]: true,
  // })
  // textBoxClass = classNames(textBoxClass, {
  //   [`bg-${color}`]: true,
  // })
  subheaderClass = classNames(subheaderClass, {
    [`text-${subheaderColor}`]: true,
  })

  return (
    <main>
      <section
        className={classNames(sectionClass, {
          ['bg-pink-light']: pattern === Patterns_Pink,
          ['bg-blue-dark']: pattern === Patterns_Peach,
          ['bg-blue']: pattern === Patterns_Blue_Dark,
        })}
        id='topOfPage'
      >
        <div
          className=' z-0 absolute  top-0 left-0 w-full h-full overflow-hidden lottie'
          id='lottie'
        >
          <PatternPeach pattern={pattern} />
        </div>
        <div className='relative py-16 my-20 h-full flex flex-col justify-center bg-transparent '>
          <div
            className={classNames(textBoxClass, {
              'bg-pink': pattern === Patterns_Pink,
              'bg-peach': pattern === Patterns_Peach,
              'bg-blue-dark': pattern === Patterns_Blue_Dark,
            })}
          >
            <div className='w-fit px-6'>
              <h1
                className={classNames(headerClass, {
                  ['text-pink-light']: pattern === Patterns_Pink,
                  ['text-blue-dark']: pattern === Patterns_Peach,
                  ['text-blue']: pattern === Patterns_Blue_Dark,
                })}
              >
                {header}
              </h1>
              <div className={subheaderClass}>{subheader}</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
export default PageHeader_VariableHeight
