import Main from '@parts/Main'

// case study components
import CaseStudies_Header from '@caseStudies/CaseStudies_Header'
import CaseStudies_Tags from '@caseStudies/CaseStudies_Tags'
import CaseStudies_OtherProjects from '@caseStudies/CaseStudies_OtherProjects'
import CaseStudies_BecomeAClient from '@caseStudies/CaseStudies_BecomeAClient'
import CaseStudies_Credits from '@caseStudies/CaseStudies_Credits'
import CaseStudies_PrevNext from '@caseStudies/CaseStudies_PrevNext'

// project info
const title = 'Rideshare Oversharer'
const tags = [{ name: 'Creative Concepting', url: '/' }]

//client info
const client = 'SOLA'
const clientLogo = '/img/client-logos/Black-Sola-Logo.png'
const clientURL = 'https://sola.com'

// Project Header
const heroVideo = '392586701'
const projectSubhead = "Using dry-humor to create something much different for a new demographic that's choosing healthier options."
const projectExcerpt = 'An awkward Uber ride leads to an average guy trying to get home to find peace in a sandwhich made with keto-friendly, carb-concious SOLA bread.'
const projectIntroduction = 'The SOLA company came to us to create a 60-second commercial that would promote their low-carb, keto-friendly bread. They needed something that would appeal to their millennial demographic: hopefully combining dry humor with a relatable scenario to today’s young adult.'

// credits
const credits = [
  { name: 'Kabin Thomas', title: 'Driver'},
  { name: 'Nathan Dunham', title: 'Passenger'},
  { name: 'Karley Johnson', title: 'Editor' },
  { name: 'Michael Hennings', title: 'Cinematographer'},
  { name: 'Madeline Christensen', title: 'Scriptwriter'},
  { name: 'Jordan Lambrecht', title: 'Animator'},
  { name: 'Aaron Smith', title: 'Gaffer'},
  { name: 'Katie Jenkins', title: 'Makeup Artist'},
  { name: 'Hannah Klemme', title: 'Production Assistant'},
  { name: 'Shanda Shappell', title: 'Production Assistant'},
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
