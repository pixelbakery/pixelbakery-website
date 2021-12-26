import React, { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/Section'
import PostBody from '../../components/Recipes/Tutorial/post-body'

import PostHeader from '../../components/Recipes/Tutorial/post-header'

import { getPostBySlug, getAllPosts } from '../../lib/api'
import PostTitle from '../../components/Recipes/Tutorial/post-title'
import Head from 'next/head'
import { CMS_NAME } from '../../lib/constants'
import markdownToHtml from '../../lib/markdownToHtml'
import PostType from '../../types/post'

type Props = {
  post: PostType
  morePosts: PostType[]
  preview?: boolean
}

const Post = ({ post, morePosts, preview }: Props) => {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Container>
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <>
          <article className='mb-32'>
            <Head>
              <title>
                {post.title} | Next.js Blog Example with {CMS_NAME}
              </title>
              <meta property='og:image' content={post.ogImage.url} />
            </Head>
            <PostHeader
              subtitle={post.subtitle}
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
            />
            <PostBody content={post.content} />
          </article>
        </>
      )}
    </Container>
  )
}

export default Post

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'subtitle',
    'date',
    'slug',
    'category',
    'categories',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
