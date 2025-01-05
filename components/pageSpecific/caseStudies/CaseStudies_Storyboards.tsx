import { InnerWrapper, PageSection } from '@parts'
import Carousel from '@parts/carousel/Carousel'
import { H2 } from '@typography'
import type { TextColorVariant } from '@lib/colorHelper'

import { usePlausible } from 'next-plausible'
type CarouselProps = {
  slideColor?: string
  objectFit?: string
  slides: Array<any>
  bgColor?: string
  id?: string
  headerColor?: string
  onInteract?: () => void
}
function CaseStudies_Storyboards({
  slideColor,
  objectFit,
  slides,
  bgColor,
  id,
  headerColor,
}: CarouselProps) {
  const plausible = usePlausible()
  const handleCarouselInteraction = () => {
    plausible('StoryboardInteraction', {
      props: { id },
    })
  }

  return (
    <PageSection id={id != undefined ? id : 'storyboards'} color={bgColor} className={'mt-0'}>
      <InnerWrapper>
        <H2 color={headerColor as TextColorVariant} className={'relative z-20'}>
          Storyboards
        </H2>
        <div className='relative'>
          <Carousel
            textColor={headerColor}
            slides={slides}
            slideColor={slideColor}
            objectFit={objectFit}
            onInteract={handleCarouselInteraction}
          />
        </div>
      </InnerWrapper>
    </PageSection>
  )
}

export default CaseStudies_Storyboards
