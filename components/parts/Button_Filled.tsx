import React from 'react'
import Link from 'next/link'
import { ChevronRightIcon } from '@heroicons/react/solid'
import PropTypes from 'prop-types'

ButtonFilled.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
}

function ButtonFilled({ text, link, bgColor, textColor }) {
  return (
    <Link href={link} passHref>
      <div
        className={
          bgColor +
          ' my-3 py-3 rounded-sm px-6 w-full max-w-sm text-center cursor-pointer transform transition duration-400 hover:scale-102'
        }
      >
        <div className=' font-extrabold text-xl lowercase flex '>
          <div className={'text-center flex-grow flex flex-col justify-center ' + textColor}>
            {text}
          </div>

          <i className='h-12 w-12 flex flex-col justify-center'>
            <ChevronRightIcon className={textColor} />
          </i>
        </div>
      </div>
    </Link>
  )
}

export default ButtonFilled
