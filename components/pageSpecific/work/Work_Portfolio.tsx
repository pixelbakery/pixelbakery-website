import Work_Portfolio_Card from './Work_Portfolio_Card'
import cn from 'classnames'
import PageSection from '@parts/PageSection'
import InnerWrapper from '@parts/InnerWrapper'
import H2 from '@typography/H2'

import Lead from '@typography/Lead'

const featuredProjNo = 5

const getFeaturedWork = (allCaseStudies) => {
  return allCaseStudies.slice(0, featuredProjNo).map((project, index) => {
    return <Work_Portfolio_Card key={index} project={project} />
  })
}

const getOtherWork = (allCaseStudies) => {
  return allCaseStudies.slice(featuredProjNo).map((project, index) => {
    return (
      <div key={index} className={cn({ ['hidden md:block']: index > 12 })}>
        <Work_Portfolio_Card project={project} />
      </div>
    )
  })
}

const Work_Portfolio = ({ allCaseStudies }) => {
  return (
    <>
      <PageSection id='portfolio-intro' className='lg:mb-0 pb-8 lg:pb-12'>
        <InnerWrapper>
          <div className='w-full flex justify-center'>
            <H2 className='mb-0 lg:mb-0 text-center mx-auto'>
              Work we&apos;re really really really <br className='md:hidden' /> proud of
            </H2>
          </div>
        </InnerWrapper>
      </PageSection>

      <section className='mx-auto max-w-10xl ' id='work-portfolio'>
        {/* <div className='w-full grid grid-cols-1 gap-4 mb-4'>{getLatestWork(allCaseStudies)}</div> */}

        <div className='grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 4xl:grid-cols-3 gap-4'>
          <div className='col-span-1 bg-egg px-12 py-12'>
            <div className='flex flex-col justify-center h-full'>
              <Lead color='blue-dark mb-0 pb-0 lg:mb-0 lg:self-center h-min text-center xl:text-left mx-auto'>
                Everything we put out into the world is a unique piece of its own. <br />
                <br />
                <span className='text-blue'> Here are a few of our favorites.</span>
              </Lead>
            </div>
          </div>
          {getFeaturedWork(allCaseStudies)}
        </div>

        <div className='my-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 4xl:grid-cols-6 gap-4'>
          {getOtherWork(allCaseStudies)}
        </div>
      </section>
    </>
  )
}
export default Work_Portfolio
