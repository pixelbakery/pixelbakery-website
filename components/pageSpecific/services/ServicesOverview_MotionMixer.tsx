import { InnerWrapper, PageSection, Button_Outlined } from '@parts'
import { H2AndLead } from '@typography'

function ServicesOverview_MotionMixer() {
  return (
    <PageSection id='logo-animation' color='pink-lighter'>
      <InnerWrapper>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-24'>
          <H2AndLead
            headerColor='blue'
            className='px-8 mb-6 2xl:mb-10'
            headerText={'🥣 Motion Mixer'}
            leadText={'bring your logo to life with an eye-catching and memorable animation'}
          ></H2AndLead>
          <div className='px-8'>
            <p>
              We’ll take that beautifully vectorized logo you already have, and make it move in a
              way that shouts your brand’s persona.
            </p>
            <Button_Outlined
              text={'Logo Animation Services'}
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
