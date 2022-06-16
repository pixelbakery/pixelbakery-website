import { useState, useRef, useEffect } from 'react'
import gsap from 'gsap'
function Lightbox({ src: string, lightboxOpen }) {
  // const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxItem, setLightboxItem] = useState(undefined)
  const lightbox = useRef(null)

  function handleLightboxItem(test: string) {
    setLightboxItem(test)
    console.log(test)
    // handleLightbox
  }
  // function handleLightbox() {
  //   setLightboxOpen(!lightboxOpen)
  // }
  useEffect(() => {
    if (!lightboxOpen) {
      document.body.classList.remove('overflow-y-hidden')
      gsap.to(lightbox.current, {
        autoAlpha: 0,
        duration: 1,
      })
    } else {
      gsap.to(lightbox.current, {
        duration: 1,
        autoAlpha: 1,
      })
      document.body.classList.add('overflow-y-hidden')
    }
  }, [lightboxOpen])
  const Lightbox = () => {
    return (
      <div
        ref={lightbox}
        // onClick={handleLightbox}
        className='opacity-0 bg-wine bg-opacity-60 fixed z-50 top-0 left-0 w-full h-full'
      ></div>
    )
  }
  return Lightbox
}
export default Lightbox
