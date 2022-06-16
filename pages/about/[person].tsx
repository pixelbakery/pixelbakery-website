import React, { useRouter } from 'next/router'
import fs from 'fs'
import path from 'path'
import { postFilePaths, POSTS_PATH } from '@lib/mdxUtils'
import { CamelCaseToSentence } from '@lib/helpers'
import { getAllPeople, getPersonBySlug } from '@lib/api_person'
import matter from 'gray-matter'
import { BreadcrumbJsonLd, NextSeo } from 'next-seo'
import markdownStyles from '@styles/markdown-styles.module.css'

import markdownToHtml from '@lib/markdownToHtml'
import Image from 'next/image'
import Main from '@parts/Main'
import PageSection from '@parts/PageSection'
import InnerWrapper from '@parts/InnerWrapper'
import H1 from 'components/typography/H1'
import Lead from '@typography/Lead'
import SocialLinks from '@images/Icons_Social/SocialLinks'
import Recipes_FeaturedPost from '@recipes/Recipes_FeaturedPost'
import Button_Filled from '@parts/Button_Filled'

function Person({ person, allPeople, slug, matchingAuthorPosts }) {
  const router = useRouter()
  const socialList = person.socials
  const details = person.details

  const activePeople = allPeople
    .filter((person) => person.active)
    .sort((person1, person2) => (person2.name > person1.name ? -1 : 1))

  const personIndex = () => {
    const personIndex = activePeople.findIndex(
      (p) => p.name.toLowerCase() === person.name.toLowerCase(),
    )
    return personIndex
  }
  function getPrev(i) {
    if (i === 0) {
      return activePeople[activePeople.length - 1]
    } else {
      return activePeople[i - 1]
    }
  }

  function getNext(i) {
    if (i === activePeople.length - 1) {
      return activePeople[0]
    } else {
      return activePeople[i + 1]
    }
  }

  const previous = getPrev(personIndex)
  const next = getNext(personIndex)

  // console.log('prev: ', previous.name, ' next: ', next.name)
  // activePeople.forEach((p, index) => {
  //   console.log(index, ': ', p.name)
  // })
  function Details() {
    return (
      <InnerWrapper>
        <div className='grid grid-cols-2 2xl:grid-cols-5 gap-y-6 gap-12 lg:gap-x-24 w-fit mx-auto'>
          {Object.entries(details).map(([header, text]) => {
            return (
              <div className='col-span-1 w-fit'>
                <Lead className='mb-1 lg:mb-1 lg:pb-0' color='peach'>
                  {CamelCaseToSentence(header)}
                </Lead>
                {header === 'signs' ? (
                  <ul className='flex flex-col gap-x-4 text-md text-wine'>
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
      </InnerWrapper>
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
  const [firstName, lastName] = person.name.split(' ')
  return (
    <Main>
      <BreadcrumbJsonLd
        itemListElements={[
          {
            position: 1,
            name: 'About',
            item: 'https://pixelbakery.com/about',
          },
          {
            position: 2,
            name: `${person.name}`,
            item: `https://pixelbakery.com/about/${person.slug}`,
          },
        ]}
      />
      <NextSeo
        title={`${person.name} – ${person.position} | Team`}
        description={`${person.content}`}
        openGraph={{
          title: `${person.name} – ${person.position}`,
          description: `${person.content}`,
          url: `https://pixelbakery.com/about/`,
          type: 'profile',
          profile: {
            firstName: firstName,
            lastName: lastName,
            gender: `${person.pronoun}`,
          },
          images: [
            {
              url: `https://pixelbakery.com/${person.photos.headshotFun}`,
              alt: `Pixel Bakery Design Studio funny headshot for ${person.name}, ${person.title}`,
            },
            {
              url: `https://pixelbakery.com/${person.photos.headshotSerious}`,
              alt: `Pixel Bakery Design Studio serious headshot for ${person.name}, ${person.title}`,
            },
            {
              url: `https://pixelbakery.com/${person.photos.headshotSmiling}`,
              alt: `Pixel Bakery Design Studio smiling headshot for ${person.name}, ${person.title}`,
            },
          ],
        }}
      />
      {router.isFallback ? (
        <p>Loading…</p>
      ) : (
        <>
          <PageSection color='cream'>
            <InnerWrapper className='mt-24'>
              <div className='grid grid-cols-1 md:grid-cols-2 md:gap-x-24  gap-y-8'>
                <div className='col-span-1 relative w-full aspect-3/4'>
                  <div className=' max-w-lg'>
                    <Image
                      priority
                      placeholder='blur'
                      blurDataURL={person.photos.headshotFun}
                      src={person.photos.headshotFun}
                      layout='fill'
                      objectFit='cover'
                      alt={`${person.name}, ${person.title} at Pixel Bakery Design Studio`}
                    />
                  </div>
                </div>
                <div className='col-span-1'>
                  <div>
                    <H1 color='blue' className='mb-2 pb-0 '>
                      {person.name}
                    </H1>
                    <Lead color='wine' className='mb-2 lg:mb-8 pb-0'>
                      {person.title}
                    </Lead>
                  </div>
                  <div>
                    {person.email ? (
                      <a
                        href={`mailto:${person.email}`}
                        className='block italic text-peach cursor-pointer'
                      >
                        {person.email}
                      </a>
                    ) : (
                      ''
                    )}
                    {person.phone ? (
                      <a
                        href={`tel:${person.phone}`}
                        className='block italic text-peach cursor-pointer'
                      >
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
            <Details />
            {/* <div className='grid grid-cols-1'>
                {socialList != undefined ? (
                  {
                    Object.entries(obj).map()
                  }
                ) : ''}</div> */}
          </PageSection>
          {Object.keys(matchingAuthorPosts).length > 0 ? (
            <PageSection color='white'>
              <InnerWrapper>
                <h2>Recent Posts</h2>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-3'>
                  {matchingAuthorPosts.slice(0, 11).map((post) => {
                    return (
                      <Recipes_FeaturedPost
                        as={`/recipes/${post.filePath.replace(/\.mdx?$/, '')}`}
                        href={`/recipes/[slug]`}
                        key={post.filePath}
                        title={post.data.title}
                        author={post.data.author}
                        categories={post.data.categories}
                        date={post.data.date}
                        aspectW={'4'}
                        aspectY={'3'}
                        coverImage={post.data.coverImage}
                        excerpt={post.data.excerpt}
                      />
                    )
                  })}
                </div>
                <div className='mt-24'>
                  <Button_Filled
                    text='View More'
                    link='/recipes'
                    center={true}
                    textColor='cream'
                    bgColor='blue'
                    chevronDirection='right'
                  />
                </div>
              </InnerWrapper>
            </PageSection>
          ) : (
            ''
          )}
          {/* <PageSection color={'pink-light'}>
            <InnerWrapper className='py-2 my-2'>
              <div className='flex justify-between'>
                <Link href={previous.name}>
                  <a className='flex'>
                    <div className='w-20 self-center text-peach rotate-180'>
                      <ChevronRightIcon />
                    </div>
                    <div className='flex flex-col justify-center'>
                      <p className='text-peach font-semibold text-xl leading-none my-0 py-0'>
                        {previous.name}
                      </p>
                    </div>
                  </a>
                </Link>
                <Link href={next.name}>
                  <a className='flex'>
                    <div className='flex flex-col justify-center'>
                      <p className='text-peach font-semibold text-right text-xl leading-none my-0 py-0'>
                        {next.name}
                      </p>
                    </div>

                    <div className='w-20 self-center text-peach'>
                      <ChevronRightIcon />
                    </div>
                  </a>
                </Link>
              </div>
            </InnerWrapper>
          </PageSection> */}
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
    active: boolean
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
    'slug',
    'content',
  ])
  const allPeople = getAllPeople(['name', 'slug', 'active'])

  // Get current person in people object so we can see who comes before and after

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
