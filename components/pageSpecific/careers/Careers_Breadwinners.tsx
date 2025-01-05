import Button_Filled from '@parts/Button_Filled'
import { InnerWrapper, PageSection } from '@parts'
import { H2, Lead } from '@typography'

function Careers_Breadwinners() {
  return (
    <PageSection id='brand-ambassador' color='blue-dark'>
      <InnerWrapper>
        <H2 color='cream'>Brand Ambassadors Program</H2>
        <Lead className='text-pink text-xl'>
          If you’re looking for some extra cash in your pocket and a really fun and fulfilling side
          hustle with little commitment, this opportunity is for you.
        </Lead>
        <Button_Filled
          text={'check it out'}
          center={false}
          link='/careers/brand-ambassador'
          bgColor={'pink'}
          textColor={'blue-dark'}
          chevronDirection={'right'}
        />
      </InnerWrapper>
    </PageSection>
  )
}

export default Careers_Breadwinners
