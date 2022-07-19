//react imports
import { useState } from 'react'

//MDX & frontmatter imports
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { peopleFilePaths, PEOPLE_PATH, postFilePaths, POSTS_PATH } from '@lib/mdxUtils'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
// import markdownToHtml from '@lib/markdownToHtml'

//nextJS imports
import Image from 'next/image'

//Utilities & Components imports
import Main from '@parts/Main'
import PageSection from '@parts/PageSection'
import InnerWrapper from '@parts/InnerWrapper'
import H1 from 'components/typography/H1'
import Lead from '@typography/Lead'
import SocialLinks from '@images/Icons_Social/SocialLinks'
import Recipes_FeaturedPost from '@recipes/Recipes_FeaturedPost'
import Button_Filled from '@parts/Button_Filled'
import { CamelCaseToSentence } from '@lib/helpers'

//CSS imports
import markdownStyles from '@styles/markdown-styles.module.css'
import remarkGfm from 'remark-gfm'

import About_Team_SEO from '@about/About_Team_SEO'
import About_Team_Details from '@about/About_Team_Details'
import About_Team_MatchingPosts from '@about/About_Team_MatchingPosts'
import About_Team_Header from '@about/About_Team_Header'

function PersonPage({ slug, source, frontMatter, allPosts }) {
  // socialList.forEach((s, t) => {
  //   console.log(s, t)
  // })
  //  <SocialLinks key={social} color='blue' size={'3xl'} iconName={social} href={profile} />

  // const activePeople = allPeople
  //   .filter((person) => person.active)
  //   .sort((person1, person2) => (person2.name > person1.name ? -1 : 1))

  // const personIndex = () => {
  //   const personIndex = activePeople.findIndex(
  //     (p) => p.name.toLowerCase() === person.name.toLowerCase(),
  //   )
  //   return personIndex
  // }
  // function getPrev(i) {
  //   if (i === 0) {
  //     return activePeople[activePeople.length - 1]
  //   } else {
  //     return activePeople[i - 1]
  //   }
  // }

  // function getNext(i) {
  //   if (i === activePeople.length - 1) {
  //     return activePeople[0]
  //   } else {
  //     return activePeople[i + 1]
  //   }
  // }

  // const previous = getPrev(personIndex)
  // const next = getNext(personIndex)

  // console.log('prev: ', previous.name, ' next: ', next.name)
  // activePeople.forEach((p, index) => {
  //   console.log(index, ': ', p.name)rr

  // console.log(Object.values(details.signs[1]))

  const [firstName, lastName] = frontMatter.name.split(' ')

  return (
    <Main>
      <About_Team_SEO
        firstName={firstName}
        lastName={lastName}
        frontMatter={frontMatter}
        slug={slug}
      />

      <About_Team_Header source={source} frontMatter={frontMatter} />
      <About_Team_Details frontMatter={frontMatter} />
      <About_Team_MatchingPosts frontMatter={frontMatter} allPosts={allPosts} />
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
    </Main>
  )
}

export async function getStaticProps({ params }) {
  //MDX Stuff
  const peopleFilePaths = path.join(PEOPLE_PATH, `${params.slug}.mdx`)
  const source = fs.readFileSync(peopleFilePaths)
  const { content, data } = matter(source)
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [],
    },
    scope: data,
  })
  const allPosts = postFilePaths
    .map((filePath) => {
      const source = fs.readFileSync(path.join(POSTS_PATH, filePath))
      const { data } = matter(source)

      return {
        data,
        filePath,
      }
    })
    .sort((post1, post2) => (post1.data.date > post2.data.date ? -1 : 1))

  return {
    props: {
      allPosts: allPosts,
      slug: params.slug,
      source: mdxSource,
      frontMatter: data,
    },
  }
}

// const allPeople = getAllPeople(['name', 'slug', 'active'])

// Get current person in people object so we can see who comes before and after

// Find any associated blog posts TEMP DISABLED

// const allPosts = postFilePaths
//   .map((filePath) => {
//     const source = fs.readFileSync(path.join(POSTS_PATH, filePath))
//     const { content, data } = matter(source)

//     return {
//       content,
//       data,
//       filePath,
//     }
//   })
//   .sort((post1, post2) => (post1.data.date > post2.data.date ? -1 : 1))
// const matchingAuthorPosts = allPosts.filter(
//   (post) => post.data.author.name.toUpperCase() === person.name.toUpperCase(),
// )

//   const content = await markdownToHtml(person.content || '')
//   return {
//     props: {
//       matchingAuthorPosts: matchingAuthorPosts,
//       allPeople: allPeople,
//       person: {
//         ...person,
//         content,
//       },
//     },
//   }
// }
export const getStaticPaths = async () => {
  const paths = peopleFilePaths
    .map((path) => path.replace(/\.mdx?$/, ''))
    .map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}
export default PersonPage
