import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import H2 from '@typography/H2'
import Image from 'next/image'

function CaseStudies_Testimonial() {
  return (
    <PageSection color='pink-light' className=' border-t-32 border-t-pink'>
      <InnerWrapper>
        <div className='grid grid-cols-5 gap-12'>
          <div className='col-span-5 md:col-span-3 xl:col-span-3'>
            <H2>Why Pixel Bakery?</H2>

            <p>
              “Pixel Bakery has been an incredible partners of ours for nearly 2 years. From
              photography, to graphic design, to creative direction they helped bring the SNACKLINS
              brand to life. They are flexible to our needs, super organized and responsive, and
              deliver really great results. I think the thing that I'm most impressed by is their
              ability to learn our brand and get better over time. That's the best thing you can ask
              for in a partner.”
            </p>
            <div className='flex gap-x-4'>
              <div className='w-16'>
                <div className='w-16 h-16 rounded-full overflow-hidden relative flex-grow'>
                  <Image
                    src={'/img/case-studies/snacklins/Jeremy_Sherman_Headshot.jpg'}
                    alt={'Jeremy Sherman is the marketing director for SNACKLINS in Washington, DC'}
                    layout={'fill'}
                    objectFit={'cover'}
                    className={''}
                  />
                </div>
              </div>
              <div className='self-center'>
                <p className='font-bold text-md my-0 py-0'>Jeremy Sherman</p>
                <span className='block text-peach font-semibold text-md leading-none mt-1 py-0'>
                  Marketing &amp; E-Commerce Manager
                </span>
              </div>
            </div>
          </div>
          <div className='col-span-5 md:col-span-2 xl:col-span-2 order-first xl:order-last block md:block 2xl:block'>
            <div className='w-full aspect-h-1 aspect-w-1'>
              <Image
                src={'/img/case-studies/snacklins/SNACK_01.png'}
                layout='fill'
                objectFit='cover'
              />
            </div>
          </div>
        </div>
      </InnerWrapper>
    </PageSection>
  )
}
export default CaseStudies_Testimonial
