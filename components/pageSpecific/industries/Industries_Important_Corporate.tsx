import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import H2 from '@typography/H2'

const Industries_Important_Corporate = () => {
  return (
    <PageSection id='why-important'>
      <InnerWrapper>
        <div className='grid grid-cols-1 md:grid-cols-2'>
          <div className=''>
            <H2>Why is Corporate Video Production Important?</H2>
          </div>
          <div className=''>
            <p>
              Corporate video production is crucial for businesses to effectively communicate their
              messages, build a strong brand identity, and increase audience engagement.
            </p>
            <p>
              <span className='font-bold'>Fun fact:</span> including videos on landing pages can
              increase conversion rates by <span className='italic'>up to 80%</span>. Videos have a
              higher likelihood of capturing and retaining audience attention compared to other
              forms of content.
            </p>
            <p>
              In fact, 95% of viewers retain information from videos, as opposed to only 10% from
              text alone. According to Forbes, 64% of consumers are more likely to purchase a
              product after watching a video about it.
            </p>
            <p>
              By incorporating video production into their strategies, businesses can leverage these
              statistics to enhance communication, showcase professionalism, and drive success.
              watching a video about it.
            </p>
          </div>
        </div>
      </InnerWrapper>
    </PageSection>
  )
}

export default Industries_Important_Corporate
