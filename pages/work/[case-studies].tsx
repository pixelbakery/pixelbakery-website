/* eslint-disable react/react-in-jsx-scope */
import { NextPage } from 'next'

import PageSection from '../../components/PageSection'
import Button_Filled from '../../components/parts/Button_Filled'
import Head from 'next/head'

const CaseStudy: NextPage<{ caseStudy: string }> = ({ caseStudy }) => {
  return (
    <main id={'case-study-' + caseStudy}>
      <section className='' id='caseStudy-lander'>
        <h1>case studies</h1>
      </section>
    </main>
  )
}

export default CaseStudy
