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

import type { Person, PersonWithFilePath, PersonWithBioLink } from '@/types/people'



const Page_About = ({ allPeople }: { allPeople: PersonWithFilePath[] }) => {
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


export async function getStaticProps() {
  const allPeople: PersonWithFilePath[] = peopleFilePaths
    .map((filePath) => {
      const source = fs.readFileSync(path.join(PEOPLE_PATH, filePath), 'utf8')
      const { data } = matter(source)

      // Explicitly assert `data` as `Person`
      const personData: Person = {
        name: data.name || 'Unnamed Person',
        active: data.active || false,
        slug: data.slug || '',
        title: data.title || '',
        excerpt: data.excerpt || '',
        phone: data.phone || '',
        email: data.email || '',
        details: data.details || [],
        socials: data.socials || [],
        avatar: data.avatar || '',
        headshotSerious: data.headshotSerious || '',
        headshotSmiling: data.headshotSmiling || '',
        headshotFun: data.headshotFun || '',
      }



      return {
        ...personData, // Spread `Person` properties directly into the top level
        filePath, // Add `filePath` at the top level
        bioLink: `/about/${data.slug || ''}`, // Construct `bioLink` based on `slug`
      }
    })
    .filter((person) => person.active) // Access `active` directly now
    .sort(() => Math.random() - 0.5)

  return { props: { allPeople } }
}

//Set page layout
Page_About.getLayout = function getLayout(page: ReactElement) {
  return <Layout_Defaualt>{page}</Layout_Defaualt>
}

export default Page_About
