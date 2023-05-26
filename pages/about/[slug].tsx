//MDX & frontmatter imports
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import {
  peopleFilePaths,
  PEOPLE_PATH,
  postFilePaths,
  POSTS_PATH,
  caseStudyFilePaths,
  CASESTUDIES_PATH,
} from '@lib/mdxUtils'
import { serialize } from 'next-mdx-remote/serialize'

//Utilities & Components imports
import Main from '@parts/Main'
import remarkGfm from 'remark-gfm'

import {
  About_Team_Header,
  About_Team_PrevNext,
  About_Team_SEO,
  About_Team_Details,
} from '@about/index'

import About_Team_MatchingCaseStudies from '@about/About_Team_MatchingCaseStudies'
import About_Team_MatchingPosts from '@about/About_Team_MatchingPosts'
function PersonPage({
  matchingCaseStudies,
  slug,
  source,
  frontMatter,
  matchingAuthorPosts,
  prevIndex,
  nextIndex,
}) {
  // console.log(new_data[0].length)

  return (
    <Main>
      <About_Team_SEO frontMatter={frontMatter} slug={slug} />
      <About_Team_Header source={source} frontMatter={frontMatter} />
      <About_Team_Details frontMatter={frontMatter} />
      <About_Team_MatchingPosts matchingAuthorPosts={matchingAuthorPosts} />
      <About_Team_MatchingCaseStudies
        matchingCaseStudies={matchingCaseStudies}
        name={frontMatter.name}
      />
      <About_Team_PrevNext
        active={frontMatter.active}
        prev={prevIndex}
        next={nextIndex}
        name={frontMatter.name}
      />
    </Main>
  )
}

export async function getStaticProps({ params }) {
  // Main content
  const temp = path.join(PEOPLE_PATH, `${params.slug}.mdx`)
  const source = fs.readFileSync(temp)
  const { content, data } = matter(source)
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [],
      development: process.env.NODE_ENV === 'development',
    },
    scope: data,
  })

  // Find matching posts written by this person
  const matchingAuthorPosts = postFilePaths
    .map((filePath) => {
      const source = fs.readFileSync(path.join(POSTS_PATH, filePath))
      const { data } = matter(source)
      data.date = JSON.parse(JSON.stringify(data.date))
      return { data, filePath }
    })
    .sort((post1, post2) => (post1.data.date > post2.data.date ? -1 : 1))
    .filter((p) => p.data.author.name.toUpperCase() === data.name.toUpperCase())
    .slice(0, 11)

  const allPeople = peopleFilePaths
    .map((filePath) => {
      const source = fs.readFileSync(path.join(PEOPLE_PATH, filePath))
      const { data } = matter(source)

      return { filePath, data }
    })
    .filter((cs) => cs.data.active === true)
    .sort((cs1, cs2) => (cs1.data.name < cs2.data.name ? -1 : 1))

  //Find the previous and next person on the roster, alphabetically by last name.
  let thisIndex,
    prevIndex,
    nextIndex = null

  if (data.active != false) {
    allPeople.map((p, index) => {
      if (p.data.name === data.name) {
        thisIndex = index
      }
    })

    if (thisIndex != undefined && thisIndex === 0)
      prevIndex = allPeople[Object.keys(allPeople).length - 1]
    else prevIndex = allPeople[thisIndex - 1]

    if (thisIndex != undefined && thisIndex === Object.keys(allPeople).length - 1)
      nextIndex = allPeople[0]
    else nextIndex = allPeople[thisIndex + 1]
  } else (thisIndex = null), (nextIndex = null), (prevIndex = null)

  //End of prev/next search

  // Find matching case studies this person has credits in

  const matchingCaseStudies = caseStudyFilePaths
    .map((filePath) => {
      const source = fs.readFileSync(path.join(CASESTUDIES_PATH, filePath))
      const { data } = matter(source)
      data.date = JSON.parse(JSON.stringify(data.date))

      return { data, filePath }
    })
    .sort((post1, post2) => (post1.data.date > post2.data.date ? -1 : 1))
    .filter((cs) => cs.data.active === true)
    .filter((c) => {
      let bool = false
      c.data.credits.forEach((cs) => {
        if (cs.name.toLowerCase() === data.name.toLowerCase()) {
          bool = true
        }
      })
      return bool
    })
  // .filter((p) => p.data.credits.includes('Jordan Lambrecht'))

  // matchingCaseStudies.forEach((cs) => {
  //   let test = cs.data.credits
  //   if (matches(test) === true) {
  //     console.log(cs.data.title)
  //   }
  // })

  return {
    props: {
      matchingCaseStudies: matchingCaseStudies,
      matchingAuthorPosts: matchingAuthorPosts,
      nextIndex: nextIndex,
      prevIndex: prevIndex,
      slug: params.slug,
      source: mdxSource,
      frontMatter: data,
    },
  }
}

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
