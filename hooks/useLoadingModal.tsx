import gsap from 'gsap'
import { useIsomorphicLayoutEffect } from '@lib/useIsomorphicLayoutEffect'

export default function useLoadingModal() {
  // BEGIN GSAP
  useIsomorphicLayoutEffect(() => {
    gsap.set('.modal-loading .modal-loading-span', { y: 20 })
    let tl_loadingModal = gsap.timeline({
      defaults: {
        stagger: 0.1,
      },
      repeat: -1,
      repeatDelay: 0.1,
      yoyo: true,
    })

    tl_loadingModal.to('.modal-loading .modal-loading-span', {
      y: -20,
      duration: 0.66,
    })
    tl_loadingModal.play
    return () => {
      tl_loadingModal.kill()
    }
  }, [])
  // END GSAP
}
