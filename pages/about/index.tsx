import dynamic from 'next/dynamic'
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { peopleFilePaths, PEOPLE_PATH } from '@lib/mdxUtils'
import Main from '@parts/Main'
import About_SEO from '@about/About_SEO'
import PageHeader_LoadingContent from '@pageHeaders/PageHeader_LoadingContent'
const PageHeader_VarH = dynamic(() => import('@pageHeaders/PageHeader_VarH'), {
  loading: () => <PageHeader_LoadingContent header={'About'} subheader={'Just add flour.'} />,
  ssr: false,
})

const BackToTop = dynamic(() => import('@utility/BackToTop'), { ssr: false })

import About_Team from '@about/About_Team'
import About_Values from '@about/About_Values'
import About_Twitch from '@about/About_Twitch'
import About_Faq from '@about/About_Faq'
import About_Awards from '@about/About_Awards'
import About_Spotify from '@about/About_Spotify'

// import About_FamilyPhotos from '@about/About_FamilyPhotos'

function About({ allPeople }) {
  return (
    <Main>
      <About_SEO />
      <BackToTop />
      <PageHeader_VarH header='About' subheader='Just add flour.' />
      <About_Team allPeople={allPeople} />
      <About_Values />
      {/* <About_FamilyPhotos /> */}
      <About_Spotify />
      {/* <About_Twitch /> */}
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
      const { data } = matter(source)
      return {
        data,
        filePath,
      }
    })
    .filter((person) => person.data.active)
    .sort(() => Math.random() - 0.5)

  return { props: { allPeople } }
}
