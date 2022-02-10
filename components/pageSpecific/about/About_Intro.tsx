import H2 from '@typography/H2'

import InnerWrapper from '@parts/H2'
import Lead from '@typography/Lead'
import PageSection from '@parts/PageSection'

function About_Intro() {
  return (
    <PageSection className='bg-blue' id='team'>
      <InnerWrapper id={'who-we-are'}>
        <div className='grid grid-cols-1 gap-0'>
          <div className='col-span-1'>
            <H2 color='blue-dark' className='-mb-3 pl-1 pb-0'>
              Who We Are
            </H2>
          </div>
          <div className='col-span-1 bg-blue-dark px-12 py-12'>
            <Lead color='blue' className='pt-4'>
              we&apos;re a ragtag team of scrappy designers, animators, and producers
            </Lead>
            <Lead color='blue' className='mb-0 pb-0'>
              we create intentional and beautiful moments for exciting people that share our beliefs
              and passions
            </Lead>
          </div>
        </div>
        {/* <div className='mx-auto grid gap-4 grid-cols-1 lg:grid-cols-12'>
          <div className='bg-blue aspect-square lg:aspect-3/4 '>
            <div className='px-12 w-full  flex flex-col justify-center'>
              <H2 color={'blue-dark'} className='col-span-3  text-left'>
                who
                <br className='hidden lg:block' /> we
                <br className='hidden lg:block' /> are
              </H2>
            </div>
          </div>
          <div className='-mx-6 px-6  py-8 bg-blue-dark col-span9'>
            <Lead className='text-4xl text-blue lg:text-6xl max-w-3xl'>
              we&apos;re a ragtag team of scrappy designers, animators, and producers
            </Lead>
          </div>
          <div className='-mx-6 px-6  py-8  col-span9'>
            <Lead className='text-4xl text-blue-dark lg:text-6xl max-w-3xl'>
              we create intentional and beautiful moments for exciting people that share our beliefs
              and passions
            </Lead>
          </div>
        </div> */}
      </InnerWrapper>
    </PageSection>
  )
}
export default About_Intro
