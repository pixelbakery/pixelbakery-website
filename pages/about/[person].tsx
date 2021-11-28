import type { NextPage, NextPageContext } from 'next'
import { useRouter } from 'next/router'
import roster from '../../data/team'

export async function getStaticPaths() {
  return {
    paths: roster.map((person) => ({
      params: {
        person: person.url,
      },
    })),
    fallback: true,
  }
}

export function getStaticProps(context: any) {
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
      <h1>{data.name}</h1>
      <h3>{data.bio}</h3>
      {/* {JSON.stringify(data)} */}
    </div>
  )
}

export default AboutPerson
