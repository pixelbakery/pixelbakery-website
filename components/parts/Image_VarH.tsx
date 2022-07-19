import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

function Image_VarH({ src, openInNewWindow, ...props }) {
  const [paddingTop, setPaddingTop] = useState('0')

  const ImageComponent = () => {
    return (
      <Image
        src={src}
        layout='fill'
        alt={props.alt}
        objectFit='contain'
        blurDataURL={src}
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
        <div className={'relative hover:scale-99 duration-300 ease-in-out'} style={{ paddingTop }}>
          <Link href={src} passHref>
            <a target={'_blank'} className={''}>
              <ImageComponent />
            </a>
          </Link>
        </div>
      ) : (
        <div className='relative'>
          <ImageComponent />
        </div>
      )}
    </>
  )
}
export default Image_VarH
