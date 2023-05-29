import Nav_FullScreenMenu_RightCol from '@nav/Nav_FullScreenMenu_RightCol'
import Nav_FullScreenMenu_MiddleCol from '@nav/Nav_FullScreenMenu_MiddleCol'
import Nav_FullScreenMenu_LeftCol from '@nav/Nav_FullScreenMenu_LeftCol'
import { useIsomorphicLayoutEffect } from '@lib/useIsomorphicLayoutEffect'
import { AnimatePresence, m, LazyMotion, domAnimation } from 'framer-motion'
//Public Dev Note: The html and css for the hamburger nav is forked from Mikael Ainalem's Flippin' Burgers pen: https://codepen.io/ainalem/pen/LJYRxz All credit goes to him <3

function Nav_FullscreenMenu({ isActive, onModalUpdate }) {
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
      <AnimatePresence initial={false} mode={'wait'}>
        {isActive && (
          <m.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.75,
            }}
            id='fullscreenNav'
            className={
              'opacity-0 pointer-events-auto  p-4 fixed w-screen h-screen z-40  bg-cream top-0 right-0 '
            }
          >
            <div className=' w-full h-full bg-blue px-6 py-12 flex justify-center'>
              <div className='mx-auto self-center '>
                <div className='w-full flex flex-col lg:flex-row flex-wrap lg:flex-nowrap justify-center gap-x-0 lg:gap-x-4 2xl:gap-x-12 '>
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

    /* <nav
        ref={fsNavRef}
        id='fullscreenNav'
        className={
          'opacity-0 pointer-events-auto  p-4 fixed w-screen h-screen z-40  bg-cream top-0 right-0 '
        }
      >

      </nav> */
  )
}

export default Nav_FullscreenMenu
