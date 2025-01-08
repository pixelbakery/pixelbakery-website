import { PageSection, InnerWrapper, Button_Filled } from '@parts'
import { H2AndLead } from '@typography'
const Careers_Freelancers = () => {
  return (
    <PageSection id='freelancers' color='pink'>
      <InnerWrapper>
        <div className='flex flex-col justify-center'>
          <H2AndLead
            center={true}
            headerColor='cream'
            headerText='Join Our Freelancer Network'
            leadColor='cream'
            leadText={`We're always on the lookout to expand our network of talented animators, videographers,
            and producers.`}
            className='self-center mx-auto text-center'
          />
          <Button_Filled
            text={'Submit an Application'}
            link={'/careers/freelancers'}
            center={true}
            bgColor={'egg'}
            textColor={'pink'}
            chevronDirection={'right'}
            className='my-0'
          />
        </div>
      </InnerWrapper>
    </PageSection>
  )
}

export default Careers_Freelancers
