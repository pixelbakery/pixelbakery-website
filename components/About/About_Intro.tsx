import React from 'react'
import H2 from '../H2'
import InnerWrapper from '../H2'
import PageSection from '../PageSection'

function About_Intro() {
  return (
    <PageSection className='bg-blue' id='team'>
      <InnerWrapper id={'who-we-are'}>
        <div className='mx-auto grid gap-4 grid-cols-1 lg:grid-cols-12'>
          <div className='bg-blue aspect-square lg:aspect-3/4 '>
            <div className='px-12 w-full  flex flex-col justify-center'>
              <H2 color={'blue-dark'} className='col-span-3  text-left mx-auto'>
                who
                <br className='hidden lg:block' /> we
                <br className='hidden lg:block' /> are
              </H2>
            </div>
          </div>
          <div className='-mx-6 px-6  py-8 bg-blue-dark col-span9'>
            <h3 className='text-4xl text-blue lg:text-6xl max-w-3xl'>
              we&apos;re a ragtag team of scrappy designers, animators, and producers
            </h3>
          </div>
          <div className='-mx-6 px-6  py-8  col-span9'>
            <h3 className='text-4xl text-blue-dark lg:text-6xl max-w-3xl'>
              we create intentional and beautiful moments for exciting people that share our beliefs
              and passions
            </h3>
          </div>
        </div>
      </InnerWrapper>
    </PageSection>
  )
}
export default About_Intro
