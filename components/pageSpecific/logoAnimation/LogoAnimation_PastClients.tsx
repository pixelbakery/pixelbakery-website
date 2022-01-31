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
        <div className='grid grid-cols-2 gap-16'>
          <LogoAnimation_PastClients_Card video='560587790' client='Sampson Construction' />
          <LogoAnimation_PastClients_Card video='576842524' client='Doane University' />
          <LogoAnimation_PastClients_Card video='371504578' client='The Northern Creative' />
          <LogoAnimation_PastClients_Card video='374728852' client='The Foundry' />
          <LogoAnimation_PastClients_Card video='368862122' client='Caitlyn Bea' />
          <LogoAnimation_PastClients_Card video='326688726' client='Hudl' />
          <LogoAnimation_PastClients_Card video='386067928' client='Blackboard Design' />
          <LogoAnimation_PastClients_Card video='336693131' client='Nelnet' />
          <LogoAnimation_PastClients_Card video='210304515' client='Blue Blood' />
        </div>
      </div>
    </section>
  )
}
export default LogoAnimation_PastClients
