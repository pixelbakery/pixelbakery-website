import { LazyMotion, domAnimation, AnimatePresence, m } from 'framer-motion'
import dynamic from 'next/dynamic'
import { CSSProperties, useEffect, useRef, useState } from 'react'
import cn from 'classnames'
import PulsatingButton from './PulsatingButton'
// 1) Make sure @footer/index.ts re-exports Footer_Croissant as:
//    export { default as Footer_Croissant } from './Footer_Croissant';
//    Then the dynamic import below is valid.
const Footer_Croissant = dynamic(() => import('@footer').then((mod) => mod.Footer_Object_Croissant))

export const AnimatedGradientBorderTW: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  const boxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const boxElement = boxRef.current

    if (!boxElement) {
      return
    }

    const updateAnimation = () => {
      const angle = (parseFloat(boxElement.style.getPropertyValue('--angle')) + 0.5) % 360
      boxElement.style.setProperty('--angle', `${angle}deg`)
      requestAnimationFrame(updateAnimation)
    }

    requestAnimationFrame(updateAnimation)
  }, [])

  return (
    <div
      ref={boxRef}
      style={
        {
          '--angle': '0deg',
          '--border-color': 'linear-gradient(var(--angle), #070707, #687aff)',
          '--bg-color': 'linear-gradient(#ffff, #ffff)',
        } as CSSProperties
      }
      className='flex w-32 h-32  items-center justify-center rounded-lg border-2 border-[#0000] p-1 [background:padding-box_var(--bg-color),border-box_var(--border-color)]'
    >
      {children}
    </div>
  )
}

export default function Footer_Sections_BottomRow() {
  const [testModalOpen, setTestModal] = useState(false)
  const year = new Date().getFullYear()

  const updateModal = () => {
    setTestModal((prev) => !prev)
  }

  return (
    <>
      <LazyMotion features={domAnimation}>
        <AnimatePresence initial={false} mode='wait'>
          {testModalOpen && (
            <m.div
              id='croissantModal'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className='absolute top-0 left-0 z-30 w-full h-full transform-gpu will-change-transform bg-peach'
            >
              {/* 2) Pass onModalUpdate to Footer_Croissant */}
              <Footer_Croissant onModalUpdate={updateModal} />
            </m.div>
          )}
        </AnimatePresence>
      </LazyMotion>

      <div className='flex flex-col justify-center w-full pt-3 gap-y-6'>
        <span className='self-center order-2 text-sm italic text-center lg:mb-2 md:mt-0 text-cream lg:order-1'>
          © {year} Pixel Bakery Design Studio
          <br />
          Made with love and flour in Lincoln, Nebraska
        </span>
        {/* <button
          onClick={updateModal}
          className={cn(
            'self-center max-w-xs px-3 pt-4 pb-2 text-2xl duration-500 ease-in-out rounded-md group bg-cream hover:scale-98 drop-shadow-md hover:drop-shadow-sm glowing-button',
          )}
        >
          <i className='block leading-none duration-300 ease-in-out group-hover:rotate-360'>🥐</i>
        </button> */}

        <PulsatingButton
          shimmerColor={'rgb(56, 204, 255)'}
          shimmerSize={'0.05em'}
          background={'#fff'}
          className='self-center w-12 h-12 max-w-xs px-3 pt-4 pb-2 text-2xl transition duration-500 ease-in-out scale-100 rounded-md group bg-cream hover:scale-98 drop-shadow-lg hover:drop-shadow-sm animate-bob hover:animate-none hover:translate-y-0 hover:rotate-0 hover:translate-x-0'
          borderRadius={'8px'}
          shimmerDuration={'2s'}
          onClick={updateModal}
        >
          <i className='block text-2xl leading-none duration-300 ease-in-out group-hover:rotate-360'>
            🥐
          </i>
        </PulsatingButton>
      </div>
    </>
  )
}
