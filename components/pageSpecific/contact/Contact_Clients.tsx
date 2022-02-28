import Link from 'next/link'
import PageSection from '@parts/PageSection'
import InnerWrapper from '@parts/InnerWrapper'
import H2 from '@typography/H2'

import cn from 'classnames'
import gsap from 'gsap'
import Lead from '@typography/Lead'
import Image from 'next/image'
import Button_Filled from '@parts/Button_Filled'

function Contct_Clients() {
  return (
    <section
      className='lg:px-28 my-4  lg:pb-40 lg:mt-64 grid grid-cols-1 lg:grid-cols-2 gap-4 '
      id='onboarding'
    >
      <div className='-mt-20 hidden lg:block  -mr-20 col-span-1 h-full'>
        <div className='relative shadow-lg  h-full'>
          <Image
            src={'/img/pixel-bakery-office.jpeg'}
            layout='fill'
            objectFit='cover'
            className='bg-pink'
            blurDataURL='true'
            alt="pixel bakery's main office in lincoln, nebraska"
          />
        </div>
      </div>
      <div className=' col-span-1 bg-pink py-24 px-12 lg:pl-32 lg:pr-24'>
        <div className=' grid grid-cols-1'>
          <div className='col-span-1'>
            <H2 color='pink-light'>Become a client</H2>
          </div>
          <div className='col-span-1'>
            <Lead color='peach' className='leading-tight'>
              Schedule a meeting with our leadership team to discuss your next big project and to
              see if we’re a good fit for one another! We like to think of discovery meetings as
              speed dating:
            </Lead>
            <p className='text-cream font-semibold text-xl'>
              seeing if our goals and missions align and making sure there’s enough chemistry there
              for something long-lasting to evolve. We believe in building long-term relationships
              with our clients, so making sure all of these pieces are in check is of utmost
              importance.
            </p>
          </div>
        </div>
        <Button_Filled
          link='/onboarding'
          text='start a project'
          textColor='peach'
          bgColor='pink-light'
          center={true}
          chevronDirection={'right'}
        />
      </div>
    </section>
  )
}
export default Contct_Clients
