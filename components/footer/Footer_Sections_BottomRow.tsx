import { LazyMotion, domAnimation, AnimatePresence, m } from 'framer-motion'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import { Footer_UI_CroissantButton } from '@footer'
import { usePlausible } from 'next-plausible'

const Footer_Croissant = dynamic(
  () => import('@footer').then((mod) => mod.Footer_Object_Croissant),
  { ssr: false },
)

const FooterBottomRow = () => {
  const year = new Date().getFullYear()
  const [isModalOpen, setModalOpen] = useState(false)
  const toggleModal = () => {
    setModalOpen((prev) => !prev)
    plausible('Custom Event', { props: { source: 'croissant-button-click' } })
  }
  const plausible = usePlausible()

  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence>
        {isModalOpen && (
          <m.div
            id='croissantModal'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className='fixed top-0 left-0 z-30 w-full h-full bg-peach'
            aria-hidden={!isModalOpen}
          >
            <Footer_Croissant onModalUpdate={toggleModal} />
          </m.div>
        )}
      </AnimatePresence>

      <div className='flex flex-col items-center w-full pt-3 gap-y-6'>
        <span className='text-sm italic text-center text-cream'>
          © {year} Pixel Bakery Design Studio
          <br />
          Made with love and flour in Lincoln, Nebraska
        </span>

        <Footer_UI_CroissantButton
          shimmerColor='rgb(56, 204, 255)'
          shimmerSize='0.05em'
          background='#fff'
          className='w-12 h-12 rounded-md shadow-lg bg-cream hover:scale-98 hover:shadow-sm'
          borderRadius='8px'
          shimmerDuration='2s'
          onClick={toggleModal}
        >
          <i className='text-2xl leading-none group-hover:rotate-360'>🥐</i>
        </Footer_UI_CroissantButton>
      </div>
    </LazyMotion>
  )
}

export default FooterBottomRow
