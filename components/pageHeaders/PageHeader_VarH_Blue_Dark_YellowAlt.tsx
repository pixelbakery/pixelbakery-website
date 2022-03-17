import Lottie from 'react-lottie-player'

import classNames from 'classnames'

import Pattern from '@data/Patterns_Blue_Dark.json'

import PropTypes from 'prop-types'
import H1 from 'components/typography/H1'
import PageHeader_TextBox from './PageHeader_TextBox'

PageHeader_VariableHeight.propTypes = {
  header: PropTypes.string,
  subheader: PropTypes.string,
  pattern: PropTypes.object,
}

// Local Variables

const primaryColor = 'blue-dark'
const accentColor = 'yellow'
const subheaderColor = 'cream'

const pattern = Pattern

function PageHeader_VariableHeight({ header, subheader }) {
  const playFrames: [number, number][] = [
    [0, 23],
    [24, 95],
  ]
  function Pattern({ pattern }) {
    return (
      <Lottie
        animationData={pattern}
        loop
        segments={playFrames as any}
        play
        rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
        style={{ height: '100%' }}
      />
    )
  }

  return (
    <section
      className={classNames('relative overflow-hidden lander-variableHeight my-4', [
        `bg-${accentColor}`,
      ])}
      id='topOfPage'
    >
      <div className=' z-0 absolute  top-0 left-0 w-full h-full overflow-hidden lottie' id='lottie'>
        <Pattern pattern={pattern} />
      </div>
      <PageHeader_TextBox
        header={header}
        primaryColor={primaryColor}
        accentColor={accentColor}
        subheader={subheader}
        subheaderColor={subheaderColor}
      />
    </section>
  )
}
export default PageHeader_VariableHeight
