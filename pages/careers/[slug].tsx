import fs from 'fs'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import Head from 'next/head'
import path from 'path'
import Link from 'next/link'
import markdownStyles from '@styles/markdown-styles.module.css'
import Main from '@parts/Main'
import { jobFilePaths, JOBS_PATH } from '@lib/mdxUtils'
import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import Button_Filled from '@parts/Button_Filled'
import H2AndLead from '@typography/H2AndLead'
import H1 from '@typography/H1'
import remarkGfm from 'remark-gfm'
import DateFormatter from '@lib/date-formatter'
import { BreadcrumbJsonLd, JobPostingJsonLd, NextSeo } from 'next-seo'
import addMonths from 'date-fns/addMonths'
import { useEffect, useState } from 'react'
import Image from 'next/image'

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  // It also works with dynamically-imported components, which is especially
  // useful for conditionally loading components for certain routes.
  // See the notes in README.md for more details.
  Head,
}

export default function JobsPage({ slug, source, frontMatter }) {
  const [coverImage] = useState(handleCoverImage())
  function handleCoverImage() {
    if (frontMatter.coverImage != undefined) {
      return `${frontMatter.coverImage}`
    } else {
      return `/img/pixel-bakery-samee-dan-1200x900.png`
    }
  }
  // console.log('cover image:', coverImage)
  const datePostedISO = new Date(frontMatter.date).toISOString()
  const dateExpiredISO = addMonths(new Date(frontMatter.date), 2).toISOString()
  return (
    <Main>
      <BreadcrumbJsonLd
        itemListElements={[
          {
            position: 1,
            name: 'Careers',
            item: 'https://pixelbakery.com/careers',
          },
          {
            position: 2,
            name: `${frontMatter.title}`,
            item: `https://pixelbakery.com/careers/${slug}`,
          },
        ]}
      />
      <NextSeo
        title={`${frontMatter.title} | Careers`}
        description={`Pixel Bakery is hiring a ${frontMatter.commitment} ${frontMatter.title}. Pixel Bakery is a multi-disciplinary production studio focused on animation, motion design, and commercial film production.`}
        openGraph={{
          url: `https://pixelbakery.com/careers/${slug}`,
          title: `${frontMatter.title} | Careers`,
          description: `Pixel Bakery is hiring a ${frontMatter.commitment} ${frontMatter.title}. Pixel Bakery is a multi-disciplinary production studio focused on animation, motion design, and commercial film production.`,
          images: [
            {
              url: `https://pixelbakery.com${coverImage}`,
              width: 800,
              height: 600,
              alt: `Pixel Bakery is hiring a ${frontMatter.commitment} ${frontMatter.title}`,
            },
          ],
        }}
      />
      <JobPostingJsonLd
        title={`${frontMatter.title}`}
        validThrough={`${dateExpiredISO}`}
        datePosted={`${datePostedISO}`}
        description={`Pixel Bakery is looking to hire a ${frontMatter.commitment} ${frontMatter.title}`}
        employmentType={`FULL_TIME`}
        hiringOrganization={{
          name: 'Pixel Bakery Design Studio',
          sameAs: 'https://pixelbakery.com',
          logo: 'https://www.pixelbakery.com/img/logos/initials/600x600px/darkBlue_withCreamShadow_onBlue_concave.png',
        }}
        jobLocation={{
          streetAddress: '2124 Y Street Suite 122',
          addressLocality: 'Lincoln',
          addressRegion: 'NE',
          postalCode: '68503',
          addressCountry: 'USA',
        }}
      />
      <PageSection className='min-h-screen mt-32'>
        <article>
          <InnerWrapper>
            <header className='max-w-2xl mx-auto'>
              <div className='pb-12'>
                <Link href='/careers' passHref>
                  <a className='border-b-2 pb-1 border-b-blue text-blue'> ← back to all careers</a>
                </Link>
              </div>
              <p className='my-0 py-0 leading-none text-4xl text-peach font-extrabold'>
                job position
              </p>
              <H1 color='blue' className='text-6xl text-blue'>
                {frontMatter.title}
              </H1>
              <div className=' md:max-w-6xl mx-auto'>
                <div className='w-full  aspect-w-4 aspect-h-3 bg-peach mb-24 mx-auto'>
                  <Image
                    layout='fill'
                    objectFit='cover'
                    className='object-center'
                    src={coverImage}
                    alt={`Pixel Bakery is hiring a ${frontMatter.commitment} ${frontMatter.title}`}
                  />
                </div>
              </div>
              <p className='text-sm italic mt-0 pt-0'>
                posted on <DateFormatter dateString={frontMatter.date} />:
              </p>
            </header>
          </InnerWrapper>

          <InnerWrapper>
            <div className='mx-auto max-w-2xl'>
              <div className={markdownStyles['markdown']}>
                <MDXRemote {...source} components={components} />
              </div>

              <div className='flex flex-col justify-center mt-32'>
                <H2AndLead
                  headerColor='blue-dark'
                  leadColor='peach'
                  headerText={'Does that sound like you?'}
                  leadText={'great, get at it.'}
                />
                <Button_Filled
                  text='apply for position'
                  bgColor={'pink'}
                  textColor={'pink-light'}
                  chevronDirection='right'
                  link={'/careers/application'}
                  center={false}
                />
              </div>
              <div className='pt-12'>
                <Link href='/careers' passHref>
                  <a className='border-b-2 pb-1 text-blue border-b-blue'> ← back to all careers</a>
                </Link>
              </div>
            </div>
          </InnerWrapper>
        </article>
      </PageSection>
    </Main>
  )
}

export const getStaticProps = async ({ params }) => {
  //MDX Stuff
  const jobsFilePath = path.join(JOBS_PATH, `${params.slug}.mdx`)
  const source = fs.readFileSync(jobsFilePath)
  const { content, data } = matter(source)

  //END OF RELEVANT POSTS
  //Back to MDX Stuff
  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [],
    },
    scope: data,
  })

  return {
    props: {
      slug: params.slug,
      source: mdxSource,
      frontMatter: data,
    },
  }
}

export const getStaticPaths = async () => {
  const paths = jobFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))

    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}
