import { Button_Filled } from '@parts'

function CaseStudies_BecomeAClient() {
  return (
    <section className='px-6 py-16 mt-24 mb-4 bg-pink-lighter'>
      <div className='max-w-md mx-auto lg:max-w-6xl'>
        <h2 className='max-w-md pt-0 mt-0 text-4xl text-center lg:text-left '>
          Get a fancy case study like this
        </h2>
        <p className='max-w-sm py-4 mx-auto mb-4 text-opacity-75 text-wine text-md'>
          Schedule a meeting with Jordan and he’ll buy you a beer or take you out for coffee. We
          believe in building long-term relationships with our clients, so we’re never pushy or “car
          salesman-y”.
        </p>
        <div className='flex flex-row justify-center py-3 my-8'>
          <Button_Filled
            text={'Become a Client'}
            chevronDirection='right'
            link={'/onboarding'}
            textColor={'pink-lighter'}
            bgColor={'pink'}
            center={false}
          />
        </div>
      </div>
    </section>
  )
}
export default CaseStudies_BecomeAClient
