// components/parts/CustomImage.tsx
import Image from 'next/image'
import { useState } from 'react'

const IMAGE_PREFIX = process.env.NEXT_PUBLIC_IMG_PREFIX || ''

interface CustomImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  placeholder?: 'blur'
  blurDataURL?: string
  quality?: number
  priority?: boolean
  loading?: 'lazy' | 'eager'
  unoptimized?: boolean
}

function CustomImage({
  src,
  alt,
  width,
  height,
  className = '',
  placeholder = 'blur',
  blurDataURL = `${IMAGE_PREFIX}${src}`,
  quality = 75,
  priority = false,
  loading = 'lazy',
  unoptimized = false,
}: CustomImageProps) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className={`relative ${className}`} style={{ width, height }}>
      {isLoading && <div className='absolute inset-0 bg-gray-200 animate-pulse' />}
      <Image
        src={`${IMAGE_PREFIX}${src}`}
        alt={alt}
        width={width}
        height={height}
        className='object-cover w-full h-full'
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        quality={quality}
        priority={priority}
        loading={loading}
        unoptimized={unoptimized}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  )
}
export default CustomImage
