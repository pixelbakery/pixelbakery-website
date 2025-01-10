import { useEffect, SVGProps } from 'react'
import cn from 'classnames'

type Timeout = ReturnType<typeof setTimeout>
// Define the type for component props
type Props = {
  index: number
  active: boolean
  text: string
  fontSize: string
  strokeWidth: string
  color: string
  fontWeight: string
}

// Interface for optional SVG title prop
interface SVGRProps {
  title?: string
}

// Debounce function to limit the rate at which a function can fire
function debounce(fn: Function, ms: number) {
  let timer: Timeout | null
  return () => {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn()
    }, ms)
  }
}

// Main component definition
const StrokeText = ({
  index,
  active,
  text,
  fontSize,
  strokeWidth,
  color,
  fontWeight,
}: Props & SVGProps<SVGSVGElement> & SVGRProps) => {
  // Effect to handle SVG attribute updates on resize
  useEffect(() => {
    // Function to set width and height of the SVG element
    function setAttributes(w: number, h: number) {
      const svg = document.getElementById(`svg-${index}`)
      if (svg) {
        svg.setAttribute('width', w.toString())
        svg.setAttribute('height', h.toString())
      }
    }

    // Debounced resize handler function
    const debouncedHandleResize = debounce(() => {
      const svg = document.getElementById(`svg-${index}`)
      const textElement = document.querySelector(`#text-${index}`) as SVGTextElement | null

      if (svg && textElement) {
        const bbox = textElement.getBBox()
        svg.setAttribute('width', bbox.width.toString())
        svg.setAttribute('height', bbox.height.toString())
      }
    }, 1000)

    // Initial setting of SVG dimensions
    const textElement = document.querySelector(`#text-${index}`) as SVGTextElement | null
    if (textElement) {
      const bbox = textElement.getBBox()
      setAttributes(bbox.width, bbox.height)
    }

    // Add and cleanup resize event listener
    window.addEventListener('resize', debouncedHandleResize)
    return () => {
      window.removeEventListener('resize', debouncedHandleResize)
    }
  }, [index])

  // Render SVG with text element inside
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={cn(
        // Classnames with dynamic styling based on 'active' prop
        'lowercase cursor-pointer top-0 left-0 social-link transform transition-all duration-300 ease-in-out text-blue-dark hover:fill-current hover:text-blue-dark motion-safe:hover:-skew-x-12 overflow-visible',
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
          // Dynamic text styling with customization options
          'font-poppins w-full tracking-wider',
          fontSize,
          fontWeight,
          strokeWidth,
          `hover:fill-${color}`,
        )}
      >
        {text}
      </text>
    </svg>
  )
}

export default StrokeText
