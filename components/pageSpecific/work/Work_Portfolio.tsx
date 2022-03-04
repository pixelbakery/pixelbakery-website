import Work_Portfolio_Card from './Work_Portfolio_Card'
import portfolio from '@data/portfolio'
import cn from 'classnames'
import PageSection from '@parts/PageSection'
import InnerWrapper from '@parts/InnerWrapper'
import H2 from '@typography/H2'

import Lead from '@typography/Lead'

const Work_Portfolio = () => {
  const featuredProjNo = 4

  const projectPath = (slug) => {
    return `/work/case-studies/${slug}`
  }
  const projects = portfolio.sort((post1, post2) => (post1.date > post2.date ? -1 : 1))

  const getFeaturedWork = () => {
    return projects.slice(0, featuredProjNo).map((project) => {
      return (
        <Work_Portfolio_Card
          key={project.title}
          name={project.title}
          client={project.client}
          previewImg={project.previewImg}
          hoverVideo={project.hoverVideo}
          previewAlt={`${project.tags[0]} project ${project.name} for ${project.client}`}
          url={projectPath(project.slug)}
          tags={project.tags}
        />
      )
    })
  }
  const getOtherWork = () => {
    return projects.slice(featuredProjNo).map((project, index) => {
      return (
        <div key={project.title} className={cn({ ['hidden md:block']: index > 5 })}>
          <Work_Portfolio_Card
            name={project.title}
            client={project.client}
            previewImg={project.previewImg}
            hoverVideo={project.hoverVideo}
            previewAlt={`${project.tags[0]} project ${project.name} for ${project.client}`}
            url={projectPath(project.slug)}
            tags={project.tags}
          />
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
