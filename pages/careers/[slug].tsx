// React imports
import { ReactElement } from 'react'

// MDX & frontmatter imports
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { jobFilePaths, JOBS_PATH } from '@lib/mdxUtils'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import remarkGfm from 'remark-gfm'

// Next.js imports
import Image from 'next/image'
import Link from 'next/link'
import type { GetStaticPaths, GetStaticProps } from 'next/types'

// Component imports
import { InnerWrapper, PageSection, Button_Filled } from '@parts'
import { H1, H2AndLead } from '@typography/index'
import DateFormatter from '@lib/date-formatter'
import Careers_SEO from '@careers/Careers_Post_SEO'
import Layout_Default from 'components/layouts/Layout_Default'

// CSS imports
import markdownStyles from '@styles/markdown-styles.module.css'

// Utility imports
import dayjs from 'dayjs'

// Define the structure of the frontmatter and props
interface FrontMatter {
  title: string
  date: string
  commitment: string
  coverImage?: string
  active: boolean
}

interface PageJobPostingProps {
  slug: string
  source: MDXRemoteSerializeResult
  frontMatter: FrontMatter
}

// Define the layout for the page
const Page_JobPosting = ({ slug, source, frontMatter }: PageJobPostingProps): ReactElement => {
  const coverImage = frontMatter.coverImage || '/img/pixel-bakery-samee-dan-1200x900.png'
  const datePostedISO = dayjs(frontMatter.date).toISOString()
  const dateExpiredISO = dayjs(datePostedISO).add(2, 'month').toISOString()

  return (
    <>
      <Careers_SEO
        datePostedISO={datePostedISO}
        dateExpiredISO={dateExpiredISO}
        title={frontMatter.title}
        commitment={frontMatter.commitment}
        coverImage={coverImage}
        slug={slug}
      />

      <PageSection className='min-h-screen mt-32' id='job-posting'>
        <article>
          <InnerWrapper>
            <header className='max-w-2xl mx-auto'>
              <div className='pb-12'>
                <Link
                  hrefLang='en-US'
                  href='/careers'
                  className='pb-1 border-b-2 border-b-blue text-blue'
                >
                  ← back to all careers
                </Link>
              </div>
              <p className='py-0 my-0 text-4xl font-extrabold leading-none text-peach'>
                job position
              </p>
              <H1 color='blue' className='text-6xl text-blue'>
                {frontMatter.title}
              </H1>
              <div className='mx-auto md:max-w-6xl'>
                <div className='w-full mx-auto mb-24 aspect-w-4 aspect-h-3 bg-peach'>
                  <Image
                    fill={true}
                    className='object-cover object-center w-full h-full'
                    src={coverImage}
                    alt={`Pixel Bakery is hiring a ${frontMatter.commitment} ${frontMatter.title}`}
                  />
                </div>
              </div>
              {!frontMatter.active && (
                <p className='text-2xl italic font-bold'>Sorry, this position has been filled.</p>
              )}
              <p className='pt-0 mt-0 text-sm italic'>
                posted on <DateFormatter dateString={frontMatter.date} />
              </p>
            </header>
          </InnerWrapper>

          <InnerWrapper>
            <div className='max-w-2xl mx-auto'>
              <div className={markdownStyles.markdown}>
                <MDXRemote {...source} />
              </div>
              {frontMatter.active && (
                <div className='flex flex-col justify-center mt-32'>
                  <H2AndLead
                    headerColor='blue-dark'
                    leadColor='peach'
                    headerText='Does that sound like you?'
                    leadText='great, get at it.'
                  />
                  <Button_Filled
                    text='apply for position'
                    bgColor='pink'
                    textColor='pink-lighter'
                    chevronDirection='right'
                    link='/careers/application'
                    center={false}
                  />
                </div>
              )}
              <div className='pt-12'>
                <Link
                  hrefLang='en-US'
                  href='/careers'
                  className='pb-1 border-b-2 text-blue border-b-blue'
                >
                  ← back to all careers
                </Link>
              </div>
            </div>
          </InnerWrapper>
        </article>
      </PageSection>
    </>
  )
}

// Set layout for the page
Page_JobPosting.getLayout = function getLayout(page: ReactElement) {
  return <Layout_Default>{page}</Layout_Default>
}

export default Page_JobPosting

// Static Props
export const getStaticProps: GetStaticProps<PageJobPostingProps> = async ({ params }) => {
  const slug = Array.isArray(params?.slug) ? params.slug[0] : params?.slug

  if (!slug) {
    return {
      notFound: true,
    }
  }

  const jobsFilePath = path.join(JOBS_PATH, `${slug}.mdx`)
  const source = fs.readFileSync(jobsFilePath, 'utf8')
  const { content, data } = matter(source)

  // Validate and ensure all required fields in frontMatter
  const frontMatter: FrontMatter = {
    title: data.title || 'Untitled',
    date: data.date || new Date().toISOString(),
    commitment: data.commitment || 'Unknown commitment',
    active: data.active !== undefined ? data.active : true,
    coverImage: data.coverImage || undefined,
  }

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [],
      development: process.env.NODE_ENV === 'development',
    },
    scope: data,
  })

  return {
    props: {
      slug,
      source: mdxSource,
      frontMatter,
    },
  }
}

// Static Paths
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = jobFilePaths
    .map((filePath) => filePath.replace(/\.mdx?$/, ''))
    .map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}
