import PageSection from '@parts/PageSection'
import InnerWrapper from '@parts/InnerWrapper'
import H2 from '@typography/H2'
import Lead from '@typography/Lead'
import Button_Filled from '@parts/Button_Filled'

function Contct_Clients() {
  return (
    <PageSection color='pink' id={'contact'}>
      <InnerWrapper>
        <div className='grid grid-cols-1 lg:grid-cols-2 w-full gap-x-24'>
          <div className='col-span-1'>
            <H2 color='pink-light'>Become a client</H2>
          </div>
          <div className='col-span-1'>
            <Lead color='peach' className='leading-tight'>
              Schedule a meeting with our leadership team to discuss your next big project and to
              see if we’re a good fit for one another! <br />
              <br />
              We like to think of discovery meetings as speed dating:
            </Lead>
            <p className='text-cream font-semibold text-xl lg:-mt-8 mb-16'>
              Seeing if our goals and missions align and making sure there’s enough chemistry there
              for something long-lasting to evolve. We believe in building long-term relationships
              with our clients, so making sure all of these pieces are in check is of utmost
              importance.
            </p>
            <Button_Filled
              link='/onboarding'
              text='start a project'
              textColor='peach'
              bgColor='pink-light'
              center={false}
              chevronDirection={'right'}
            />
          </div>
        </div>
      </InnerWrapper>
    </PageSection>
  )
}
export default Contct_Clients
