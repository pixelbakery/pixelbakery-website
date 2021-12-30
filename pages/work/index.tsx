import React from 'react'

import Work_Services from '../../components/Work/Work_Services'
import Work_Portfolio from '../../components/Work/Work_Portfolio'
import Work_Client from '../../components/Work/Work_Client'
import Work_Awards from '../../components/Work/Work_Awards'
import PageHeader_VariableHeight from '../../components/PageHeader/PageHeader_VarH'

import Link from 'next/link'
import { getAllProjects } from '../../lib/api_project'
import Project from '../../types/project'
type Props = {
  projects: Project[]
}

// import Test from '../../components/Work/Test'

// import Work_Portfolio from "../components/work-portfolio";
// import Work_Filter from "../components/work-portfolio-filter";
const Work = ({ projects }: Props) => {
  console.log(projects)
  projects.forEach((element) => {
    console.log(element.slug)
  })
  return (
    <div>
      <PageHeader_VariableHeight header='What We Make' subheader='copy copy copy ' />

      {/* <Work_Services /> */}
      {/* <Test /> */}
      <section>
        {projects.map((project) => {
          return (
            <Link as={`/work/${project.slug}`} href='/work/[project]' key={project.slug} passHref>
              <a>
                {' '}
                <h1>{project.slug}</h1>
              </a>
            </Link>
          )
        })}
      </section>
      {/* <Work_Portfolio /> */}
      {/* <Work_Portfolio /> */}
      {/* <Work_Client /> */}
      {/* <Work_Awards /> */}
    </div>
  )
}
export default Work

export const getStaticProps = async () => {
  const projects = getAllProjects(['slug', 'title', 'client'])

  return {
    props: { projects },
  }
}
