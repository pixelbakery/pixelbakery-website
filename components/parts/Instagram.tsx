import { useEffect, useState } from 'react'
import Image from 'next/image'
import cn from 'classnames'
interface GalleryProps {
  count: number
}

export const InstagramGallery = (props: GalleryProps) => {
  const [loading, setLoading] = useState<Boolean>(true)
  const [error, setError] = useState<Boolean>(false)
  const [instagramData, setInstagramData] = useState<any>(null)
  const accessToken =
    'IGQVJXUmVjdC11cTl4VUY1YWpzcmFMVUR2OVpZAMVZAiMGVOWVVxRXVXLXFYMnduZAXpsT0EyUGNacl96dTJYSlRnd2FlWUFjbkNBN1dhVzRRamcya2k2MmJMQlowVVJVNzJDTG9zMWF2RC0yeklDZAE4yOAZDZD'
  const fetchInstagramData = (url: string) => {
    fetch(url)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        // console.log({ data })
        if (data.hasOwnProperty('error')) {
          setLoading(false)
          setError(true)
        } else {
          setInstagramData(data)
          setLoading(false)
        }
      })
      .catch((error) => {
        console.error('Error:', error)
        setError(true)
        setLoading(false)
      })
  }

  useEffect(() => {
    const url = `https://graph.instagram.com/me/media?fields=media_count,media_type,permalink,media_url,caption&limit=${props.count}&access_token=${accessToken}`
    fetchInstagramData(url)
  }, [])

  if (loading) {
    return <div className='instagram-gallery'>LOADING...</div>
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
    <div className='grid grid-cols-4 lg:grid-cols-6 2xl:grid-cols-7 gap-2 instagram-gallery'>
      {instagramData.data.slice(0, props.count).map((item: any, index: any) => (
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
