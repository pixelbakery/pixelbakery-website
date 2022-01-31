import Main from '@parts/Main'

// case study components
import CaseStudies_Header from '@caseStudies/CaseStudies_Header'
import CaseStudies_Tags from '@caseStudies/CaseStudies_Tags'
import CaseStudies_OtherProjects from '@caseStudies/CaseStudies_OtherProjects'
import CaseStudies_BecomeAClient from '@caseStudies/CaseStudies_BecomeAClient'
import CaseStudies_Credits from '@caseStudies/CaseStudies_Credits'
import CaseStudies_PrevNext from '@caseStudies/CaseStudies_PrevNext'

// project info
const title = 'The Price of Free'
const tags = [{ name: 'Creative Concepting', url: '/' }]

//client info
const client = 'SoulPancake'
const clientLogo = '/img/client-logos/Black-Sola-Logo.png'
const clientURL = 'https://thepriceoffree.com'

// Project Header
const heroVideo = '300219367'
const projectSubhead = "bringing child labor to the forefront through animation."
const projectExcerpt = 'How animation promoted a feature documentary by Kailash Satyarthi to free children forced into child labor.'
const projectIntroduction = 'In collaboration with YouTube and Participant Media, we teamed up with SoulPancake to create an animation promoting a feature documentary. The film follows Nobel prize winner Kailash Satyarthi and his mission to free children forced into child labor.'

// credits
const credits = [
  { name: 'Jordan Lambrecht', title: 'Director' },
  { name: 'Karley Johnson', title: 'Art Director' },
  { name: 'Josh Hoepner', title: 'Lead Animtor'},
  { name: 'Hannah Klemme', title: 'Lead Illustrator'},
  { name: 'Tony Bertino', title: 'Account Manager'},
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
