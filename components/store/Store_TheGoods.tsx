import { useEffect } from 'react'
import gsap from 'gsap'

const Store_TheGoods = () => {
  // BEGIN GSAP
  useEffect(() => {
    gsap.set('.anim-header .anim-span', { y: 20 })
    const tl_loadingModal = gsap.timeline({
      defaults: {
        stagger: 0.1,
        ease: 'power1.inOut',
      },
      repeat: -1,
      repeatDelay: 0.62,
    })

    tl_loadingModal.to('.anim-header .anim-span', {
      y: -20,
      duration: 0.66,
    })
    tl_loadingModal.to(
      '.anim-header .anim-span',
      {
        y: 20,
        duration: 0.66,
      },
      '+=.62',
    )
    tl_loadingModal.play
    return () => {
      tl_loadingModal.kill()
    }
  }, [])
  // END GSAP
  return (
    <div className='max-w-7xl mx-auto mb-30 '>
      <div className='text-center md:text-left text-4xl md:text-6xl text-peach font-black anim-header block pb-12'>
        <span className='px-1 anim-span relative inline-block text-peach'>t</span>
        <span className='px-1 anim-span relative inline-block text-yellow'>h</span>
        <span className='px-1 anim-span relative inline-block mr-8 text-blue'>e</span>

        <span className='px-1 anim-span relative inline-block text-pink'>g</span>
        <span className='px-1 anim-span relative inline-block text-blue-dark'>o</span>
        <span className='px-1 anim-span relative inline-block text-blue'>o</span>
        <span className='px-1 anim-span relative inline-block text-peach'>d</span>
        <span className='px-1 anim-span relative inline-block text-yellow'>s</span>
      </div>
    </div>
  )
}
export default Store_TheGoods
