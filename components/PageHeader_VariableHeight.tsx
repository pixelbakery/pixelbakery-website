import React from 'react'
import Lottie from 'react-lottie-player'
import Patterns_DarkBlue from '../data/patterns_darkblue.json'
import PropTypes from 'prop-types'

PageHeader_VariableHeight.propTypes = {
  header: PropTypes.string,
  subheader: PropTypes.string,
}

function PageHeader_VariableHeight({ header, subheader }) {
  const PatternBlue = () => {
    return (
      <Lottie
        loop
        animationData={Patterns_DarkBlue}
        play
        rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
        style={{ height: '100%' }}
      />
    )
  }
  return (
    <main>
      <section
        className=' bg-blue  relative overflow-hidden lander-variableHeight my-4'
        id='topOfPage'
      >
        <div
          className=' z-0 absolute  top-0 left-0 w-full h-full overflow-hidden lottie'
          id='lottie'
        >
          <PatternBlue />
        </div>

        <div className='relative py-16 my-20 h-full flex flex-col justify-center bg-transparent '>
          <div className='bg-blue-dark my-20 max-w-xs  sm:max-w-md md:max-w-lg lg:max-w-3xl text-blue py-12 flex justify-center'>
            <div className='w-fit px-6'>
              <h1 className='leading-none mb-0 pb-0 text-6xl lg:text-7xl'>{header}</h1>
              <div className=' my-2 text-2xl font-bold  text-cream'>{subheader}</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
export default PageHeader_VariableHeight
