import { InnerWrapper, PageSection } from '@parts'
import { H2 } from '@typography'
import Onboarding_ExpectationsRow from './Onboarding_Expectations_Row'

function Onboarding_Expectations() {
  return (
    <PageSection id='onboarding-expectations'>
      <InnerWrapper>
        <div className='pb-8'>
          <H2> What you can expect from working with PBDS </H2>
        </div>

        <div>
          <Onboarding_ExpectationsRow
            flip={true}
            number={'1'}
            header={'We never ask for the keys to the kingdom right away.'}
            bodyCopy={
              " We know that trust is something that is earned over time. Our initial projects with our clients usually start small. This is a relationship after all, and it's important to us that both parties are happy and healthy."
            }
          />
          <Onboarding_ExpectationsRow
            flip={false}
            number={'2'}
            header={"We're not here to tell you what to do."}
            bodyCopy={
              "Sure, we're probably better at animating than you are, but we'll never know your brand more intimately than you will. We can advise, strategize, suggest, and execute– but we won't barge in thinking we know what's best."
            }
          />
          <Onboarding_ExpectationsRow
            flip={true}
            number={'3'}
            header={'Your success is our success.'}
            bodyCopy={
              ' We believe it is possible to create thoughtful and purposeful design while hitting deadlines and turning projects around on time. Our team of planners and designers work together to execute creative ideas with an intense concentration and attention to detail. '
            }
          />
          <Onboarding_ExpectationsRow
            flip={false}
            number={'4'}
            header={'We act as an extension of your team.'}
            bodyCopy={
              'Pixel Bakery operates   in lock step with your existing internal marketing team, or other vendors you partner with. Pixel Bakery comes in and helps smooth over creative potholes you might not otherwise have the bandwidth, energy, or capability to fill yourselves.  '
            }
          />
        </div>
      </InnerWrapper>
    </PageSection>
  )
}

export default Onboarding_Expectations
