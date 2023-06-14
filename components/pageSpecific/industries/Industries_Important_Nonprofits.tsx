import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import H2 from '@typography/H2'

const Industries_Important_Nonprofits = () => {
  return (
    <PageSection id='why-important'>
      <InnerWrapper>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-12'>
          <div className=''>
            <H2>Why is Video Production and Animation Important for Nonprofits?</H2>
          </div>
          <div className=''>
            <p>
              In today's visually driven society, capturing the attention and engaging the hearts of
              potential supporters is crucial.
            </p>
            <p>
              Animation and video production offer nonprofits an opportunity to tell their stories
              in a compelling and visually captivating way. Through captivating visuals, emotional
              storytelling, and powerful narratives, nonprofits can effectively convey their
              mission, share the stories of those they serve, and inspire action.
            </p>
          </div>
        </div>
      </InnerWrapper>
    </PageSection>
  )
}

export default Industries_Important_Nonprofits
