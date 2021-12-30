import React, { useRouter } from 'next/router'
import ErrorPage from 'next/error'

import { getProjectBySlug, getAllProjects } from '../../lib/api_project'
import Project from '../../types/project'
import Head from 'next/head'
import markdownToHtml from '../../lib/markdownToHtml'

type Props = {
  project: Project[]
}

const Project = ({ project }: Props) => {
  const router = useRouter()
  if (!router.isFallback && !project?.slug) {
    return <ErrorPage statusCode={404} />
  }
  // const allPosts
  // console.log(matchingAuthor)
  return <main></main>
}

export default Project

type Params = {
  params: {
    project: Project
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  //s const project = getProjectBySlug(params.slug, ['slug'])
  const project = getProjectBySlug(params.slug, ['slug'])
  const allProjects = getAllProjects(['slug'])
  // const content = await markdownToHtml(project.content || '')
  return {
    props: {
      project: {
        ...project,
      },
    },
  }
}

export async function getStaticPaths() {
  const projects = getAllProjects(['slug'])

  return {
    paths: projects.map((project) => {
      return {
        params: { project: project },
      }
    }),
    fallback: false,
  }
}
