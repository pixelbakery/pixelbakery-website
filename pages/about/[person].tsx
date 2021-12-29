import React, { useRouter } from 'next/router'

import { getAllPeople, getPersonBySlug } from '../../lib/api_person'
import Head from 'next/head'
import markdownStyles from '../../styles/markdown-styles.module.css'

import markdownToHtml from '../../lib/markdownToHtml'
import PersonType from '../../types/person'

type Props = {
  person: PersonType
  content: string
}

const Person = ({ person }: Props) => {
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
    'title',
    'phone',
    'email',
    'content',
  ])
  console.log('debug')
  const content = await markdownToHtml(person.content || '')
  return {
    props: {
      person: {
        ...person,
        content,
      },
    },
  }
}
export async function getStaticPaths() {
  const posts = getAllPeople(['slug'])
  return {
    paths: posts.map((post) => {
      return {
        params: {
          person: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
