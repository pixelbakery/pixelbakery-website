import { imageLoader } from 'next-image-loader/image-loader'

imageLoader.loader = ({ src, width, quality }) => {
  const params = new URLSearchParams({
    url: `https://cdn.pixelbakery.com${src}`,
    w: width,
    q: quality || 75,
  })
  return `/_next/image?${params}`
}
