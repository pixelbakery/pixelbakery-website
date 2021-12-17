import React from 'react'
import PropTypes from 'prop-types'

// must pass a size: xl, lg, md, sm
//must pass a color without tailwind vernacular
Pill.propTypes = {
  text: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
}
export default function Pill({ text, bgColor, textColor, size }) {
  let px = '',
    py = '',
    fontWeight = '',
    textSize = ''
  const setSize = (size) => {
    switch (size) {
      case 'xl':
        py = ' py-4'
        px = ' px-5'
        fontWeight = ' font-bold'
        break
      case 'lg':
        py = ' py-3'
        px = ' px-4'
        fontWeight = ' font-semibold'

        break
      case 'md':
        py = ' py-2'
        px = ' px-3'
        fontWeight = ' font-medium'
        break

      case 'sm':
        py = ' py-1'
        px = ' px-3'
        fontWeight = ' font-normal'
        break
      default:
        py = ' py-1'
        px = ' px-3'
        fontWeight = ' font-normal'
        break
    }
    textSize = ' text-' + size
    return [px, py, fontWeight, textSize]
  }

  const getSize = setSize(size)
  // console.log('x: ' + px + '  ' + 'y: ' + py + ' weight:' + fontWeight + ' size:' + textSize)

  const addSize = ' ' + px + ' ' + py
  const addBgColor = ' bg-' + bgColor
  const addTextColor = ' text-' + textColor

  return (
    <div
      className={
        'whitespace-nowrap rounded-md' + textSize + fontWeight + addBgColor + addTextColor + px + py
      }
    >
      {text}
    </div>
  )
}
