import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { peopleFilePaths, PEOPLE_PATH } from '@lib/mdxUtils'
import PageHeader_VarH from '@pageHeaders/PageHeader_VarH'
// const PageHeader_VarH = dynamic(() => import('@pageHeaders/PageHeader_VarH'), {
//   ssr: false,
// })

import {
  About_Team,
  About_Values,
  About_Faq,
  About_Awards,
  About_Spotify,
  About_SEO,
} from '@about/index'
import type { ReactElement } from 'react'
import Layout_Defaualt from 'components/layouts/Layout_Default'

const Page_About = ({ allPeople }: any) => {
  return (
    <>
      <PageHeader_VarH header='About' subheader='Just add flour.' />
      <About_Team allPeople={allPeople} />
      <About_Values />
      <About_Spotify />
      <About_Awards />
      <About_Faq />
      <About_SEO />
    </>
  )
}

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
//Set page layout
Page_About.getLayout = function getLayout(page: ReactElement) {
  return <Layout_Defaualt>{page}</Layout_Defaualt>
}

export default Page_About
