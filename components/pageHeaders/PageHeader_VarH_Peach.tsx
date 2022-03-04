import Lottie from 'react-lottie-player'
import classNames from 'classnames'
import Pattern from '@data/Patterns_Peach.json'
import PropTypes from 'prop-types'
import H1 from 'components/typography/H1'

PageHeader_VariableHeight.propTypes = {
  header: PropTypes.string,
  subheader: PropTypes.string,
  pattern1: PropTypes.object,
}

// Local Variables

const primaryColor = 'peach'
const accentColor = 'egg'
const subheaderColor = 'egg'

const pattern1 = Pattern

function PageHeader_VariableHeight({ header, subheader }) {
  const playFrames: [number, number][] = [
    [0, 23],
    [24, 95],
  ]
  function Pattern({ pattern1 }) {
    return (
      <Lottie
        animationData={pattern1}
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
        <Pattern pattern1={pattern1} />
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
