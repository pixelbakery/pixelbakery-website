import Lottie from 'react-lottie-player'

import classNames from 'classnames'

import Pattern from '@data/Patterns_Blue_Dark.json'

import PropTypes from 'prop-types'
import H1 from 'components/typography/H1'
import PageHeader_TextBox from '@pageHeaders/PageHeader_TextBox'
PageHeader_VariableHeight.propTypes = {
  header: PropTypes.string,
  subheader: PropTypes.string,
  thisPatern: PropTypes.object,
}

// Local Variables

const primaryColor = 'blue-dark'
const accentColor = 'blue'
const subheaderColor = 'cream'

const thisPatern = Pattern

function PageHeader_VariableHeight({ header, subheader }) {
  function Pattern({ thisPatern }) {
    const playFrames: [number, number][] = [
      [0, 23],
      [24, 95],
    ]

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
