import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import Carousel from '@parts/Carousel'
import H2 from '@typography/H2'

type CarouselProps = {
  slideColor?: string
  objectFit?: string
  aspectH?: string
  aspectW?: string
  slides: Array<any>
  bgColor?: string
  id?: string
  headerColor?: string
}
function CaseStudies_Storyboards({
  slideColor,
  objectFit,
  aspectH,
  aspectW,
  slides,
  bgColor,
  id,
  headerColor,
}: CarouselProps) {
  return (
    <PageSection id={id} color={bgColor}>
      <InnerWrapper>
        <H2 color={headerColor} className={'relative z-20'}>
          Storyboards
        </H2>
        <Carousel
          textColor={headerColor}
          slides={slides}
          slideColor={slideColor}
          objectFit={objectFit}
          aspectH={aspectH}
          aspectW={aspectW}
        />
      </InnerWrapper>
    </PageSection>
  )
}

export default CaseStudies_Storyboards
