import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

function BackToTop() {
  const [showTopButton, setShowTopBtn] = useState(false)
  const elem = useRef(null)
  const pointer = useRef(null)

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setShowTopBtn(true)
      } else {
        setShowTopBtn(false)
      }
    }
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  useEffect(() => {
    if (!showTopButton) {
      gsap.to(elem.current, 0.75, { autoAlpha: 0 })
    } else if (showTopButton) {
      pointer.current.innerText = '☝️'
      gsap.to(elem.current, 0.75, { autoAlpha: 1 })
    }

    return () => {}
  }, [showTopButton])

  // This function will scroll the window to the top
  const scrollToTop = () => {
    pointer.current.innerText = '✌️'
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // for smoothly scrolling
    })
  }

  return (
    <div className='opacity-0 fixed bottom-6 right-6 z-30' ref={elem}>
      <button
        onClick={scrollToTop}
        className='rounded-lg  group bg-blue w-12 h-12 lg:w-16 lg:h-16 back-to-top hover:scale-98 text-lg  duration-300 ease-in-out drop-shadow-lg hover:drop-shadow-sm'
      >
        <span
          className='relative block text-2xl lg:text-4xl duration-300 ease-in-out group-hover:scale-110'
          ref={pointer}
        >
          ☝️
        </span>
      </button>
    </div>
  )
}

export default BackToTop
