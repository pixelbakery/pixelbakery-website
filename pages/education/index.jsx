import React from 'react'
import next from 'next'
import Image from 'next/image'
import Link from 'next/link'

//sections
import Section__Header from '../../components/pg-education/edu-section-header'
import Section__Recent from '../../components/pg-education/edu-section-recent'
import Section__MadeToOrder from '../../components/pg-education/edu-section-madeToOrder'
import Section__FromScratch from '../../components/pg-education/edu-section-fromScratch'
import Section__ProjectFiles from '../../components/pg-education/edu-section-projectFiles'
import Section__TutorialRequests from '../../components/pg-education/edu-section-tutorialRequests'

function EducationPage() {
  return (
    <main
      id='educationPage bg-peach
    '
    >
      <Section__Header />
      <Section__Recent />
      <Section__FromScratch />
      <Section__MadeToOrder />
      <Section__ProjectFiles />
      <Section__TutorialRequests />

      <section id='fromScratch'></section>
      <section id='madeToOrder'></section>
      <section id='projectFiles'></section>
    </main>
  )
}
export default EducationPage
