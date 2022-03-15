import fs from 'fs'

import path from 'path'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import Head from 'next/head'

import Carousel from '@parts/Carousel'
import Main from '@parts/Main'
import { caseStudyFilePaths, CASESTUDIES_PATH } from '@lib/mdxUtils'
import Video from '@parts/Video'
import remarkGfm from 'remark-gfm'
import VimeoPlayer from '@parts/VimeoPlayer'
import H2 from '@typography/H2'
import CaseStudies_Header from '@caseStudies/CaseStudies_Header'
import CaseStudiesIntro from '@caseStudies/CaseStudies_Intro'
import PageSection from '@parts/PageSection'
import CaseStudies_Tags from '@caseStudies/CaseStudies_Tags'
import CaseStudies_Description from '@caseStudies/CaseStudies_Description'
import CaseStudies_Credits from '@caseStudies/CaseStudies_Credits'
import CaseStudies_PrevNext from '@caseStudies/CaseStudies_PrevNext'

export default function CaseStudy({ allCaseStudies, source, frontMatter }) {
  const components = {
    // It also works with dynamically-imported components, which is especially
    // useful for conditionally loading components for certain routes.
    // See the notes in README.md for more details.
    Carousel: Carousel,
    VimeoPlayer: VimeoPlayer,
    Video: Video,
    // PageSection: ({children}) => <PageSection children={children} />,
    PageSection: ({ children, color }) => <PageSection color={color}>{children}</PageSection>,
    CaseStudiesDescription: ({ children, ...props }) => (
      <CaseStudies_Description
        header={props.header}
        textColor={props.textColor}
        headerColor={props.headerColor}
        color={props.color}
        bgColor={props.bgColor}
      >
        {children}
      </CaseStudies_Description>
    ),
    CaseStudiesIntro: ({ title, children }) => (
      <CaseStudiesIntro
        title={title}
        url={frontMatter.website}
        client={frontMatter.client}
        logo={frontMatter.logo}
      >
        {children}
      </CaseStudiesIntro>
    ),
    H2: ({ children, color }) => <H2 color={color}>{children}</H2>,

    h2: ({ children, color }) => <H2 color={color}>{children}</H2>,
    CaseStudiesTags: () => <CaseStudies_Tags tags={Object.entries(frontMatter.tags)} />,

    Head,
  }

  return (
    <Main>
      <CaseStudies_Header
        client={frontMatter.client}
        clientURL={frontMatter.website}
        clientLogo={frontMatter.logo}
        projectName={frontMatter.title}
        projectExcerpt={frontMatter.excerpt}
        heroVideo={frontMatter.vimeoID}
      />
      <article id='blog-body-guts'>
        <MDXRemote {...source} components={components} />
      </article>
      <CaseStudies_Credits credits={frontMatter.credits} />
      <CaseStudies_PrevNext allCaseStudies={allCaseStudies} title={frontMatter.title} />
    </Main>
  )
}

export const getStaticProps = async ({ params }) => {
  //MDX Stuff
  const temp = path.join(CASESTUDIES_PATH, `${params.slug}.mdx`)
  const source = fs.readFileSync(temp)
  const { content, data } = matter(source)

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [],
    },
    scope: data,
  })
  const allCaseStudies = caseStudyFilePaths
    .map((filePath) => {
      const source = fs.readFileSync(path.join(CASESTUDIES_PATH, filePath))
      const { content, data } = matter(source)

      return {
        content,
        data,
        filePath,
      }
    })
    .sort((post1, post2) => (post1.data.date > post2.data.date ? -1 : 1))

  return {
    props: {
      allCaseStudies: allCaseStudies,
      source: mdxSource,
      frontMatter: data,
    },
  }
}

export const getStaticPaths = async () => {
  const paths = caseStudyFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))

    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}
