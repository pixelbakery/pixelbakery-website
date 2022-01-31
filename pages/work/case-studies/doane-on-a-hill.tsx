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
const title = 'On A Hill'
const tags = [{ name: 'Creative Concepting', url: '/' }]

//client info
const client = 'Doane University'
const clientLogo = '/img/client-logos/Black-Sola-Logo.png'
const clientURL = 'https://doane.edu'

// Project Header
const heroVideo = '362560267'
const projectSubhead = "The history of Doane planted a seed that has grown into a new mission."
const projectExcerpt = 'How that college on a hill grew into a University that is Doane.'
const projectIntroduction = 'To introduce their new school mission, vision, and values, Doane University came to us wanting a video that showed their past, present, and future. They needed a way to captivate current and potential students and steer them toward their new vision.'

// credits
const credits = [
  { name: 'Jordan Lambrecht', title: 'Director' },
  { name: 'Karley Johnson', title: 'Art Director'},
  { name: 'Tyler Loebig', title: 'Animation Lead'},
  { name: 'Josie Sittig', title: 'Project Manager'},
  { name: 'Yoni Gill', title: 'Account Manager'},
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
        a
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
