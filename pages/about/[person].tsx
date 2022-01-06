import React, { useRouter } from 'next/router'

import { getAllPeople, getPersonBySlug } from '../../lib/api_person'
import { getAllPosts } from '../../lib/api_post'

import Head from 'next/head'
import markdownStyles from '../../styles/markdown-styles.module.css'

import markdownToHtml from '../../lib/markdownToHtml'
import PersonType from '../../types/person'
import PostType from '../../types/post'
import Link from 'next/link'

type Props = {
  person: PersonType
  content: string
  post: PostType
  matchingAuthorPosts: PostType[]
  author: Array<string>
}

const Person = ({ person, matchingAuthorPosts }: Props) => {
  const router = useRouter()

  // const allPosts
  return (
    <main>
      {router.isFallback ? (
        <p>Loading…</p>
      ) : (
        <>
          <article className='mb-32'>
            <Head>
              <title>{person.name} | PBDS</title>
            </Head>
            <main>
              <section className='my-4 lander bg-white flex flex-col justify-center'>
                <div className='mx-auto max-w-6xl'>
                  <h2>{person.name}</h2>
                  <ul className='unstyled'>
                    <li>{person.title}</li>
                    <li>{person.phone}</li>
                    <li>{person.email}</li>
                  </ul>
                  <div
                    className={markdownStyles['markdown']}
                    dangerouslySetInnerHTML={{ __html: person.content }}
                  />
                </div>
              </section>
              <section className='my-4'>
                <div>
                  {matchingAuthorPosts.map((post) => {
                    return (
                      <Link href={'/recipes/' + post.slug} key={post.title} passHref>
                        <a>
                          <h3>{post.title}</h3>
                        </a>
                      </Link>
                    )
                  })}
                </div>
              </section>
            </main>
          </article>
        </>
      )}
    </main>
  )
}

export default Person
type Params = {
  params: {
    person: string
    slug: string
  }
}
export async function getStaticProps({ params }: Params) {
  const person = getPersonBySlug(params.person, [
    'name',
    'active',
    'photos.headshotSerious',
    'photos.headshotSmiling',
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
    'name',
    'categories',
    'coverImage',
    'excerpt',
  ])
  // const matchingAuthorPosts = allPosts.filter((post) => post.author === 'Jordan Lambrecht')
  const matchingAuthorPosts = allPosts.filter(
    (post) => post.author.name.toUpperCase() === person.name.toUpperCase(),
  )

  console.log(matchingAuthorPosts.length)
  matchingAuthorPosts.forEach((post) => {
    console.log(post.author.name, ' | ', post.title, ' | ', post.slug)
  })

  const content = await markdownToHtml(person.content || '')
  return {
    props: {
      matchingAuthorPosts: matchingAuthorPosts,
      person: {
        ...person,
        content,
      },
    },
  }
}
export async function getStaticPaths() {
  const people = getAllPeople(['slug'])
  // const posts = getAllPosts(['slug'])

  return {
    paths: people.map((person) => {
      return {
        params: {
          person: person.slug,
        },
      }
    }),
    fallback: false,
  }
}
