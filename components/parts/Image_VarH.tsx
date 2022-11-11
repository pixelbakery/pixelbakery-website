import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

function Image_VarH({ src, openInNewWindow, ...props }) {
  const [paddingTop, setPaddingTop] = useState('0')

  const ImageComponent = () => {
    return (
      <Image
        src={`${src}`}
        layout='fill'
        alt={props.alt}
        objectFit='contain'
        placeholder='blur'
        blurDataURL={`${src}`}
        onLoad={({ target }) => {
          const { naturalWidth, naturalHeight } = target as HTMLImageElement
          setPaddingTop(`calc(100% / (${naturalWidth} / ${naturalHeight})`)
        }}
      />
    )
  }
  return <>
    {openInNewWindow ? (
      (<Link hrefLang={'en-US'} href={src} passHref target={'_blank'} legacyBehavior>

        <div
          className={'cursor-pointer relative hover:scale-99 duration-300 ease-in-out'}
          style={{ paddingTop }}
        >
          <ImageComponent />
        </div>

      </Link>)
    ) : (
      <div className='relative'>
        <ImageComponent />
      </div>
    )}
  </>;
}
export default Image_VarH
