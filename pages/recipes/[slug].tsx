import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import remarkGfm from 'remark-gfm'
import dynamic from 'next/dynamic'
import dayjs from 'dayjs'

import { Carousel } from '@parts'
import { readingTime, shuffleArray } from '@lib'
import { PEOPLE_PATH, peopleFilePaths, postFilePaths, POSTS_PATH } from '@lib/mdxUtils'
import markdownStyles from '@styles/markdown-styles.module.css'
import { Video } from '@parts'
import { Layout_Default } from '@layouts'
import {
  Recipes_Post_SEO,
  Recipes_Post_Header,
  Recipes_Post_Tags,
  Recipes_Post_GetPrevNextPost,
} from '@recipes'

import type { PostPageProps, PostFrontMatter, OurMatchingPerson } from '@/types/posts'
import type { ReadTime } from '@/types/general'
import type { PersonWithFilePath, PostAuthor } from '@/types/people'
import type { ReactElement } from 'react'

export type PersonWithFilePathLocal = Omit<PersonWithFilePath, 'bioLink' | 'active'> & {
  filePath: string
  name: string
  slug: string
  avatar: string
  headshotSmiling: string
}
const Recipes_Post_Related = dynamic(() => import('@recipes/Recipes_Post_Related'), {
  ssr: false,
  loading: () => <div className={'relative h-100 w-100'} />,
})

export interface PrevNextNavigation {
  title: string
  slug: string
  author?: PostAuthor
}
const components = {
  Video,
  Carousel,
}

function Page_Recipes_Post({
  slug,
  source,
  frontMatter,
  readTime,
  prev,
  matchingBio,
  next,
  relatedPosts,
}: PostPageProps) {
  return (
    <>
      <div className='mb-32'>
        <Recipes_Post_Header
          frontMatter={frontMatter}
          date={dayjs(frontMatter.date).toISOString()}
          readTime={readTime}
          matchingBio={matchingBio}
        />
        <section className='px-6 mt-8 md:max-w-3xl mx-auto'>
          <article id='blog-body-guts'>
            <div className={markdownStyles['markdown']}>
              <MDXRemote {...source} components={components} />
            </div>
          </article>
          <Recipes_Post_Tags tags={frontMatter.tags} />
        </section>
      </div>
      <Recipes_Post_GetPrevNextPost prev={prev || null} next={next || null} as='recipes' />
      <Recipes_Post_Related relatedPosts={relatedPosts} />
      <Recipes_Post_SEO
        datePostedISO={dayjs(frontMatter.date).toISOString()}
        frontMatter={frontMatter}
        slug={slug}
      />
    </>
  )
}

export default Page_Recipes_Post

Page_Recipes_Post.getLayout = function getLayout(page: ReactElement) {
  return <Layout_Default>{page}</Layout_Default>
}

export const getStaticProps = async ({
  params,
}: {
  params: { slug: string }
}): Promise<{ props: PostPageProps }> => {
  if (!params?.slug) {
    console.error('Slug is missing in params')
    throw new Error('Slug is missing in params')
  }

  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`)
  const source = fs.readFileSync(postFilePath)
  const { content, data } = matter(source)

  // Ensure all required fields are included in frontMatter
  const frontMatter: PostFrontMatter = {
    title: data.title || 'Untitled Post',
    subtitle: data.subtitle || '',
    excerpt: data.excerpt || 'No excerpt provided',
    coverImage: data.coverImage || '/img/placeholder01.jpg', // Provide a default cover image
    date: new Date(data.date).toISOString(),
    categories: data.categories || [],
    tags: data.tags || [],
    author: {
      name: data.author.name,
      slug: data.author?.slug || null,
    },
    slug: params.slug,
  }

  const mdxSource = await serialize(content, {
    mdxOptions: { remarkPlugins: [remarkGfm] },
    scope: frontMatter,
  })

  const readingTimeResult = readingTime(content)
  const readTime: ReadTime = {
    text: readingTimeResult.text,
    minutes: readingTimeResult.minutes,
    time: readingTimeResult.time,
    words:
      typeof readingTimeResult.words === 'number'
        ? readingTimeResult.words
        : readingTimeResult.words.total,
  }

  const allPosts = postFilePaths
    .map((filePath) => {
      const postSource = fs.readFileSync(path.join(POSTS_PATH, filePath), 'utf8')
      const { data } = matter(postSource)
      return {
        filePath,
        frontMatter: {
          ...data,
          slug: filePath.replace(/\.mdx?$/, ''), // Normalize slug from filename
          date: data.date ? new Date(data.date).toISOString() : null, // Normalize date
        } as PostFrontMatter,
      }
    })
    .sort((a, b) => {
      // Sort posts chronologically by date
      if (a.frontMatter.date && b.frontMatter.date) {
        return new Date(b.frontMatter.date).getTime() - new Date(a.frontMatter.date).getTime()
      }
      return 0 // Handle cases where date might be missing
    })

  const relatedPosts = shuffleArray(allPosts)
    // .filter((post) => post.frontMatter.slug !== params.slug) // Exclude current post
    .slice(0, 4) // Select first 3 posts

  const currentIndex = allPosts.findIndex((post) => post.frontMatter.slug === params.slug)
  const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null
  const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null

  const prev: PrevNextNavigation | null = prevPost
    ? {
        title: prevPost.frontMatter.title,
        slug: typeof prevPost.frontMatter.slug === 'string' ? prevPost.frontMatter.slug : '',
        author: prevPost.frontMatter.author,
      }
    : null

  const next: PrevNextNavigation | null = nextPost
    ? {
        title: nextPost.frontMatter.title,
        slug: typeof nextPost.frontMatter.slug === 'string' ? nextPost.frontMatter.slug : '',
        author: nextPost.frontMatter.author,
      }
    : null
  const allPeople: PersonWithFilePath[] = peopleFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(PEOPLE_PATH, filePath))
    const { data } = matter(source)

    return {
      filePath,
      name: data.name || 'staffWriter',
      slug: data.slug || '',
      avatar: data.avatar || '',
      headshotSmiling: data.headshotSmiling || '',
    } as PersonWithFilePath
  })

  const defaultMatchingBio: OurMatchingPerson = {
    slug: '',
    avatar: '/img/placeholder01.png', // Default avatar image path
    name: 'Staff Writer',
    headshotSmiling: '/img/placeholder01.png', // Default headshot image path
  }

  const matchingBio: OurMatchingPerson =
    allPeople.find((person) => person.name.toUpperCase() === data.author.name.toUpperCase()) ||
    defaultMatchingBio

  return {
    props: {
      matchingBio,
      slug: params.slug,
      source: mdxSource,
      frontMatter,
      readTime,
      prev: prev,
      next: next,
      relatedPosts,
    },
  }
}

export const getStaticPaths = async () => {
  const paths = postFilePaths.map((path) => ({
    params: { slug: path.replace(/\.mdx?$/, '') },
  }))

  return {
    paths,
    fallback: false,
  }
}
