import React, { useRouter } from 'next/router'
import fs from 'fs'
import path from 'path'
import { postFilePaths, POSTS_PATH } from '@lib/mdxUtils'

import { getAllPeople, getPersonBySlug } from '@lib/api_person'
import matter from 'gray-matter'

import Head from 'next/head'
import markdownStyles from '@styles/markdown-styles.module.css'

import markdownToHtml from '@lib/markdownToHtml'
import Image from 'next/image'
import Link from 'next/link'
import Main from '@parts/Main'
import PageSection from '@parts/PageSection'
import InnerWrapper from '@parts/InnerWrapper'
import H1 from '@parts/H1'
import Lead from '@parts/Lead'
import About_Team_SocialLinks from '@about/About_Team_SocialLinks'
import SocialLinks from '@images/Icons_Social/SocialLinks'

function Person({ person, matchingAuthorPosts }) {
  const router = useRouter()
  const socialList = person.socials

  // This gets us the social handle. How do we get the url?
  // Object.keys(socialList).forEach((obj) => {
  //   console.log(obj, ' : ', socialList[obj])
  // })

  // for (let x in person.socials) {
  //   console.log(x + ': ' + person.socials[x])
  // }

  // const allPosts
  function makeString(social) {
    const temp = JSON.stringify(social)
    console.log(temp)
    return 'instagram'
  }

  function Socials() {
    return (
      <div className='mt-8 flex justify-start gap-2'>
        {Object.entries(socialList).map(([social, profile]) => {
          return <SocialLinks key={social} iconName={social} href={profile} />
        })}

        <div
          className={markdownStyles['markdown']}
          dangerouslySetInnerHTML={{ __html: person.content }}
        />
      </div>
    )
  }
  return (
    <Main>
      <Head>
        <title>PBDS | {person.name} </title>
      </Head>
      {router.isFallback ? (
        <p>Loading…</p>
      ) : (
        <>
          <PageSection color='white'>
            <InnerWrapper className='mt-24'>
              <div className='grid grid-cols-1 gap-y-8'>
                <div className='col-span-1 relative w-full aspect-3/4'>
                  <div className='relative max-w-lg'>
                    <Image
                      priority
                      src={person.photos.headshotFun}
                      layout='fill'
                      objectFit='cover'
                      alt={`${person.name}, ${person.title} at Pixel Bakery Design Studio`}
                    />
                  </div>
                </div>
                <div className='col-span-1'>
                  <div>
                    <H1 color='blue' className='mb-2 pb-0'>
                      {person.name}
                    </H1>
                    <Lead color='wine' className='mb-2 pb-0'>
                      {person.title}
                    </Lead>
                  </div>
                  <div>
                    {person.email ? (
                      <a
                        href={`mailto:${person.email}`}
                        className='italic text-peach cursor-pointer'
                      >
                        {person.email}
                      </a>
                    ) : (
                      ''
                    )}
                    {person.phone ? (
                      <a href={`tel:${person.phone}`} className='italic text-peach cursor-pointer'>
                        {person.phone}
                      </a>
                    ) : (
                      ''
                    )}
                  </div>
                  {socialList != undefined ? <Socials /> : ''}
                </div>
              </div>
            </InnerWrapper>

            {/*  */}
          </PageSection>
          <PageSection>
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
          </PageSection>
        </>
      )}
    </Main>
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
    'socials',

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
