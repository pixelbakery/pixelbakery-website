import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import dynamic from 'next/dynamic'
import remarkGfm from 'remark-gfm'
import Image from 'next/image'
// import { Carousel } from '@parts'

import { caseStudyFilePaths, CASESTUDIES_PATH } from '@lib/mdxUtils'
import { Layout_Default } from '@layouts'
import { PageSection, InnerWrapper, Image_VarH, Video } from '@parts'
import { H2 } from '@typography'
import { shuffleArray } from '@lib'

import {
  CaseStudies_Header,
  CaseStudies_Description,
  CaseStudies_Intro,
  CaseStudies_Credits,
  CaseStudies_QuickFacts,
  CaseStudies_CTA,
  CaseStudies_SEO,
  CaseStudies_Testimonial,
  CaseStudies_TikTok,
  CaseStudies_Gallery,
  CaseStudies_Gallery_Alt,
  CaseStudies_Header_NoVideo,
  CaseStudies_ProjectIntro_Alt,
  CaseStudies_Gallery_Email,
} from '@caseStudies'

const CaseStudies_OtherProjects = dynamic(() => import('@caseStudies/CaseStudies_OtherProjects'), {
  ssr: false,
})

const CaseStudies_Storyboards = dynamic(() => import('@caseStudies/CaseStudies_Storyboards'), {
  ssr: false,
})

import type { ReactElement, ReactNode } from 'react'
import type { Credit, CaseStudyData } from '@/types/caseStudies'

interface Children {
  children: ReactNode
}
interface PageSectionProps {
  children: ReactNode
  id: string
  color?: string
}
interface CaseStudiesDescription extends Children {
  [x: string]: any
}
interface CaseStudyProps {
  otherCaseStudies: Array<any> // Define a more specific type based on your data structure
  source: any
  slug: string
  children: ReactNode
  frontMatter: CaseStudyData
}
function Page_Work_CaseStudy({ otherCaseStudies, source, slug, frontMatter }: CaseStudyProps) {
  const components = {
    CaseStudies_Storyboards: CaseStudies_Storyboards,
    Video: Video,
    //Stuff built for Marq
    // Marq_MarchingSolders: Marq_MarchingSolders,
    // Marq_Unicorn: Marq_Unicorn,
    //Stuff built for SNACKLINS
    CaseStudies_Testimonial: CaseStudies_Testimonial,
    CaseStudies_TikTok: CaseStudies_TikTok,
    CaseStudies_Gallery: CaseStudies_Gallery,
    CaseStudies_Gallery_Alt: CaseStudies_Gallery_Alt,
    CaseStudies_Header_NoVideo: CaseStudies_Header_NoVideo,
    CaseStudies_ProjectIntro_Alt: CaseStudies_ProjectIntro_Alt,
    CaseStudies_Gallery_Email: CaseStudies_Gallery_Email,
    Image: Image,
    PageSection: ({ children, color, id }: PageSectionProps) => (
      <PageSection color={color} id={id}>
        {children}
      </PageSection>
    ),
    CaseStudiesDescription: ({ children, ...props }: CaseStudiesDescription) => (
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
    Image_VarH: Image_VarH,
    CaseStudiesIntro: ({ title, children }: CaseStudiesDescription) => (
      <CaseStudies_Intro
        title={title}
        url={frontMatter.website}
        client={frontMatter.client}
        logo={frontMatter.logo}
      >
        {children}
      </CaseStudies_Intro>
    ),
    H2: ({ children, color }: CaseStudiesDescription) => <H2 color={color}>{children}</H2>,
    InnerWrapper: InnerWrapper,
  }
  return (
    <>
      <CaseStudies_SEO frontMatter={frontMatter} slug={slug} />
      {!frontMatter.isCustomLayout ? (
        <>
          <CaseStudies_Header
            client={frontMatter.client}
            projectName={frontMatter.title}
            poster={frontMatter.vimeoPreview}
            heroVideo={frontMatter.vimeoID}
            tags={frontMatter.tags}
            website={frontMatter.website}
          />
          <CaseStudies_QuickFacts
            client={frontMatter.client}
            website={frontMatter.website}
            quickfacts={frontMatter.quickfacts}
          />
          <article id='blog-body-guts'>
            <MDXRemote {...source} components={components} />
          </article>
        </>
      ) : (
        <article id='blog-body-guts'>
          <MDXRemote {...source} components={components} />
        </article>
      )}

      <CaseStudies_Credits credits={frontMatter.credits as Credit[]} />
      <CaseStudies_CTA />
      <CaseStudies_OtherProjects otherCaseStudies={otherCaseStudies} />
    </>
  )
}
//Set page layout
Page_Work_CaseStudy.getLayout = function getLayout(page: ReactElement) {
  return <Layout_Default>{page}</Layout_Default>
}
export default Page_Work_CaseStudy

export const getStaticProps = async ({ params }: any) => {
  //MDX Stuff
  const temp = path.join(CASESTUDIES_PATH, `${params.slug}.mdx`)
  const source = fs.readFileSync(temp)
  const { content, data } = matter(source)

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [],
      development: process.env.NODE_ENV === 'development',
    },
    scope: data,
  })
  const allCaseStudies = caseStudyFilePaths
    .map((filePath) => {
      const source = fs.readFileSync(path.join(CASESTUDIES_PATH, filePath))
      const { data } = matter(source)
      data.date = JSON.parse(JSON.stringify(data.date))
      return {
        data,
        filePath,
      }
    })
    .filter((cs) => cs.data.active)
    .sort((cs1, cs2) => (cs1.data.date > cs2.data.date ? -1 : 1))

  // More Projects
  // If we don't have any related posts, we still need to display something, so we'll select three posts at random

  let otherCaseStudies = allCaseStudies.filter((cs) => cs.data.title != data.title)
  shuffleArray(otherCaseStudies)
  otherCaseStudies = otherCaseStudies.slice(0, 3)
  data.date = JSON.parse(JSON.stringify(data.date))
  return {
    props: {
      slug: params.slug,
      source: mdxSource,
      otherCaseStudies: otherCaseStudies,
      frontMatter: data,
    },
  }
}

export const getStaticPaths = async () => {
  const paths = caseStudyFilePaths
    .map((path) => path.replace(/\.mdx?$/, ''))
    .map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}
