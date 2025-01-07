//MDX & frontmatter imports
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import {
  peopleFilePaths,
  PEOPLE_PATH,
  postFilePaths,
  POSTS_PATH,
  caseStudyFilePaths,
  CASESTUDIES_PATH,
} from '@lib/mdxUtils'
import { serialize } from 'next-mdx-remote/serialize'

import type { MDXRemoteSerializeResult } from 'next-mdx-remote'
import type { PersonWithFilePath, Awards } from '@/types/people'
import type { Post } from '@/types/posts'
import type { CaseStudy } from '@/types/caseStudies'

import {
  About_Team_Header,
  About_Team_PrevNext,
  About_Team_SEO,
  About_Team_Details,
  About_Team_Awards,
} from '@about'

import { GetStaticPaths, GetStaticProps } from 'next'
import type { ReactElement } from 'react'
import Layout_Default from 'components/layouts/Layout_Default'
import About_Team_MatchingPosts from '@about/About_Team_MatchingPosts'
import About_Team_MatchingCaseStudies from '@about/About_Team_MatchingCaseStudies'
import { Credit } from '@types'

// -- Types ---------------------------------------------------------------------

interface PersonWithBioLink extends PersonWithFilePath {
  bioLink: string
}

interface PagePeopleProps {
  matchingCaseStudies: CaseStudy[]
  slug: string
  source: MDXRemoteSerializeResult
  frontMatter: PersonWithFilePath
  matchingAuthorPosts: Post[]
  prevIndex: PersonWithFilePath
  nextIndex: PersonWithFilePath
  awards: Awards
}

function Page_People({
  matchingCaseStudies,
  slug,
  source,
  frontMatter,
  matchingAuthorPosts,
  prevIndex,
  nextIndex,
  awards,
}: PagePeopleProps) {
  return (
    <>
      <About_Team_SEO frontMatter={frontMatter} slug={slug} />
      <About_Team_Header source={source} frontMatter={frontMatter} />
      <About_Team_Details frontMatter={frontMatter} />
      <About_Team_MatchingPosts matchingAuthorPosts={matchingAuthorPosts} name={frontMatter.name} />
      <About_Team_Awards awards={awards} name={frontMatter.name}/>
      <About_Team_MatchingCaseStudies
        matchingCaseStudies={matchingCaseStudies}
        name={frontMatter.name}
      />
      <About_Team_PrevNext
        active={frontMatter.active}
        prev={prevIndex}
        next={nextIndex}
        name={frontMatter.name}
      />
    </>
  )
}

// -- getStaticProps -----------------------------------------------------------

export const getStaticProps: GetStaticProps<PagePeopleProps, { slug: string }> = async ({
  params,
}) => {
  if (!params?.slug) return { notFound: true }

  const personFilePath = path.join(PEOPLE_PATH, `${params.slug}.mdx`)
  if (!fs.existsSync(personFilePath)) return { notFound: true }

  const { content, data: rawFrontMatter } = matter(fs.readFileSync(personFilePath, 'utf8'))
  const mdxSource = await serialize(content, { scope: rawFrontMatter })

  const frontMatter: PersonWithFilePath = {
    ...rawFrontMatter,
    filePath: personFilePath,
    bioLink: `/about/${params.slug}`,
    name: rawFrontMatter.name || 'Unnamed Person',
    active: rawFrontMatter.active ?? false,
    slug: params.slug,
  }

  const loadFiles = async (filePaths: string[], basePath: string) =>
    Promise.all(
      filePaths.map(async (filePath) => {
        const source = await fs.promises.readFile(path.join(basePath, filePath), 'utf8')
        const { data } = matter(source)
        return { data, filePath }
      })
    )

  const [allPosts, allPeople, allCaseStudies] = await Promise.all([
    loadFiles(postFilePaths, POSTS_PATH),
    loadFiles(peopleFilePaths, PEOPLE_PATH),
    loadFiles(caseStudyFilePaths, CASESTUDIES_PATH),
  ])

  const matchingAuthorPosts: Post[] = allPosts
    .filter(
      (post): post is Post =>
        post.data.title &&
        post.data.author &&
        post.data.categories &&
        post.data.date &&
        post.data.coverImage &&
        post.data.excerpt &&
        post.data.author?.name?.toUpperCase() === frontMatter.name.toUpperCase() &&
        post.data.active
    )
    .sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime())
    .slice(0, 11)

