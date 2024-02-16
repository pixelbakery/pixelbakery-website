/* eslint-disable no-unused-vars */
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'

import type { ReactElement, ReactNode } from 'react'
import Layout_Defaualt from 'components/layouts/Layout_Default'
import { caseStudyFilePaths, CASESTUDIES_PATH } from '@lib/mdxUtils'
import H2 from '@typography/H2'
import PageSection from '@parts/PageSection'
// import CaseStudies_Tags from '@caseStudies/CaseStudies_Tags'

import CaseStudies_Header from '@caseStudies/CaseStudies_Header'
import CaseStudies_Description from '@caseStudies/CaseStudies_Description'
import CaseStudies_Intro from '@caseStudies/CaseStudies_Intro'
import CaseStudies_Credits from '@caseStudies/CaseStudies_Credits'
import CaseStudies_CTA from '@caseStudies/CaseStudies_CTA'
import CaseStudies_SEO from '@caseStudies/CaseStudies_SEO'
import Image from 'next/image'

const CaseStudies_OtherProjects = dynamic(() => import('@caseStudies/CaseStudies_OtherProjects'), {
  ssr: false,
})

const CaseStudies_Storyboards = dynamic(() => import('@caseStudies/CaseStudies_Storyboards'), {
  ssr: false,
})
import Video from '@parts/Video'

//stuff built for snacklins
import CaseStudies_Testimonial from '@caseStudies/CaseStudies_Testimonial'
import CaseStudies_TikTok from '@caseStudies/CaseStudies_TikTok'
import CaseStudies_Gallery from '@caseStudies/CaseStudies_Gallery'
import CaseStudies_Gallery_Alt from '@caseStudies/CaseStudies_Gallery_Alt'
import CaseStudies_Header_NoVideo from '@caseStudies/CaseStudies_Header_NoVideo'
import CaseStudies_ProjectIntro_Alt from '@caseStudies/CaseStudies_ProjectIntro_Alt'
import CaseStudies_Gallery_Email from '@caseStudies/CaseStudies_Gallery_Email'
import InnerWrapper from '@parts/InnerWrapper'
import Image_VarH from '@parts/Image_VarH'

import { shuffleArray } from '@lib/helpers'
import dynamic from 'next/dynamic'
import remarkGfm from 'remark-gfm'
interface CaseStudyProps {
  otherCaseStudies: Array<any> // Define a more specific type based on your data structure
  source: any
  slug: string
  children: ReactNode
  frontMatter: {
    title: string
    excerpt?: string
    date?: string
    client: string
    website: string
    logo: string
    vimeoID?: string
    vimeoPreview?: string
    tags?: Array<string>
    credits?: Array<any> // Define a more specific type
    isCustomLayout?: boolean
    // Add other frontMatter properties as needed
  }
}
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

function Page_Work_CaseStudy({ otherCaseStudies, source, slug, frontMatter }: CaseStudyProps) {
  const components = {
    // It also works with dynamically-imported components, which is especially
    // useful for conditionally loading components for certain routes.
    // See the notes in README.md for more details.
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
    // PageSection: ({children}) => <PageSection children={children} />,
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
            clientURL={frontMatter.website}
            clientLogo={frontMatter.logo}
            projectName={frontMatter.title}
            projectExcerpt={frontMatter.excerpt}
            poster={frontMatter.vimeoPreview}
            heroVideo={frontMatter.vimeoID}
            tags={frontMatter.tags}
            logo={frontMatter.logo}
            website={frontMatter.website}
          />
          {/* <CaseStudies_Tags tags={Object.entries(frontMatter.tags)} /> */}
          <article id='blog-body-guts'>
            <MDXRemote {...source} components={components} />
          </article>
        </>
      ) : (
        <article id='blog-body-guts'>
          <MDXRemote {...source} components={components} />
        </article>
      )}

      <CaseStudies_Credits credits={frontMatter.credits} />
      <CaseStudies_CTA />
      <CaseStudies_OtherProjects otherCaseStudies={otherCaseStudies} />
      {/* <CaseStudies_PrevNext allCaseStudies={allCaseStudies} title={frontMatter.title} /> */}
    </>
  )
}
//Set page layout
Page_Work_CaseStudy.getLayout = function getLayout(page: ReactElement) {
  return <Layout_Defaualt>{page}</Layout_Defaualt>
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
      const { content, data } = matter(source)
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
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))

    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}
