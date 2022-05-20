import { useState } from 'react'
import Image from 'next/image'
import cn from 'classnames'
import { useQuery } from 'react-query'
import Lead from '@typography/Lead'
interface GalleryProps {
  count: number
}

export const InstagramGallery = (props: GalleryProps) => {
  const [loading, setLoading] = useState<Boolean>(true)
  const [error, setError] = useState<Boolean>(false)

  const { data, isError, isLoading } = useQuery('instagram-images', async () => {
    const res = await fetch('/api/insta').then((res) => res.json())
    return res.images
  })

  if (isLoading) {
    return (
      <div className='instagram-gallery'>
        {' '}
        <div className='w-full h-full flex flex-col justify-center'>
          <Lead color='cream' className='self-center text-center'>
            Loading
          </Lead>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className='instagram-gallery'>
        {' '}
        Something went terribly wrong - can't load instagram feed.
      </div>
    )
  }

  return (
    <div className='grid grid-cols-4 lg:grid-cols-6 2xl:grid-cols-7 lg:gap-2 instagram-gallery'>
      {data.slice(0, props.count).map((item: any, index: any) => (
        <div
          key={index}
          className={cn('bg-yellow col-span-1 instagram-item aspect-w-1 aspect-h-1', {
            ['hidden lg:block 2xl:block']: index > 6 && index < 11,
            ['hidden  2xl:block']: index >= 11 && index < 13,
          })}
        >
          <a
            key={index}
            href={item.permalink}
            className='instagram-link'
            target='_blank'
            rel='noreferrer'
          >
            {item.media_type === 'IMAGE' || item.media_type === 'CAROUSEL_ALBUM' ? (
              <div className=' w-full h-full'>
                <Image
                  layout='fill'
                  objectFit='cover'
                  placeholder='blur'
                  blurDataURL={item.media_url.replace(/^[^.]*/, 'https://scontent-akl1-1')}
                  className='instagram-image'
                  key={index}
                  src={item.media_url.replace(/^[^.]*/, 'https://scontent-akl1-1')}
                  // src={item.media_url}
                  alt={item.caption}
                  quality={33}
                />
              </div>
            ) : (
              <video
                className='instagram-image object-cover object-center w-full h-full'
                autoPlay
                muted
                loop
                playsInline
                key={index}
              >
                <source src={item.media_url} type='video/mp4' />
              </video>
            )}
          </a>
        </div>
      ))}
    </div>
  )
}
