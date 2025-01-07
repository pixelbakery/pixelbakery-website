import dynamic from 'next/dynamic'

const LottiePlayer = dynamic(() => import('@parts/LottiePlayer'), { ssr: false })

import { InnerWrapper, PageSection } from '@parts'
import { H2 } from '@typography'

function Work_Callout() {
  return (
    <PageSection color='blue' id={'nothing-is-lazy'}>
      <InnerWrapper>
        <div className='grid w-full grid-cols-7 py-0 mx-auto gap-x-12 xl:gap-x-0 2xl:gap-x-6 sm:py-8 lg:py-0'>
          <div className='relative flex col-span-7 sm:col-span-3 xl:col-span-2 sm:flex-col sm:justify-center md:justify-start sm:-ml-14 sm:pr-6 sm:-mt-6 md:-ml-0 md:pr-0 md:-mt-6 lg:-mt-12 xl:-mt-10 2xl:-mt-12 max-h-64 sm:max-h-full'>
            <LottiePlayer
              anim={require('@data/lottie_misc/Lottie_BouncingTV_Anim.json')}
              // preserveAspectRatio={false}
            />
          </div>

          <div className='flex flex-col justify-center h-full col-span-7 py-12 sm:col-span-4 xl:col-span-5'>
            <div className='mx-auto'>
              <H2
                color='blue-dark'
                className='self-center pt-0 pb-0 mt-0 mb-0 max-w-max 2xl:max-w-min 2xl:mb-0'
              >
                <span className=' text-blue-dark w-max'>Nothing is Lazy.</span>{' '}
                <span className='mt-6 text-cream w-min xl:break-normal xl:whitespace-nowrap font-geologica'>
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
