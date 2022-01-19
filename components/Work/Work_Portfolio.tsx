import React from 'react'
import next from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Work_Portfolio_Card from './Work_Portfolio_Card'
import portfolio from '../../data/portfolio'

import cn from 'classnames'
// return {
//   props: { caseStudies: data },
// }
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
        <div className={cn({ ['hidden md:block']: index > 5 })}>
          <Work_Portfolio_Card
            key={project.title}
            name={project.title}
            client={project.client}
            previewImg={project.previewImg}
            previewAlt={`${project.tags[0]} project ${project.name} for ${project.client}`}
            url={projectPath(project.slug)}
            tags={project.tags}
          />
        </div>
      )
      // return <h1 key={project.name}>{i}</h1>
    })
  }
  return (
    <section className='' id='work-portfolio'>
      <h2> Work we&apos;re really really proud of</h2>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>{getFeaturedWork()}</div>

      <div className='my-4 grid grid-cols-1 md:grid-cols-3 gap-4'>{getOtherWork()}</div>
    </section>
  )
}
export default Work_Portfolio
