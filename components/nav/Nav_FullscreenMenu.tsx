// components/nav/Nav_FullscreenMenu.tsx

import { AnimatePresence, m, LazyMotion, domAnimation } from 'framer-motion'
import Nav_FullScreenMenu_RightCol from './Nav_FullScreenMenu_RightCol'
import Nav_FullScreenMenu_MiddleCol from './Nav_FullScreenMenu_MiddleCol'
import Nav_FullScreenMenu_LeftCol from './Nav_FullScreenMenu_LeftCol'
import { useIsomorphicLayoutEffect } from '@lib/useIsomorphicLayoutEffect'
import type { FullscreenMenuProps } from '@types'

export default function Nav_FullscreenMenu({ isActive, onModalUpdate }: FullscreenMenuProps) {
  const handleLinkClick = () => {
    onModalUpdate(false)
  }

  useIsomorphicLayoutEffect(() => {
    if (!isActive) {
      document.body.classList.remove('overflow-y-hidden')
    } else {
      document.body.classList.add('overflow-y-hidden')
    }
  }, [isActive])

  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence initial={false} mode='wait'>
        {isActive && (
          <m.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.75 }}
            id='fullscreenNav'
            className='fixed top-0 right-0 z-40 w-screen h-screen p-4 opacity-0 pointer-events-auto bg-cream'
          >
            <div className='flex justify-center w-full h-full px-6 py-12 bg-blue'>
              <div className='self-center mx-auto'>
                <div className='flex flex-col flex-wrap justify-center w-full lg:flex-row lg:flex-nowrap gap-x-0 lg:gap-x-4 2xl:gap-x-12'>
                  <Nav_FullScreenMenu_LeftCol update={handleLinkClick} />
                  <Nav_FullScreenMenu_MiddleCol update={handleLinkClick} />
                  <Nav_FullScreenMenu_RightCol update={handleLinkClick} />
                </div>
              </div>
            </div>
          </m.nav>
        )}
      </AnimatePresence>
    </LazyMotion>
  )
}
