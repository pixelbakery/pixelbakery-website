import React from 'react'
import Link from 'next/link'
import { ChevronRightIcon } from '@heroicons/react/solid'
import PropTypes from 'prop-types'

Button_Outlined.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string,
  color: PropTypes.string,
  chevronDirection: PropTypes.string,
}

function Button_Outlined({ text, link, color, chevronDirection }) {
  let chevronRotation = ''
  if (chevronDirection === 'right') {
    return
  } else if (chevronDirection === 'down') {
    chevronRotation = 'rotate-90'
  } else if (chevronDirection === 'left') {
    chevronRotation = 'order-first rotate-180'
  } else if (chevronDirection === 'up') {
    chevronRotation = ' -rotate-90'
  }
  return (
    <Link href={link} passHref>
      <div
        className={
          'cursor-pointer transform transition-all duration-500 hover:scale-98 my-2 max-w-lg py-2 rounded-xl px-6 w-full bg-transparent text-center border-2 border-' +
          color
        }
      >
        <div className={' font-extrabold text-lg lowercase flex text-' + color}>
          <div className='self-center flex-grow flex flex-col justify-center'>{text}</div>

          <i
            className={
              'mx-0 px-0 self-center h-8 w-8 flex flex-col justify-center ' + chevronRotation
            }
          >
            <ChevronRightIcon className='  text-color' />
          </i>
        </div>
      </div>
    </Link>
  )
}

export default Button_Outlined
