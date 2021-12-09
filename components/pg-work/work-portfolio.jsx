import React from 'react'
import next from 'next'
import Link from 'next/link'
import Image from 'next/image'
import PortfolioCard from './work-portfolio-card'
import projects from '../../data/portfolio'

export default function Portfolio() {
  const featuredProjNo = 4

  const getFeaturedWork = () => {
    return projects.slice(0, featuredProjNo).map((project) => {
      return (
        <PortfolioCard
          key={project.name}
          name={project.name}
          client={project.client}
          previewImg={project.previewImg}
          previewImgAlt={project.previewImgAlt}
          url={project.url}
          tags={project.tags}
        />
      )
    })
  }
  const getOtherWork = () => {
    return projects.slice(featuredProjNo + 1).map((project) => {
      return (
        <PortfolioCard
          key={project.name}
          name={project.name}
          client={project.client}
          previewImg={project.previewImg}
          previewImgAlt={project.previewImgAlt}
          url={project.url}
          tags={project.tags}
        />
      )
      // return <h1 key={project.name}>{i}</h1>
    })
  }
  return (
    <section className='' id='work-portfolio'>
      <h2> Work we're really really proud of</h2>
      <div id='portfolioFilter'>
        <button data-filter='*'>All</button>
        <button data-filter='.animation'>Animation & Motion Design</button>
        <button data-filter='.film'>Commercial Film Production</button>
        <button data-filter='.concepting'>Creative Concepting & Strategy</button>
        <button data-filter='.3dmodeling'>3D Modeling</button>
        <button data-filter='.emergingmedia'>Emerging Media</button>
        <button data-filter='.social'>Social Media Kitouts</button>
      </div>

      <div className='grid grid-cols-2 gap-8'>{getFeaturedWork()}</div>

      <div className='my-4 grid grid-cols-3 gap-8'>{getOtherWork()}</div>
    </section>
  )
}
