import Image from 'next/image'
import Shimmer from '@lib/Shimmer'

const Carousel_Slide = ({ index, slide }) => {
  console.log()
  return (
    <div className=' bg-wine-200 grow-0 shrink-0 w-full mr-2 ml-1'>
      <Image
        src={slide.src}
        alt={slide.alt}
        width={slide.diminsions.width}
        height={slide.diminsions.height}
        placeholder='blur'
        blurDataURL={`${Shimmer(slide.diminsions.width, slide.diminsions.height)}`}
        layout='responsive'
      />
    </div>
  )
}

export default Carousel_Slide
