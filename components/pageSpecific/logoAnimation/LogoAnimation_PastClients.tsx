import PropTypes from 'prop-types'
import LogoAnimation_PastClients_Card from './LogoAnimation_PastClients_Card'

function LogoAnimation_PastClients() {
  return (
    <section className='my-4 px-12 py-12' id='descriptions'>
      <div className='mx-auto max-w-6xl'>
        <div className='mb-12'>
          <h2 className='pb-6'>Past Clients</h2>
          <p>copy copy copy copy copy</p>
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
      </div>
    </section>
  )
}
export default LogoAnimation_PastClients
