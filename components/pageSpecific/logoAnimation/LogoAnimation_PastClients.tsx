import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import H2 from '@typography/H2'
import Lead from '@typography/Lead'
import LogoAnimation_PastClients_Card from './LogoAnimation_PastClients_Card'

function LogoAnimation_PastClients() {
  return (
    <PageSection className='my-4 px-12 py-12' id='descriptions'>
      <InnerWrapper className='mx-auto max-w-6xl'>
        <div className='mb-12'>
          <H2 className='pb-6'>Past Clients</H2>
          <Lead>copy copy copy copy copy</Lead>
        </div>
        <div className='grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 lg:gap-16'>
          <LogoAnimation_PastClients_Card video='679264267' client='Sampson Construction' />
          <LogoAnimation_PastClients_Card video='679263727' client='Doane University' />
          <LogoAnimation_PastClients_Card video='679264144' client='The Northern Creative' />
          <LogoAnimation_PastClients_Card video='679263746' client='The Foundry' />
          <LogoAnimation_PastClients_Card video='679263714' client='Caitlyn Bea' />
          <LogoAnimation_PastClients_Card video='679263815' client='Hudl' />
          <LogoAnimation_PastClients_Card video='679263655' client='Blackboard Design' />
          <LogoAnimation_PastClients_Card video='679263840' client='Nelnet' />
          <LogoAnimation_PastClients_Card video='679263689' client='Blue Blood' />
        </div>
      </InnerWrapper>
    </PageSection>
  )
}
export default LogoAnimation_PastClients
