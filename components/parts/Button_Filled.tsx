import React from 'react'
import Link from 'next/link'
import { ChevronRightIcon } from '../Images/UI_Icons/index'
import cn from 'classnames'

import PropTypes from 'prop-types'

Button_Filled.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  chevronDirection: PropTypes.string,
}

function Button_Filled({ text, link, textColor, bgColor, chevronDirection }) {
  let chevronRotation = ''
  if (chevronDirection === 'right') {
    chevronRotation = ''
  } else if (chevronDirection === 'down') {
    chevronRotation = 'rotate-90'
  } else if (chevronDirection === 'left') {
    chevronRotation = 'order-first rotate-180'
  } else if (chevronDirection === 'up') {
    chevronRotation = ' -rotate-90'
  } else {
    chevronRotation = ''
  }
  return (
    <Link href={link} passHref>
      <a>
        <div
          className={cn(
            ' my-3 py-3 rounded-sm px-6 w-full max-w-sm text-center cursor-pointer transform transition duration-400 hover:scale-102',
            `bg-${bgColor}`,
          )}
        >
          <div className={cn(' font-extrabold text-xl lowercase flex')}>
            <div
              className={cn(
                'text-center flex-grow flex flex-col justify-center',
                `text-${textColor}`,
              )}
            >
              {text}
            </div>

            <i
              className={cn(
                'mx-0 px-0 self-center h-8 w-8 flex flex-col justify-center',
                chevronRotation,
                `text-${textColor}`,
              )}
            >
              <ChevronRightIcon />
            </i>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default Button_Filled
