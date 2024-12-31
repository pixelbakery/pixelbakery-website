import { DownloadIcon, CopyIcon } from 'components/icons/Icons_UI'
import Close from '@images/Close'
import Image from 'next/image'
interface CarouselModalProps {
  alt: string
}
const Carousel_Modal = ({ alt }: CarouselModalProps) => {
  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 z-50 w-screen h-screen bg-opacity-75  bg-wine-400 backdrop-blur-md'>
      <div className='absolute z-50 right-4 top-4 '>
        <button
          // onClick={handleOnClick}
          className='relative cursor-pointer hover-98 hover-shadow-none text-cream '
        >
          <Close className='w-12 h-12 ' />
        </button>
      </div>
      <div className='relative w-full h-full px-24 py-24'>
        <div className='relative flex flex-col w-full h-full overflow-hidden'>
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
            className='relative cursor-pointer hover-98 hover-shadow-none text-cream '
          >
            <DownloadIcon className={'h-8 w-8'} />
          </a>
          <button
            onClick={() =>
              navigator.clipboard.writeText('https://cdn.pixelbakery.com/img/placeholder01.png')
            }
            className='relative cursor-pointer hover-98 hover-shadow-none text-cream '
          >
            <CopyIcon className={'h-7 w-7'} />
          </button>
        </div>
      </div>
    </div>
  )
}
export default Carousel_Modal
