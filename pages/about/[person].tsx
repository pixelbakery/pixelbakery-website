import type { GetStaticPaths, GetStaticProps, NextPage, NextPageContext } from 'next'
import { useRouter } from 'next/router'
import roster, { RosterBio } from '../../data/roster'
import TeamBio from '../../components/pg-about/about-bios'


type Props = {
  data: RosterBio
}
export let getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: roster.map((person) => ({
      params: {
        person: person.url,
      },
    })),
    fallback: true,
  }
}

export let getStaticProps: GetStaticProps<Props, any> = (context) => {
  const { person } = context.params
  return {
    props: {
      data: roster.find((p) => p.url === (person as string)) as any,
    },
  }
}

let AboutPerson: NextPage<Props> = ({ data }) => {
  return (
    <div className='bg-egg p-8'>
      <TeamBio {...data} />         
    </div>
  )
}

export default AboutPerson
