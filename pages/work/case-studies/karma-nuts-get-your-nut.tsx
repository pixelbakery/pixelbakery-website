import React from 'react'
import Main from '../../../components/Main'

// case study components
import CaseStudies_Header from '../../../components/CaseStudies/CaseStudies_Header'
import CaseStudies_Tags from '../../../components/CaseStudies/CaseStudies_Tags'
import CaseStudies_OtherProjects from '../../../components/CaseStudies/CaseStudies_OtherProjects'
import CaseStudies_BecomeAClient from '../../../components/CaseStudies/CaseStudies_BecomeAClient'
import CaseStudies_Credits from '../../../components/CaseStudies/CaseStudies_Credits'
import CaseStudies_PrevNext from '../../../components/CaseStudies/CaseStudies_PrevNext'

// project info
const title = 'Get Your Nuts'
const tags = [{ name: 'Creative Concepting', url: '/' }]

//client info
const client = 'Karma Nuts'
const clientLogo = '/img/client-logos/Black-Sola-Logo.png'
const clientURL = 'https://backcountry.com'

// Project Header
const heroVideo = '426332870'
const projectSubhead = "through a variety of engaging colors and shapes Karma Nuts' Wrapped cashews resulted in captivating animations"
const projectExcerpt = "An on-brand animation of Karma Nuts' Wrapped cashews highlighting all of its health benefits."
const projectIntroduction = 'Karma Nuts is the alternative to the oil-fried cashews that we normally seen on supermarket shelves. These cashews are Wrapped®, giving them an irresistible crunch. We came in to spread the word about this tasty snack by creating a brand video that highlights all its awesome benefits. The goal was to create a cool and colorful 30-second, e-commerce animation that Karma Nuts could place to quickly tell the story of their products. Using the mandala-shaped logo as inspiration, we wanted to play with all the different flavors of nuts intertwining while giving it a bohemian flare.'

// credits
const credits = [
  { name: 'Jordan Lambrecht', title: 'Director' },
  { name: 'Karley Johnson', title: 'Art Director' },
  { name: 'Madeline Christensen', title: 'Lead Animator'},
  { name: 'Tyler Loebig', title: 'Animator'},
  { name: 'Kaitlyn Pfannenstiel', title: 'Account Executive'},
]

function caseStudy_Backcountry_GearheadMagic() {
  return (
    <Main>
      <CaseStudies_Header
        client={client}
        clientURL={clientURL}
        clientLogo={clientLogo}
        projectName={title}
        projectExcerpt={projectExcerpt}
        projectIntroduction={projectIntroduction}
        heroVideo={heroVideo}
        projectSubhead={projectSubhead}
      />
      <CaseStudies_Tags tags={tags} />
      <CaseStudies_Credits credits={credits} />
      <CaseStudies_PrevNext title={title} />

      <CaseStudies_OtherProjects client={client} title={title} />
      <CaseStudies_BecomeAClient />
    </Main>
  )
}

export default caseStudy_Backcountry_GearheadMagic
