import React from 'react'
import Main from '../../../components/Main'

// case study components
import CaseStudies_Header from '../../../components/CaseStudies/CaseStudies_Header'
import CaseStudies_Tags from '../../../components/CaseStudies/CaseStudies_Tags'
import CaseStudies_OtherProjects from '../../../components/CaseStudies/CaseStudies_OtherProjects'
import CaseStudies_BecomeAClient from '../../../components/CaseStudies/CaseStudies_BecomeAClient'
import CaseStudies_PrevNext from '../../../components/CaseStudies/CaseStudies_PrevNext'
import CaseStudies_Credits from '../../../components/CaseStudies/CaseStudies_Credits'

// project info
const title = 'Gearhead Magic'

const tags = [
  { enabled: true, name: 'Creative Concepting', url: '/' },
  { enabled: true, name: 'Logo Animation', url: '/' },
  { enabled: true, name: 'Motion Design', url: '/' },
]

//client info
const client = 'Backcountry'
const clientLogo = '/img/client-logos/Black-Sola-Logo.png'
const clientURL = 'https://backcountry.com'

// Project Header
const heroVideo = '669198523'
const projectSubhead = "i'm a big old subheader"
const projectExcerpt = 'copy copy copy'
const projectIntroduction = 'copy copy copy'

// credits
const credits = [
  { name: 'Jordan Lambrecht', title: 'Director' },
  { name: 'Samee Callahan', title: 'Associate Creative Director' },
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
