import React, { useRouter } from 'next/router'
import fs from 'fs'
import path from 'path'
import { postFilePaths, POSTS_PATH } from '@lib/mdxUtils'
import { CamelCaseToSentence } from '@lib/helpers'
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
import H1 from 'components/typography/H1'
import Lead from '@typography/Lead'
import SocialLinks from '@images/Icons_Social/SocialLinks'
import H2 from '@typography/H2'

import H3 from '@typography/H3'
import { ChevronRightIcon } from '@images/UI_Icons'

function Person({ prev, next, person, matchingAuthorPosts }) {
  const router = useRouter()
  const socialList = person.socials
  const details = person.details
  console.log('prev: ', prev.name, ' ', prev.slug)
  console.log('next: ', next.name, ' ', next.slug)

  function Details() {
    return (
      <div className='grid grid-cols-2 gap-y-6 gap-x-6'>
        {Object.entries(details).map(([header, text]) => {
          return (
            <div className='col-span-1'>
              <Lead className='mb-1' color='peach'>
                {CamelCaseToSentence(header)}
              </Lead>
              {header === 'signs' ? (
                <ul className='flex flex-wrap gap-x-4 text-md text-wine'>
                  <li>☉ {details.signs.sun}</li>
                  <li>↑ {details.signs.rising}</li>
                  <li>☽ {details.signs.moon}</li>
                </ul>
              ) : (
                <p className='text-md text-wine'>{text}</p>
              )}
            </div>
          )
        })}
      </div>
    )
  }
  function Socials() {
    return (
      <div className='mt-0 pt-0 flex justify-start gap-x-3'>
        {Object.entries(socialList).map(([social, profile]) => {
          return (
            <SocialLinks key={social} color='blue' size={'3xl'} iconName={social} href={profile} />
          )
        })}
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
                  <div className=' max-w-lg'>
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
                  <div
                    className={markdownStyles['markdown']}
                    dangerouslySetInnerHTML={{ __html: person.content }}
                  />
                  {socialList != undefined ? <Socials /> : ''}
                </div>
              </div>
            </InnerWrapper>

            {/*  */}
          </PageSection>
          <PageSection>
            <InnerWrapper>
              <Details />
              {/* <div className='grid grid-cols-1'>
                {socialList != undefined ? (
                  {
                    Object.entries(obj).map()
                  }
                ) : ''}</div> */}
            </InnerWrapper>
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
          <PageSection className='bg-pink-light py-2'>
            <InnerWrapper className='py-2 my-2'>
              <div className='flex justify-between'>
                <Link href={prev.slug}>
                  <a className='flex'>
                    <div className='w-20 text-peach rotate-180'>
                      <ChevronRightIcon />
                    </div>
                    <div className='self-center'>
                      <p className='text-peach font-semibold text-xl leading-none mt-1'>
                        {prev.name}
                      </p>
                    </div>
                  </a>
                </Link>

                <Link href={next.slug}>
                  <a className='flex justify-end'>
                    <div className='self-center'>
                      <p className='text-peach font-semibold text-xl leading-none mt-1'>
                        {next.name}
                      </p>
                    </div>
                    <div className='w-20 text-peach '>
                      <ChevronRightIcon />
                    </div>
                  </a>
                </Link>
              </div>
            </InnerWrapper>
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
    'details',
    'title',
    'photos',
    'phone',
    'email',
    'content',
  ])
  const allPeople = getAllPeople(['name', 'slug'])
  // Get current person in people object so we can see who comes before and after
  const index = allPeople
    .sort((person2, person1) => (person1.name > person2.name ? -1 : 1))
    .findIndex((p) => p.name.toLowerCase() === person.name.toLowerCase())

  const getPrev = (i) => {
    if (i === 0) {
      return allPeople[allPeople.length - 1]
    } else {
      return allPeople[i - 1]
    }
  }

  const getNext = (i) => {
    if (i === allPeople.length - 1) {
      return allPeople[0]
    } else {
      return allPeople[i + 1]
    }
  }
  const prev = getPrev(index)
  const next = getNext(index)

  // Find any associated blog posts
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

  const content = await markdownToHtml(person.content || '')
  return {
    props: {
      matchingAuthorPosts: matchingAuthorPosts,
      allPeople: allPeople,
      prev: prev,
      next: next,
      person: {
        ...person,
        content,
      },
    },
  }
}
export async function getStaticPaths() {
  const allPeople = getAllPeople(['slug'])
  // const posts = getAllPosts(['slug'])

  return {
    paths: allPeople.map((person) => {
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
