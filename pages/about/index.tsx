import React from 'react'

import PageHeader_VariableHeight from '../../components/PageHeader/PageHeader_VarH'
// import About_Intro from '../../components/About/About_Intro'
import About_Team from '../../components/About/About_Team'
import About_Values from '../../components/About/About_Values'
import About_StudioViews from '../../components/About/About_StudioViews'
// import About_Twitch from '../../components/About/About_Twitch'
import About_Faq from '../../components/About/About_Faq'
import { getAllPeople } from '../../lib/api_person'
import Person from '../../types/person'

type Props = {
  allPeople: Person[]
}
function About({ allPeople }: Props) {
  return (
    <main className='bg-egg'>
      <PageHeader_VariableHeight header='About' subheader='copy copy copy ' />
      <About_Team people={allPeople} />
      <About_Values />
      <About_StudioViews />
      {/* <About_Twitch /> */}
      <About_Faq />
    </main>
  )
}

export default About
export const getStaticProps = async () => {
  const allPeople = ['slug', 'name', 'active', 'title', 'headshotSerious', 'headshotSmiling']
  return {
    props: { allPeople },
  }
}
