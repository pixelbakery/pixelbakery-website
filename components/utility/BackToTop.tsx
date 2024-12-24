import { useRef, useState } from 'react'
import { useIsomorphicLayoutEffect } from '@lib/useIsomorphicLayoutEffect'
import { AnimatePresence, m, LazyMotion, domAnimation } from 'framer-motion'

function BackToTop() {
  const [showTopButton, setShowTopBtn] = useState(false)
  const elem = useRef(null)
  const pointer = useRef<HTMLDivElement>(null)

  useIsomorphicLayoutEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setShowTopBtn(true)
      } else {
        setShowTopBtn(false)
      }
    }
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    if (pointer.current) {
      pointer.current.innerText = '✌️'
    }
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence initial={false} mode={'wait'}>
        {showTopButton && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed z-30 opacity-0 bottom-6 right-6'
            ref={elem}
          >
            <button
              onClick={scrollToTop}
              className='w-12 h-12 text-lg duration-300 ease-in-out rounded-lg group bg-blue lg:w-16 lg:h-16 back-to-top hover:scale-98 drop-shadow-lg hover:drop-shadow-sm'
            >
              <span
                className='relative block text-2xl duration-300 ease-in-out lg:text-4xl group-hover:scale-110'
                ref={pointer}
              >
                ☝️
              </span>
            </button>
          </m.div>
        )}
      </AnimatePresence>
    </LazyMotion>
  )
}

export default BackToTop
