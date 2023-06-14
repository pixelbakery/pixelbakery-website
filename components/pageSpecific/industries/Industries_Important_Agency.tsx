import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import H2 from '@typography/H2'

const Industries_Important_Agency = () => {
  return (
    <PageSection id='why-important'>
      <InnerWrapper>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-12'>
          <div className=''>
            <H2>Why Should Agencies Outsource to Us?</H2>
          </div>
          <div className=''>
            <p className='font-bold'>Let us take some of the load off of your back</p>
            <p>
              When we work with other production companies or agencies, we come on and act as an
              extension of your team. We come in and pave over potholes that you otherwise couldn't
              fill yourselves– wether that's due to bandwidth, time, skillset, or otherwise.
            </p>
            <p>
              We know it's a fine line between collaboration and competition when working with other
              production companies, so we take boundaries and chain of command very seriously. We
              will only communicate with you and never reach out to your client, and will respect
              the heirarchy that you establish.
            </p>
            <p>We love working with:</p>
            <ul className='list-disc list-inside mt-0 pt-0 pl-4 text-lg text-wine'>
              <li>SEO agencies</li>
              <li>Marketing companies</li>
              <li>Advertising agencies</li>
              <li>Other production studios</li>
              <li>Social media management agencies</li>
              <li>Graphic designers</li>
              <li>Branding agencies</li>
            </ul>
          </div>
        </div>
      </InnerWrapper>
    </PageSection>
  )
}

export default Industries_Important_Agency
