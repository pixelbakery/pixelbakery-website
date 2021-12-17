import React from 'react'
import { NextPage, GetServerSideProps } from 'next'
import Link from 'next/link'
import Image from 'next'
import Head from 'next/head'
import caseStudyType from '../../types/caseStudies'

type Props = {
  caseStudies: caseStudyType[]
}

const CaseStudy = ({ caseStudies }: Props) => {
  return (
    <section>
      {/* {caseStudies.map((caseStudy) => (
        <div key={caseStudy.slug}>
          <h1>{caseStudy.title}</h1>
          <p>{caseStudy.excerpt}</p>
        </div>
      ))} */}
    </section>
  )
}
export default CaseStudy
