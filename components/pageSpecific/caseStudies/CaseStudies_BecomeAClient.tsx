import ButtonFilled from '@parts/Button_Filled'

function CaseStudies_BecomeAClient() {
  return (
    <section className='px-6 mb-4 mt-24 py-16 bg-pink-light'>
      <div className='mx-auto max-w-md lg:max-w-6xl'>
        <h2 className='text-center lg:text-left mt-0 pt-0 text-4xl max-w-md '>
          Get a fancy case study like this
        </h2>
        <p className='mx-auto py-4  mb-4 text-wine text-md max-w-sm text-opacity-75'>
          Schedule a meeting with Jordan and he’ll buy you a beer or take you out for coffee. We
          believe in building long-term relationships with our clients, so we’re never pushy or “car
          salesman-y”.
        </p>
        <div className='my-8 py-3  flex flex-row justify-center'>
          <ButtonFilled
            text={'Become a Client'}
            chevronDirection='right'
            link={'/onboarding'}
            textColor={'pink-light'}
            bgColor={'pink'}
          />
        </div>
      </div>
    </section>
  )
}
export default CaseStudies_BecomeAClient
