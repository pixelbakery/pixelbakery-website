import Button_Outlined from '@parts/Button_Outlined'
import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import H2AndLead from '@typography/H2AndLead'

function ServicesOverview_MotionMixer() {
  return (
    <PageSection id='logo-animation' color='pink-lighter'>
      <InnerWrapper>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-24'>
          <H2AndLead
            headerColor='blue'
            className='mb-6 2xl:mb-10 px-8'
            headerText={'🥣 Motion Mixer'}
            leadText={'bring your logo to life with an eye-catching and memorable animation'}
          ></H2AndLead>
          <div className='px-8'>
            <p>
              We’ll take that beautifully vectorized logo you already have, and make it move in a
              way that shouts your brand’s persona.
            </p>
            <Button_Outlined
              text={'More'}
              link={'/logo-animation'}
              color={'blue'}
              chevronDirection='right'
            />
          </div>
        </div>
      </InnerWrapper>
    </PageSection>
  )
}
export default ServicesOverview_MotionMixer
