import Work_Portfolio_Card from './Work_Portfolio_Card'
import cn from 'classnames'
import PageSection from '@parts/PageSection'
import InnerWrapper from '@parts/InnerWrapper'
import H2 from '@typography/H2'

import Lead from '@typography/Lead'

const Work_Portfolio = ({ allCaseStudies }) => {
  const featuredProjNo = 4

  const allActiveCaseStudies = allCaseStudies.filter((project) => project.data.active)
  const getFeaturedWork = () => {
    return allActiveCaseStudies.slice(0, featuredProjNo).map((project, index) => {
      return <Work_Portfolio_Card key={index} project={project} />
    })
  }
  const getOtherWork = () => {
    return allActiveCaseStudies.slice(featuredProjNo).map((project, index) => {
      return (
        <div key={index} className={cn({ ['hidden md:block']: index > 5 })}>
          <Work_Portfolio_Card project={project} />
        </div>
      )
    })
  }

  return (
    <>
      <PageSection>
        <InnerWrapper>
          <H2 className='mb-6'>Work we&apos;re really really really proud of</H2>
          <Lead color='blue-dark'>
            Everything we put out into the world is a unique piece of its own. <br />
            <br />
            Here are a few of our favorites.
          </Lead>
        </InnerWrapper>
      </PageSection>
      <section className='' id='work-portfolio'>
        <div className='grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 gap-4'>
          {getFeaturedWork()}
        </div>

        <div className='my-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'>
          {getOtherWork()}
        </div>
      </section>
    </>
  )
}
export default Work_Portfolio
