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
import CaseStudies_OtherProjects from '@caseStudies/CaseStudies_OtherProjects'
import { BreadcrumbJsonLd, NextSeo } from 'next-seo'
import CaseStudies_CTA from '@caseStudies/CaseStudies_CTA'

export default function CaseStudy({ allCaseStudies, source, slug, frontMatter }) {
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
  console.log(slug)
  return (
    <Main>
      <BreadcrumbJsonLd
        itemListElements={[
          {
            position: 1,
            name: 'Work',
            item: 'https://pixelbakery.com/work',
          },
          {
            position: 2,
            name: `${frontMatter.title}`,
            item: `https://pixelbakery.com/work/case-studies/${slug}`,
          },
        ]}
      />
      <NextSeo
        title={`${frontMatter.title} | Case Study`}
        description={frontMatter.excerpt}
        openGraph={{
          url: `https://pixelbakery.com/work/case-studies/${slug}`,
          title: `${frontMatter.title}`,
          description: frontMatter.excerpt,
          images: [
            {
              url: `https://pixelbakery.com/img/${frontMatter.vimeoPreview}.jpg`,
              alt: frontMatter.excerpt,
              type: 'image/jpeg',
            },
          ],
          site_name: 'Pixel Bakery Design Studio',
        }}
        twitter={{
          handle: '@pixelbakerylnk',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
      <CaseStudies_Header
        client={frontMatter.client}
        clientURL={frontMatter.website}
        clientLogo={frontMatter.logo}
        projectName={frontMatter.title}
        projectExcerpt={frontMatter.excerpt}
        heroVideo={frontMatter.vimeoID}
      />
      <CaseStudies_Tags tags={Object.entries(frontMatter.tags)} />

      <article id='blog-body-guts'>
        <MDXRemote {...source} components={components} />
      </article>
      <CaseStudies_Credits credits={frontMatter.credits} />
      <CaseStudies_CTA />
      <CaseStudies_OtherProjects title={frontMatter.title} allCaseStudies={allCaseStudies} />
      {/* <CaseStudies_PrevNext allCaseStudies={allCaseStudies} title={frontMatter.title} /> */}
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
    .filter((cs) => cs.data.active)
    .sort((cs1, cs2) => (cs1.data.date > cs2.data.date ? -1 : 1))

  return {
    props: {
      slug: params.slug,
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
