import { ChevronRightIcon, DownloadIcon, CopyIcon } from '@images/UI_Icons'
import Close from '@images/Close'
import { useEffect } from 'react'
import Image from 'next/image'

const Carousel_Modal = ({ src, w, h, alt }) => {
  useEffect(() => {
    // if (!isActive) {
    //   document.body.classList.remove('overflow-y-hidden')
    //   gsap.to(fsNavRef.current, {
    //     autoAlpha: 0,
    //   })
    // } else {
    //   gsap.to(fsNavRef.current, {
    //     autoAlpha: 1,
    //   })
    document.body.classList.add('overflow-y-hidden')
    // }
    // return () => {
    //   gsap.killTweensOf(fsNavRef.current)
    //   gsap.killTweensOf(el.current)
    // }
  }, [])
  return (
    <div className=' fixed left-0 top-0 bottom-0 right-0 h-screen w-screen z-50 bg-wine-400 bg-opacity-75 backdrop-blur-md '>
      <div className='z-50 absolute right-4 top-4 '>
        <button
          // onClick={handleOnClick}
          className='relative cursor-pointer hover-98 hover-shadow-none    text-cream '
        >
          <Close className='h-12 w-12 ' />
        </button>
      </div>
      <div className='h-full w-full relative py-24 px-24'>
        <div className='relative flex flex-col h-full w-full overflow-hidden'>
          <Image
            src={'https://cdn.pixelbakery.com/img/placeholder01.png'}
            width={320}
            height={213}
            alt={alt}
            className='object-contain object-center w-full h-full'
          />
        </div>
        <div className='relative flex gap-2'>
          <a
            href=''
            download
            className='relative cursor-pointer hover-98 hover-shadow-none    text-cream '
          >
            <DownloadIcon className={'h-8 w-8'} />
          </a>
          <button
            onClick={(e) =>
              navigator.clipboard.writeText('https://cdn.pixelbakery.com/img/placeholder01.png')
            }
            className='relative cursor-pointer hover-98 hover-shadow-none    text-cream '
          >
            <CopyIcon className={'h-7 w-7'} />
          </button>
        </div>
      </div>
    </div>
  )
}
export default Carousel_Modal
