import { InnerWrapper, PageSection, Button_Filled } from '@parts'
import { H2AndLead } from '@typography'

function Careers_JobShadow() {
  return (
    <PageSection color='pink' id={'job-shadows'}>
      <InnerWrapper>
        <H2AndLead
          headerText={'Looking for job shadows?'}
          leadText={'yup, we do those too. sometimes. '}
        />
        <div className='py-3'>
          <Button_Filled
            link={'/careers/job-shadow'}
            text={'learn more here'}
            center={false}
            bgColor={'peach'}
            textColor={'cream'}
            chevronDirection={'right'}
          />
        </div>
      </InnerWrapper>
    </PageSection>
  )
}
export default Careers_JobShadow
