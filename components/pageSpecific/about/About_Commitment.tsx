import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import H2 from '@typography/H2'

import Lead from '@typography/Lead'

function About_Commitment() {
  return (
    <PageSection color='yellow'>
      <InnerWrapper>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-18'>
          <div className='col-span-1'>
            <span className=' text-center lg:text-left text-3xl lg:text-4xl block mb-4 lg:mb-6'>
              🏳️‍🌈 🌍 ✊ ♻️ 🌱 👩‍💼 🎨
            </span>
            <H2 className='2xl:mb-8'>Our Commitment to a Better World</H2>
            <Lead color='blue-dark'>
              Our fight for equity, social justice, and a planet that isn't a cold, dead place void
              of any life as we know it <br />
            </Lead>
          </div>
          <div className='col-span-1 lg:pl-24 text-blue-dark text-base lg:text-2xl font-medium'>
            <p className='mb-8'>
              We only bring on 20 clients every year, so it's important that we build relationships
              with ones that align with our values. We seek out clients that:
            </p>
            <ul className='list-decimal list-outside grid gap-y-4'>
              <li className=' bg-cream py-4 px-6 rounded-lg drop-shadow-sm font-semibld'>
                pay a living wage and care about the health and safety of their employees
              </li>
              <li className=' bg-cream py-4 px-6 rounded-lg drop-shadow-sm font-semibld'>
                promote products, practices, and movements that help combat climate change
              </li>
              <li className=' bg-cream py-4 px-6 rounded-lg drop-shadow-sm font-semibld'>
                {' '}
                Are woman, LGBTQ+, or BIPOC owned
              </li>
              {/* <li className='my-4'>
                Are innovative and push our society towards a world we want future generations to
                live in
              </li> */}
              <li className='bg-cream py-4 px-6 rounded-lg drop-shadow-sm font-semibld'>
                Believe in the power of art and design, and the important role it plays in building
                culture
              </li>
            </ul>
          </div>
        </div>
      </InnerWrapper>
    </PageSection>
  )
}
export default About_Commitment
