import dynamic from 'next/dynamic'
import InnerWrapper from '@parts/InnerWrapper'
import Main from '@parts/Main'
import PageSection from '@parts/PageSection'
import H2 from '@typography/H2'

function Process() {
  return (
    <Main>
      <PageSection id='process'>
        <InnerWrapper>
          <H2>01. Discovery</H2>
        </InnerWrapper>
      </PageSection>
    </Main>
  )
}
export default Process
