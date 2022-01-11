import React, { useEffect, useState } from 'react'
import { ReactDOM } from 'react'
import cn from 'classnames'
type Props = {
  index: number
  active: boolean
  text: string
  fontSize: string
  strokeWidth: string
  color: string
  fontWeight: string
}
function debounce(fn, ms) {
  let timer
  return (_) => {
    clearTimeout(timer)
    timer = setTimeout((_) => {
      timer = null
      fn.apply(this, arguments)
    }, ms)
  }
}

const StrokeText = ({ index, active, text, fontSize, strokeWidth, color, fontWeight }: Props) => {
  // const [dimensions, setDimensions] = useState({
  //   w_text: 0,
  //   h_text: 0,
  // })

  useEffect(() => {
    function setAttributes(w, h) {
      const svg = document.getElementById(`svg-${index}`)
      svg.setAttribute('width', w)
      svg.setAttribute('height', h)
    }
    const debouncedHandleResize = debounce(function handleResize() {
      const svg = document.getElementById(`svg-${index}`)

      let w_text = document.querySelector(`#text-${index}`).getBBox().width
      let h_text = document.querySelector(`#text-${index}`).getBBox().height

      svg.setAttribute('width', w_text)
      svg.setAttribute('height', h_text)
    }, 1000)

    window.addEventListener('resize', debouncedHandleResize)
    setAttributes(
      document.querySelector(`#text-${index}`).getBBox().width,
      document.querySelector(`#text-${index}`).getBBox().height,
    )
    return () => {
      window.removeEventListener('resize', debouncedHandleResize)
    }
  }, [])
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={cn(
        'lowercase cursor-pointer top-0 left-0 social-link transform transition-all duration-300 ease-in-out text-blue-dark hover:fill-current hover:text-blue-dark motion-safe:hover:-skew-x-12',
        { ['fill-current']: active },
      )}
      fill='none'
      stroke='currentColor'
      id={`svg-${index}`}
    >
      <text
        x='0px'
        y='80%'
        id={`text-${index}`}
        className={cn(
          'font-body w-full tracking-wider ',
          `${fontSize}`,
          `${fontWeight}`,
          `${strokeWidth}`,
          `hover:fill-${color}`,
        )}
      >
        {text}
      </text>
    </svg>
  )
}

export default StrokeText
