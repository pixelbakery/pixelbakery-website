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

//Utilities & Components imports
import remarkGfm from 'remark-gfm'

import {
  About_Team_Header,
  About_Team_PrevNext,
  About_Team_SEO,
  About_Team_Details,
} from '@about/index'

import { GetStaticPaths, GetStaticProps, GetStaticPropsResult } from 'next'
import type { ReactElement } from 'react'
import Layout_Defaualt from 'components/layouts/Layout_Default'
import About_Team_MatchingPosts from '@about/About_Team_MatchingPosts'
import About_Team_MatchingCaseStudies from '@about/About_Team_MatchingCaseStudies'
// -- Types ---------------------------------------------------------------------

interface FrontMatterProps {
  active?: boolean
  name?: string
  [key: string]: any
}

interface ParamsProps {
  params: {
    slug: string
  }
}
interface FileData {
  filePath: string
  data: FrontMatterProps & { [key: string]: any }
}

interface PagePeopleProps {
  matchingCaseStudies: FileData[]
  slug: string
  source: MDXRemoteSerializeResult
  frontMatter: FrontMatterProps
  matchingAuthorPosts: FileData[]
  prevIndex: FileData | null
  nextIndex: FileData | null
}

function Page_People({
  matchingCaseStudies,
  slug,
  source,
  frontMatter,
  matchingAuthorPosts,
  prevIndex,
  nextIndex,
}: PagePeopleProps) {
  return (
    <>
      <About_Team_SEO frontMatter={frontMatter} slug={slug} />
      <About_Team_Header source={source} frontMatter={frontMatter} />
      <About_Team_Details frontMatter={frontMatter} />
      <About_Team_MatchingPosts matchingAuthorPosts={matchingAuthorPosts} name={frontMatter.name} />
      <About_Team_MatchingCaseStudies
        matchingCaseStudies={matchingCaseStudies}
        name={frontMatter.name}
      />
      <About_Team_PrevNext
        active={frontMatter.active as boolean}
        prev={prevIndex}
        next={nextIndex}
        name={frontMatter.name || ''}
      />
    </>
  )
}
// -- getStaticProps -----------------------------------------------------------

export const getStaticProps: GetStaticProps<PagePeopleProps, { slug: string }> = async ({
  params,
}) => {
  if (!params?.slug) {
    return { notFound: true }
  }

  const temp = path.join(PEOPLE_PATH, `${params.slug}.mdx`)
  const fileContent = fs.readFileSync(temp)
  const { content, data } = matter(fileContent)

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [],
      development: process.env.NODE_ENV === 'development',
    },
    scope: data,
  })

  const matchingAuthorPosts = postFilePaths
    .map((filePath) => {
      const source = fs.readFileSync(path.join(POSTS_PATH, filePath))
      const { data } = matter(source)
      data.date = JSON.parse(JSON.stringify(data.date))
      return { data, filePath }
    })
    .sort((post1, post2) => (post1.data.date > post2.data.date ? -1 : 1))
    .filter((p) => p.data.author?.name?.toUpperCase() === data.name.toUpperCase())
    .slice(0, 11)

  const allPeople = peopleFilePaths
    .map((filePath) => {
      const source = fs.readFileSync(path.join(PEOPLE_PATH, filePath))
      const { data } = matter(source)
      return { filePath, data }
    })
    .filter((cs) => cs.data.active === true)
    .sort((cs1, cs2) => (cs1.data.name < cs2.data.name ? -1 : 1))

  let thisIndex: number | undefined
  let prevIndex: FileData | null = null
  let nextIndex: FileData | null = null

  if (data.active !== false) {
    allPeople.forEach((p, index) => {
      if (p.data.name === data.name) {
        thisIndex = index
      }
    })

    if (thisIndex !== undefined && thisIndex === 0) {
      prevIndex = allPeople[Object.keys(allPeople).length - 1]
    } else if (thisIndex !== undefined) {
      prevIndex = allPeople[thisIndex - 1]
    }

    if (thisIndex !== undefined && thisIndex === Object.keys(allPeople).length - 1) {
      nextIndex = allPeople[0]
    } else if (thisIndex !== undefined) {
      nextIndex = allPeople[thisIndex + 1]
    }
  }

  const matchingCaseStudies = caseStudyFilePaths
    .map((filePath) => {
      const source = fs.readFileSync(path.join(CASESTUDIES_PATH, filePath))
      const { data } = matter(source)
      data.date = JSON.parse(JSON.stringify(data.date))
      return { data, filePath }
    })
    .sort((post1, post2) => (post1.data.date > post2.data.date ? -1 : 1))
    .filter((cs) => cs.data.active === true)
    .filter((c) => {
      let bool = false
      c.data.credits?.forEach((credit: { name: string }) => {
        if (credit.name.toLowerCase() === data.name.toLowerCase()) bool = true
      })
      return bool
    })

  return {
    props: {
      matchingCaseStudies,
      matchingAuthorPosts,
      nextIndex,
      prevIndex,
      slug: params.slug,
      source: mdxSource,
      frontMatter: data,
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
//Set page layout
Page_People.getLayout = function getLayout(page: ReactElement) {
  return <Layout_Defaualt>{page}</Layout_Defaualt>
}

export default Page_People
