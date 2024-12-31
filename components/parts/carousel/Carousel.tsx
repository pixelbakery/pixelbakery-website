import cn from 'classnames'
import {
  DotButton,
  PrevButton,
  NextButton,
  SlideProgression,
} from '@parts/carousel/Carousel_Buttons'

import useEmblaCarousel from 'embla-carousel-react'
import { Fragment, useCallback, useEffect, useState } from 'react'
import Carousel_Slide from '@parts/carousel/Carousel_Slide'

type CarouselProps = {
  slides: Array<any>
  aspectH?: string
  index?: number
  aspectW?: string
  objectFit?: any
  slideColor?: string
  textColor?: string
  diminsions?: Array<number>
  className?: string
}

const Carousel = ({ slides, className }: CarouselProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])
  const [emblaRef, embla] = useEmblaCarousel({ loop: false })
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla])
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla])
  const scrollTo = useCallback((index: number) => embla && embla.scrollTo(index), [embla])

  const onSelect = useCallback(() => {
    if (!embla) return
    {
      setSelectedIndex(embla.selectedScrollSnap())
      setPrevBtnEnabled(embla.canScrollPrev())
      setNextBtnEnabled(embla.canScrollNext())
    }
  }, [embla, setSelectedIndex])

  useEffect(() => {
    if (!embla) return
    onSelect()
    setScrollSnaps(embla.scrollSnapList())
    embla.on('select', onSelect)
  }, [embla, setScrollSnaps, onSelect])

  return (
    <>
      <div
        className={cn(
          {
            'w-full overflow-hidden': !className || className === '',
          },
          className,
        )}
        ref={emblaRef}
      >
        <div className='flex w-full '>
          {slides.map((slide, i) => {
            return (
              <Fragment key={i}>
                <Carousel_Slide slide={slide} />
              </Fragment>
            )
          })}
        </div>
      </div>
      <div className='flex justify-between mt-6 mb-8'>
        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} navColor={'blue-dark'} />
        <div className='flex flex-col justify-center'>
          <SlideProgression
            current={selectedIndex}
            total={scrollSnaps.length}
            navColor={'blue-dark'}
          />
          <DotButton scrollSnaps={scrollSnaps} selectedIndex={selectedIndex} scrollTo={scrollTo} />
        </div>
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} navColor={'blue-dark'} />
      </div>
    </>
  )
}

export default Carousel
