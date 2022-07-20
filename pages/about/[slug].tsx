//MDX & frontmatter imports
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { peopleFilePaths, PEOPLE_PATH, postFilePaths, POSTS_PATH } from '@lib/mdxUtils'
import { serialize } from 'next-mdx-remote/serialize'

//Utilities & Components imports
import Main from '@parts/Main'
import remarkGfm from 'remark-gfm'

import About_Team_SEO from '@about/About_Team_SEO'
import About_Team_Details from '@about/About_Team_Details'
import About_Team_MatchingPosts from '@about/About_Team_MatchingPosts'
import About_Team_Header from '@about/About_Team_Header'

function PersonPage({ slug, source, frontMatter, allPosts }) {
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
    </Main>
  )
}

export async function getStaticProps({ params }) {
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
