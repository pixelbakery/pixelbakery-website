import dynamic from 'next/dynamic'
const LottiePlayer = dynamic(() => import('@parts/LottiePlayer'), {
  ssr: false,
  loading: () => (
    <div className={'relative  w-full h-full bg-wine-100 py-96 flex flex-col justify-center'}>
      <p className='self-center text-4xl font-extrabold text-center text-wine'>Loading...</p>
    </div>
  ),
})

import { InnerWrapper, PageSection } from '@parts'
import { H2AndLead } from '@typography'
import modulation_animation from '@data/lottie_misc/modulation_animation.json'

const Services_Modulation = () => {
  return (
    <PageSection color='pink-lighter' id={'modulation'}>
      <InnerWrapper>
        <div className='grid max-w-lg grid-cols-1 gap-12 mx-auto lg:grid-cols-5 lg:max-w-full'>
          <div className='col-span-1 lg:col-span-3'>
            <LottiePlayer anim={modulation_animation} preserveAspectRatio={false} />
          </div>
          <div className='col-span-1 lg:col-span-2'>
            <H2AndLead
              headerText={'Modulation Package'}
              leadText={'Content that spans all mediums'}
              headerColor={'peach'}
              leadColor={'blue-dark'}
            />
            <p className='mt-8'>
              When we build something, we build it to last. In order for our work to stand the test
              of time, it's important to make sure your campaigns are as far-reaching as possible.
              With that in mind, we produce work that can be 'modulated' into different time formats
              and aspect ratios.
            </p>
            <p>
              <a
                href='https://docs.google.com/spreadsheets/d/12rkypJexTbrg5uxc-vjvKLloR_2BdPVboHR_0cDaOmM/edit?usp=sharing'
                target={'_blank'}
                rel={'noreferrer'}
              >
                Here's
              </a>{' '}
              an example.
            </p>
            <p>
              This makes your campaigns more effective by reaching the right audiences, in the right
              places, the right amount of times.
            </p>
          </div>
        </div>
      </InnerWrapper>
    </PageSection>
  )
}
export default Services_Modulation
