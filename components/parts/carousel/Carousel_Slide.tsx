import Image from 'next/image'
import Shimmer from '@lib/Shimmer'
interface Slide {
  src: string
  alt: string
  index?: number

  diminsions: {
    width: number
    height: number
  }
}

interface CarouselSlideProps {
  slide: Slide
}
const Carousel_Slide = ({ slide }: CarouselSlideProps) => {
  return (
    <div className='w-full ml-1 mr-2 bg-wine-200 grow-0 shrink-0'>
      <Image
        src={slide.src}
        alt={slide.alt}
        width={slide.diminsions.width}
        height={slide.diminsions.height}
        placeholder='blur'
        blurDataURL={`${Shimmer(slide.diminsions.width, slide.diminsions.height)}`}
      />
    </div>
  )
}

export default Carousel_Slide
