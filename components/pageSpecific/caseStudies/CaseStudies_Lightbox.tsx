import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import H2 from '@typography/H2'
import Lightbox from '@parts/Lightbox'

function CaseStudies_Lightbox() {
  return (
    <PageSection color='cream'>
      <InnerWrapper>
        <H2>Emails</H2>
        <p>
          When it comes to email marketing, SNACKLINS likes to keep it short and sweet—or salty!
          With a mix of punny copy, themed concepts, and delicious visuals, our vibrant emails keep
          the customer coming back for more.
        </p>
        <div className='grid grid-cols-12' onClick={(Lightbox('asdf' as any), lightboxOpen={true})}>
          Lightbox Goes Here
        </div>
      </InnerWrapper>
    </PageSection>
  )
}
export default CaseStudies_Lightbox
