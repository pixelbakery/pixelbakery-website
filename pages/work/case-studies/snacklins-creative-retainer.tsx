import Main from '@parts/Main'

// case study components
import CaseStudies_Header from '@caseStudies/CaseStudies_Header'
import CaseStudies_Tags from '@caseStudies/CaseStudies_Tags'
import CaseStudies_OtherProjects from '@caseStudies/CaseStudies_OtherProjects'
import CaseStudies_BecomeAClient from '@caseStudies/CaseStudies_BecomeAClient'
import CaseStudies_Credits from '@caseStudies/CaseStudies_Credits'
import CaseStudies_PrevNext from '@caseStudies/CaseStudies_PrevNext'

// project info
const title = 'Creative Retainer'
const tags = [{ name: 'Creative Concepting', url: '/' }]

//client info
const client = 'SNACKLINS'
const clientLogo = '/img/clients/1x/pixelbakery_client_SNACKLINS.png'
const clientURL = 'https://snacklins.com/'

// Project Header
const heroVideo = '640466563'
const projectSubhead = 'big subhead'
const projectExcerpt = 'An ongoing retainer with the tastiest plant crisps around.'
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
