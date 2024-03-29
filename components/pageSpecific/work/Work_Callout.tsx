import dynamic from 'next/dynamic'
const LottiePlayer = dynamic(() => import('@parts/LottiePlayer'), { ssr: false })
import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import H2 from '@typography/H2'

function Work_Callout() {
  return (
    <PageSection color='blue' id={'nothing-is-lazy'}>
      <InnerWrapper>
        <div className='w-full grid grid-cols-7 gap-x-12 xl:gap-x-0 2xl:gap-x-6 mx-auto py-0 sm:py-8 lg:py-0'>
          <div className='col-span-7 sm:col-span-3 xl:col-span-2 relative flex sm:flex-col sm:justify-center md:justify-start sm:-ml-14 sm:pr-6 sm:-mt-6 md:-ml-0 md:pr-0 md:-mt-6 lg:-mt-12 xl:-mt-10 2xl:-mt-12 max-h-64 sm:max-h-full'>
            <LottiePlayer
              anim={require('@data/lottie_misc/Lottie_BouncingTV_Anim.json')}
              preserveAspectRatio={false}
            />
          </div>

          <div className='col-span-7 sm:col-span-4 xl:col-span-5 h-full  flex flex-col justify-center py-12'>
            <div className='mx-auto'>
              <H2
                color='blue-dark'
                className=' max-w-max 2xl:max-w-min mb-0 pb-0 pt-0 mt-0 2xl:mb-0 self-center'
              >
                <span className=' text-blue-dark  w-max '>Nothing is Lazy.</span>{' '}
                <span className=' text-cream  mt-6 w-min xl:break-normal xl:whitespace-nowrap font-gilroy'>
                  Everything is Intentional.
                </span>
              </H2>
            </div>
          </div>
        </div>
      </InnerWrapper>
    </PageSection>
  )
}
export default Work_Callout
