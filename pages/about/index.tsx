import PageHeader_VariableHeight from '@pageHeaders/PageHeader_VarH'

import About_Team from '@about/About_Team'
// import About_Values from '@about/About_Values'
import About_Commitment from '@about/About_Commitment'
import About_Twitch from '@about/About_Twitch'
import About_Faq from '@about/About_Faq'
import { getAllPeople } from '@lib/api_person'
import Person from 'types/person'
import Main from '@parts/Main'
type Props = {
  allPeople: Person[]
}
function About({ allPeople }: Props) {
  return (
    <Main>
      <PageHeader_VariableHeight header='About' subheader='copy copy copy ' />
      <About_Team people={allPeople} />

      {/* <About_Commitment /> */}

      {/* <About_Values /> */}
      <About_Twitch />
      <About_Faq />
    </Main>
  )
}

export default About
export const getStaticProps = async () => {
  const allPeople = getAllPeople([
    'slug',
    'socials',
    'details',
    'name',
    'active',
    'title',
    'photos',
  ])

  return {
    props: { allPeople },
  }
}
