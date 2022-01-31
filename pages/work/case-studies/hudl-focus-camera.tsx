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
const title = 'The Focus Camera'
const tags = [{ name: 'Creative Concepting', url: '/' }]

//client info
const client = 'Hudl'
const clientLogo = '/img/client-logos/Black-Sola-Logo.png'
const clientURL = 'https://backcountry.com'

// Project Header
const heroVideo = '324888735'
const projectSubhead = "Bringing the Hudle Focus prototype to life through a video of highly realistic models."
const projectExcerpt = 'What started as just a prototype ended with realistic renders and a quality product to show potential clients.'
const projectIntroduction = 'Hudl came to us with a brand new, self-automated camera that could be used by sports teams to capture game footage without a cameraman, called the Hudl Focus. They needed a polished, fast-paced video to generate some hype around their exciting, homegrown product. Cool, right? One problem: the Focus hadn’t actually been manufactured yet.'

// credits
const credits = [
  { name: 'Jordan Lambrecht', title: 'Director'},
  { name: 'Karley Johnson', title: 'Animator'},
  { name: 'Elaina Dye', title: 'Account Manager'},
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
