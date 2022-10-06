import Button_Filled from '@parts/Button_Filled'
import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import H2 from '@typography/H2'
import Lead from '@typography/Lead'
import Link from 'next/link'

function Careers_Breadwinners() {
  return (
    <Link hrefLang={'en-US'} href={'/'} passHref>
      <PageSection id='breadwinners' color='blue-dark' className=' py-0 lg:py-4 xl:py-12 xl:mt-24'>
        <InnerWrapper>
          <H2 className='text-cream text-2xl'>breadwinner program</H2>
          <Lead className='text-pink text-xl'>
            If you’re looking for some extra cash in your pocket and a really fun and fulfilling
            side hustle with little commitment, this opportunity is for you.
          </Lead>
          <Button_Filled
            text={'check it out'}
            center={false}
            link='/careers/breadwinners-program'
            bgColor={'pink'}
            textColor={'blue-dark'}
            chevronDirection={'right'}
          />
        </InnerWrapper>
      </PageSection>
    </Link>
  )
}

export default Careers_Breadwinners
