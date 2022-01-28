import React, { useRouter } from 'next/router'
import fs from 'fs'
import path from 'path'
import { postFilePaths, POSTS_PATH } from '../../lib/mdxUtils'

import { getAllPeople, getPersonBySlug } from '../../lib/api_person'
import matter from 'gray-matter'

import Head from 'next/head'
import markdownStyles from '../../styles/markdown-styles.module.css'

import markdownToHtml from '../../lib/markdownToHtml'
import PersonType from '../../types/person'

import Link from 'next/link'

function Person({ person, matchingAuthorPosts }) {
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
                      <Link
                        as={`/recipes/${post.filePath.replace(/\.mdx?$/, '')}`}
                        key={post.data.title}
                        href={'/recipes/[slug]'}
                        passHref
                      >
                        <a>
                          <h3>{post.data.title}</h3>
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

type Params = {
  params: {
    person: string
    slug: string
    name: string
  }
}
export async function getStaticProps({ params }: Params) {
  const person = getPersonBySlug(params.person, [
    'name',
    'active',
    'headshotSerious',
    'title',
    'photos',
    'phone',
    'email',
    'content',
  ])
  const allPosts = postFilePaths
    .map((filePath) => {
      const source = fs.readFileSync(path.join(POSTS_PATH, filePath))
      const { content, data } = matter(source)

      return {
        content,
        data,
        filePath,
      }
    })
    .sort((post1, post2) => (post1.data.date > post2.data.date ? -1 : 1))

  // const matchingAuthorPosts = allPosts.filter((post) => post.author === 'Jordan Lambrecht')
  const matchingAuthorPosts = allPosts.filter(
    (post) => post.data.author.name.toUpperCase() === person.name.toUpperCase(),
  )

  // matchingAuthorPosts.forEach((post) => {
  // })

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
export default Person
