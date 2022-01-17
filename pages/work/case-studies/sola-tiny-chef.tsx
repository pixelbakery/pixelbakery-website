import React from 'react'
import CaseStudies_Header from '../../../components/CaseStudies/CaseStudies_Header'
import CaseStudies_Tags from '../../../components/CaseStudies/CaseStudies_Tags'
import SolaTinyChef_Description from '../../../components/CaseStudies/CaseStudies_Description'
import SolaTinyChef_PreProduction from '../../../components/CaseStudies/SolaTinyChef/SolaTinyChef_PreProduction'
import SolaTinyChef_Production from '../../../components/CaseStudies/SolaTinyChef/SolaTinyChef_Production'
import SolaTinyChef_PostProduction from '../../../components/CaseStudies/SolaTinyChef/SolaTinyChef_PostProduction'
import CaseStudies_Credits from '../../../components/CaseStudies/CaseStudies_Credits'
import SolaTinyChef_OtherProjects from '../../../components/CaseStudies/CaseStudies_OtherProjects'
import CaseStudies_BecomeAClient from '../../../components/CaseStudies/CaseStudies_BecomeAClient'
import Project from '../../../types/project'
import Main from '../../../components/Main'

const title = 'Tiny Chef Magic'
const client = 'SOLA'
const tags = [
  { name: 'Creative Concepting', url: '/' },
  { name: '2d animation', url: '/' },
  { name: 'Scripting & Storyboarding', url: '/' },
  { name: 'Video Production', url: '/' },
]

const credits = [
  { name: 'Maria Smal', title: 'Disgruntled Baker', url: 'https://www.imdb.com/name/nm10696864/' },
  { name: 'Jordan Lambrecht', title: 'Director' },
  { name: 'Michael Hennings', title: 'Director of Photography' },
  { name: 'Karley Johnson', title: 'Executive Producer' },
  { name: 'Cody Jones', title: 'First Camera Assistant' },
  { name: 'Madeline Christensen', title: 'Scriptwriter' },
  { name: 'Daniel Hinz', title: 'Animation Lead' },
  { name: 'Aaron Smith', title: 'Gaffer' },
  { name: 'Scott Pittock', title: 'Grip' },
  { name: 'Melissa Young', title: 'Food Stylisst' },
  { name: 'Hannah Klemme', title: 'Production Assistant' },
  { name: 'Miranda Hussey', title: 'Production Assistant' },
]
const otherProjects = [
  {
    name: 'Rideshare Overshare',
    url: '/',
    client: 'SOLA',
    image: '/img/placeholder02.png',
    tag: 'Video Production',
  },
]
type Props = {
  project: Project
}

function SolaTinyChef({ project }: Props) {
  return (
    <Main className='overflow-x-hidden'>
      <CaseStudies_Header
        client='SOLA'
        clientLogo='/img/client-logos/Black-Sola-Logo.png'
        projectName='Tiny Chef Magic'
        projectExcerpt='How animation brought to life a Tiny Chef with the ability to create keto-friendly,
carb-conscious deliciousness that is SOLA bread.'
        projectIntroduction='The SOLA Company is a low-carb, low-sugar, keto-friendly brand that came to Pixel Bakery looking to make an animated explainer video showcasing their bread. We had previously
worked with SOLA in the live-action realm and were extremely excited to see what we could
do for them within another specialty of ours – animation.'
        heroVideo='640466563'
        projectSubhead='Bringing a Tiny Chef with big, keto-friendly ideas to life.'
      />

      <CaseStudies_Tags tags={tags} />
      <SolaTinyChef_Description
        bodyCopy=' The live-action portion of this project consisted of hiring a production crew to assist in
bringing the Tiny Chef Magic to life. The video production team included a director,
gaffer, grip, assistant camera, and a FOOD STYLIST (how legit). Maria Smal, Pixel Bakery’s
social media manager, was pegged as the perfect candidate to be cast as the homeowner for
the video.'
        header='Project Description'
      />
      <SolaTinyChef_PreProduction />
      <SolaTinyChef_Production />
      <SolaTinyChef_PostProduction />
      <CaseStudies_Credits credits={credits} />
      <SolaTinyChef_OtherProjects title={title} client={client} />
      <CaseStudies_BecomeAClient />
    </Main>
  )
}
export default SolaTinyChef

export async function getStaticProps() {
  return {
    props: {
      title: title,
    },
  }
}
