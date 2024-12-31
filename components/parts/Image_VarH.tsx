import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

function Image_VarH({ src, openInNewWindow, ...props }: any) {
  const [paddingTop, setPaddingTop] = useState('0')

  const ImageComponent = () => {
    return (
      <Image
        src={`${src}`}
        alt={props.alt}
        fill={true}
        className='object-contain object-center w-full h-full'
        placeholder='blur'
        blurDataURL={`${src}`}
        onLoad={({ target }) => {
          const { naturalWidth, naturalHeight } = target as HTMLImageElement
          setPaddingTop(`calc(100% / (${naturalWidth} / ${naturalHeight})`)
        }}
      />
    )
  }
  return (
    <>
      {openInNewWindow ? (
        <Link hrefLang={'en-US'} href={src} target={'_blank'}>
          <div
            className={'cursor-pointer relative hover:scale-99 duration-300 ease-in-out'}
            style={{ paddingTop }}
          >
            <ImageComponent />
          </div>
        </Link>
      ) : (
        <div className='relative'>
          <ImageComponent />
        </div>
      )}
    </>
  )
}
export default Image_VarH
