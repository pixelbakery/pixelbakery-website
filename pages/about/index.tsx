import dynamic from 'next/dynamic'
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { peopleFilePaths, PEOPLE_PATH } from '@lib/mdxUtils'
import Main from '@parts/Main'
const About_SEO = dynamic(() => import('@about/About_SEO'))
const PageHeader_VarH = dynamic(() => import('@pageHeaders/PageHeader_VarH'))
const About_Team = dynamic(() => import('@about/About_Team'))
const About_Values = dynamic(() => import('@about/About_Values'))
const About_Twitch = dynamic(() => import('@about/About_Twitch'))
const About_Faq = dynamic(() => import('@about/About_Faq'))
const About_Awards = dynamic(() => import('@about/About_Awards'))
const About_Spotify = dynamic(() => import('@about/About_Spotify'))

function About({ allPeople }) {
  return (
    <Main>
      <About_SEO />
      <PageHeader_VarH header='About' subheader='Just add flour.' />
      <About_Team allPeople={allPeople} />
      <About_Values />
      <About_Spotify />
      <About_Twitch />
      <About_Awards />
      <About_Faq />
    </Main>
  )
}

export default About

export function getStaticProps() {
  const allPeople = peopleFilePaths
    .map((filePath) => {
      const source = fs.readFileSync(path.join(PEOPLE_PATH, filePath))
      const { content, data } = matter(source)

      return {
        content,
        data,
        filePath,
      }
    })
    .filter((person) => person.data.active)
    .sort(() => Math.random() - 0.5)

  return { props: { allPeople } }
}
