import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import H2 from '@typography/H2'

function Careers_Intro() {
  return (
    <PageSection className='' color='white' id='careers-intro'>
      <InnerWrapper className='lg:pb-0 grid grid-cols-1 xl:grid-cols-2 gap-x-12'>
        <H2 color='pink'>Think you got what it takes?</H2>
        <div className='max-w-3xl'>
          <p>
            We’re a motion-focused creative shop, meaning while our most frequently requested
            services are in the areas of animation, videography, and web design, we basically do it
            all – from production on animated series in LA, to rebrands for local startups, to print
            design to regional nonprofits. We are producers and we are creatives, and at the end of
            the day we find our happiness and fulfillment from making great creative that touches
            lives.
          </p>

          <p>We hope you come make awesome things with us.</p>
        </div>
      </InnerWrapper>
    </PageSection>
  )
}

export default Careers_Intro
