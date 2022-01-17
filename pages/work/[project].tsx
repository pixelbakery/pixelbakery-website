import React, { useRouter } from 'next/router'
import ProjectType from '../../types/project'
import { getAllProjects, getProjectBySlug } from '../../lib/api_project'

type Props = {
  project: ProjectType
}
const Project = ({ project }: Props) => {
  return (
    <div className='pt-32'>
      <p>Title: {project.title}</p>
      {project.content}
    </div>
  )
}

export default Project

type Params = {
  params: {
    project: string
    slug: string
    title: string
  }
}
export async function getStaticProps({ params }: Params) {
  const project = getProjectBySlug(params.project, ['title', 'message', 'content'])

  const content = (await project.content) || ''
  const title = (await project.title) || ''
  return {
    props: {
      project: {
        ...project,
        content,
        title,
      },
    },
  }
}
export async function getStaticPaths() {
  const projects = getAllProjects(['slug'])

  return {
    paths: projects.map((project) => {
      return {
        params: {
          project: project.slug,
          title: project.title,
        },
      }
    }),
    fallback: false,
  }
}
