/* eslint-disable react/react-in-jsx-scope */
import { NextPage } from 'next'

import PageSection from '../../components/PageSection'
import Button_Filled from '../../components/parts/Button_Filled'
import Head from 'next/head'

const CaseStudy: NextPage<{ caseStudy: string }> = ({ caseStudy }) => {
  return (
    <main id={'case-study-' + caseStudy}>
      <Head></Head>
      <section className='' id='caseStudy-lander'></section>
    </main>
  )
}

export default CaseStudy
