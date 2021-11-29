import type { GetStaticPaths, GetStaticProps, NextPage, NextPageContext } from 'next'
import { useRouter } from 'next/router'
import roster from '../../data/team'
import TeamBio from '../../components/pg-about/about-bios'

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

export let getStaticProps: GetStaticProps = (context: any) => {
  const { person } = context.params
  return {
    props: {
      data: roster.find((p) => p.url === (person as string)),
    },
  }
}

let AboutPerson: NextPage = ({ data }) => {
  return (
    <div className='bg-egg p-8'>
      <TeamBio {...data} />         
    </div>
  )
}

export default AboutPerson
