import { Work_Portfolio_Card } from '@work'
import cn from 'classnames'
import { PageSection, InnerWrapper } from '@parts'
import { H2, Lead } from '@typography'

interface CaseStudy {
  filePath: string
  data: {
    client: string
    title: string
    tags: string[]
    sources: { src: string; type: string }[]
    vimeoPreview: string
  }
}

interface WorkPortfolioProps {
  allCaseStudies: CaseStudy[]
}

const featuredProjNo = 5

const getFeaturedWork = (allCaseStudies: CaseStudy[]) => {
  return allCaseStudies
    .slice(0, featuredProjNo)
    .map((project, index) => (
      <Work_Portfolio_Card key={project.filePath || index} project={project} />
    ))
}

const getOtherWork = (allCaseStudies: CaseStudy[]) => {
  return allCaseStudies.slice(featuredProjNo).map((project, index) => (
    <div key={project.filePath || index} className={cn({ ['hidden md:block']: index > 12 })}>
      <Work_Portfolio_Card project={project} />
    </div>
  ))
}

const Work_Portfolio = ({ allCaseStudies = [] }: WorkPortfolioProps) => {
  if (!allCaseStudies || !allCaseStudies.length) {
    return (
      <section id='work-portfolio'>
        <div className='py-10 text-center'>
          <H2>No work to display</H2>
          <p>We are unable to display work projects at the moment. Please check back later.</p>
        </div>
      </section>
    )
  }
  return (
    <>
      <PageSection id='portfolio-intro' className='pb-8 lg:mb-0 lg:pb-12'>
        <InnerWrapper>
          <div className='flex justify-center w-full'>
            <H2 className='mx-auto mb-0 text-center lg:mb-0'>
              Work we&apos;re really really really <br className='md:hidden' /> proud of
            </H2>
          </div>
        </InnerWrapper>
      </PageSection>

      <section className='mx-auto max-w-10xl ' id='work-portfolio'>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-1 xl:grid-cols-2 4xl:grid-cols-3'>
          <div className='col-span-1 px-12 py-12 bg-egg'>
            <div className='flex flex-col justify-center h-full'>
              <Lead
                className='pb-0 mx-auto mb-0 text-center lg:mb-0 lg:self-center h-min xl:text-left'
                color='blue-dark'
              >
                Everything we put out into the world is a unique piece of its own. <br />
                <br />
                <span className='text-blue'> Here are a few of our favorites.</span>
              </Lead>
            </div>
          </div>
          {getFeaturedWork(allCaseStudies)}
        </div>

        <div className='grid grid-cols-1 gap-4 my-4 md:grid-cols-2 xl:grid-cols-3 4xl:grid-cols-6'>
          {getOtherWork(allCaseStudies)}
        </div>
      </section>
    </>
  )
}
export default Work_Portfolio
