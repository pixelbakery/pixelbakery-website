import { useEffect, SVGProps } from 'react'
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
interface SVGRProps {
  title?: string
}
function debounce(fn, ms) {
  let timer
  return () => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      timer = null
      fn.apply(this)
    }, ms)
  }
}

const StrokeText = ({
  index,
  active,
  text,
  fontSize,
  strokeWidth,
  color,
  fontWeight,
}: Props & SVGProps<SVGGraphicsElement> & SVGRProps) => {
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

      let w_text = document.querySelector(`#text-${index}` as any).getBBox().width
      let h_text = document.querySelector(`#text-${index}` as any).getBBox().height

      svg.setAttribute('width', w_text)
      svg.setAttribute('height', h_text)
    }, 1000)

    window.addEventListener('resize', debouncedHandleResize)
    setAttributes(
      document.querySelector(`#text-${index}` as any).getBBox().width,
      document.querySelector(`#text-${index}` as any).getBBox().height,
    )
    return () => {
      window.removeEventListener('resize', debouncedHandleResize)
    }
  }, [])
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={cn(
        'lowercase cursor-pointer top-0 left-0 social-link transform transition-all duration-300 ease-in-out text-blue-dark hover:fill-current hover:text-blue-dark motion-safe:hover:-skew-x-12 overflow-visible',
        { ['fill-current']: active },
      )}
      fill='none'
      stroke='currentColor'
      id={`svg-${index}`}
      // width={'100%'}
    >
      <text
        x='0px'
        y='80%'
        id={`text-${index}`}
        className={cn(
          'font-poppins w-full tracking-wider ',
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
