import React, { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import PostBody from '../../components/Recipes/Tutorial/post-body'

import PostHeader from '../../components/Recipes/Tutorial/post-header'
import Recipes_Posts_Related from '../../components/Recipes/Tutorial/Recipes_Post_Related'
import { getPostBySlug, getAllPosts } from '../../lib/api_post'
import { getPersonBySlug, getAllPeople } from '../../lib/api_person'

import PostTitle from '../../components/Recipes/Tutorial/post-title'
import Head from 'next/head'

import markdownToHtml from '../../lib/markdownToHtml'
import PostType from '../../types/post'
import PersonType from '../../types/person'

type Props = {
  post: PostType
  morePosts: PostType[]
  relatedPosts: PostType[]
  matchingAuthor: PersonType
  ourPerson: PersonType
}

function shuffleArray(array) {
  let i = array.length - 1
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  return array
}

const Post = ({ post, relatedPosts, ourPerson }: Props) => {
  console.log(ourPerson)
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  // const allPosts
  // console.log(matchingAuthor)
  return (
    <main>
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <>
          <article className='mb-32'>
            <Head>
              <title>{post.title} | PBDS</title>
              <meta property='og:image' content={post.ogImage.url} />
            </Head>
            <PostHeader
              subtitle={post.subtitle}
              title={post.title}
              category={post.categories[0]}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
              person={ourPerson}
            />
            <PostBody tags={post.tags} content={post.content} />
          </article>

          <Recipes_Posts_Related relatedPosts={relatedPosts} />
        </>
      )}
    </main>
  )
}

export default Post

type Params = {
  params: {
    slug: string
    person: string
    categories: Array<string>
    allPosts: Array<object>
  }
}

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'subtitle',
    'date',
    'slug',
    'tags',
    'categories',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ])
  const allPeople = getAllPeople([
    'name',
    'slug',
    'headshotSerious',
    'headshotSmiling',
    'photos',
    'active',
    'title',
    'phone',
    'email',
    'content',
  ])
  const allPosts = getAllPosts([
    'title',
    'subtitle',
    'date',
    'slug',
    'author',
    'categories',
    'coverImage',
    'excerpt',
  ])
  // Get author bios
  // console.log(post.author.name)
  const matchingAuthor = allPeople.filter(
    (person) => person.name.toUpperCase() === post.author.name.toUpperCase(),
  )

  // console.log(matchingAuthor.length)
  // matchingAuthor.forEach((person) => {
  // })
  const currentPost = post
  const ourPerson = matchingAuthor[0]
  // console.log(ourPerson.name, ' | ', ourPerson.title, ' | ', ourPerson.slug)

  // Map the currentPost categories array to a Set for lookup in the filter
  const searchCategories = new Set(currentPost.categories.map((category) => category.toUpperCase()))

  // const temp = allPosts.filter((item) => item.author.name === 'Jordan Lambrecht')

  const matchingPosts = allPosts.filter((post) => {
    // If the currently iterated post title matches the currentPost return false (filter it out);
    if (post.title === currentPost.title) {
      return false
    }

    // Otherwise, check if the currently iterated post has some() categories in common with currentPost
    return post.categories.some((category) => searchCategories.has(category.toUpperCase()))
  })

  // If we don't have any related posts, we still need to display something, so we'll select three posts at random
  if (matchingPosts.length < 3) {
    const morePosts = allPosts
    allPosts.forEach(function (post, i) {
      if (post.title === post.title) {
        morePosts.splice(i, 1)
      }
    })
    shuffleArray(morePosts)
    for (let i = 0; i < 5 - matchingPosts.length; i++) {
      matchingPosts.push(morePosts[i])
    }
  }
  const relatedPosts = shuffleArray(matchingPosts).slice(0, 3)

  // console.log('Matching Posts:')
  relatedPosts.map((post) => {
    // console.log(post.title)
  })

  const content = await markdownToHtml(post.content || '')
  return {
    props: {
      ourPerson: { ...ourPerson },
      relatedPosts: relatedPosts,
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
          categories: post.categories,
        },
      }
    }),
    fallback: false,
  }
}
