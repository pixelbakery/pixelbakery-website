import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import H2AndLead from '@typography/H2AndLead'
import dynamic from 'next/dynamic'
const LottiePlayer = dynamic(() => import('@parts/LottiePlayer'), { ssr: false })
import modulation_animation from '@data/lottie_misc/modulation_animation.json'
const Services_Modulation = () => {
  return (
    <PageSection color='pink-light'>
      <InnerWrapper>
        <div className=' grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-lg lg:max-w-full mx-auto'>
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