const activePeople: PersonWithBioLink[] = allPeople
  .filter((person) => person.data.active) // Filter active people
  .map((person) => ({
    name: person.data.name, // Extract the name
    active: person.data.active, // Extract the active status
    slug: person.data.slug, // Extract the slug
    bioLink: `/about/${person.filePath.replace(/\.mdx?$/, '')}`, // Construct the bioLink
    filePath: person.filePath, // Retain the filePath
    ...person.data, // Spread other properties from `data`
  }))

  if (activePeople.length === 0) {
    throw new Error('No active people found')
  }

  const currentIndex = activePeople.findIndex((person) => person.name === frontMatter.name)

  const prevIndex = (currentIndex - 1 + activePeople.length) % activePeople.length
  const nextIndex = (currentIndex + 1) % activePeople.length

  const PreviousPerson = activePeople[prevIndex]
  const NextPerson = activePeople[nextIndex]

const matchingCaseStudies: CaseStudy[] = allCaseStudies
  .filter((caseStudy) => {
    const isActive = caseStudy.data.active
    const hasMatchingCredit = caseStudy.data.credits?.some((credit: Credit) =>
      credit.website?.includes(params.slug)
    )
    return isActive && hasMatchingCredit
  })
  .map((caseStudy) => ({
    filePath: caseStudy.filePath,
    data: {
      client: caseStudy.data.client || 'Unknown Client', // Default value
      title: caseStudy.data.title || 'Untitled Case Study', // Ensure title is set
      tags: caseStudy.data.tags || [], // Default to an empty array
      vimeoPreview: caseStudy.data.vimeoPreview || '', // Default to an empty string
      date: caseStudy.data.date ? new Date(caseStudy.data.date).toISOString() : undefined,
      credits: caseStudy.data.credits?.map((credit: Credit) => ({
        name: credit.name || 'Unknown Name',
        title: credit.title || 'Unknown Title',
        website: credit.website || '',
      })) || [],
      active: caseStudy.data.active,
      quickfacts: {
        awards: caseStudy.data.quickfacts?.awards || [], // Process awards properly
        industry: caseStudy.data.quickfacts?.industry || '',
        service_types: caseStudy.data.quickfacts?.service_types || [], // Process service types properly
      },
    },
  }))
  .sort((a, b) => {
    const dateA = new Date(a.data.date || 0).getTime()
    const dateB = new Date(b.data.date || 0).getTime()
    return dateB - dateA
  })

const awards: Awards = matchingCaseStudies.flatMap((caseStudy) =>
  (caseStudy.data.quickfacts?.awards || []).map((award) => {
    // Find the person's role in the credits
    const personCredit = caseStudy.data.credits?.find(
      (credit: Credit) => credit.website?.includes(params.slug)
    )
    return {
      name: award, // Award name
      link: `/case-studies/${caseStudy.filePath.replace(/\.mdx?$/, '')}`, // Link to the project
      client: caseStudy.data.client || 'Unknown Client', // Client name
      project: caseStudy.data.title || 'Unknown Project', // Project name
      role: personCredit?.title || 'No Role Specified', // Role from credits, fallback if none
    }
  })
)

  return {
    props: {
      matchingCaseStudies,
      matchingAuthorPosts,
      prevIndex: PreviousPerson,
      nextIndex: NextPerson,
      slug: params.slug,
      source: mdxSource,
      frontMatter,
      awards
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = peopleFilePaths
    .map((filePath) => filePath.replace(/\.mdx?$/, ''))
    .map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}

Page_People.getLayout = function getLayout(page: ReactElement) {
  return <Layout_Default>{page}</Layout_Default>
}

export default Page_People