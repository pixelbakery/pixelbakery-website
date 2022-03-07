import Main from '@parts/Main'
import CaseStudies_Header from '@caseStudies/CaseStudies_Header'
import CaseStudies_Tags from '@caseStudies/CaseStudies_Tags'
import CaseStudies_OtherProjects from '@caseStudies/CaseStudies_OtherProjects'
import CaseStudies_BecomeAClient from '@caseStudies/CaseStudies_BecomeAClient'
import CaseStudies_PrevNext from '@caseStudies/CaseStudies_PrevNext'
import CaseStudies_Credits from '@caseStudies/CaseStudies_Credits'

///////////////////////////////////////////////////////////////////////////////////////////////////////
// Fill out the details of the case study below and the page will be automatically (mostly) populated.
// See the README for a more in-debth explanation
///////////////////////////////////////////////////////////////////////////////////////////////////////

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
const projectSubhead = "Motion graphics magic for the G.O.A.T. outdoor retailer."
const projectExcerpt = 'Turning (Gear)heads with motion graphic magic for the esteemed outdoor retailer, Backcountry.'
const projectIntroduction = 'Backcountry, an online specialty retailer known for selling the highest-performing outdoor gear, reached out to Pixel Bakery, in need of logo, typeface, and customer experience animations to supplement a series of four YouTube ads for their brand.   <br/>  <br/>The deliverables to each video were to be unique, as each closing logo animation was a subtle nod to a different outdoor industry. Since these ads move so quickly, Pixel Bakery’s main objective was to produce tasteful, quick animations that were punchy, natural, and memorable.   <br/>  <br/>With a tight turnaround time of just under two weeks, the team immediately got to work. Multiple directional concepts were provided for each animation, giving the client a chance to see a handful of options for each deliverable before narrowing down their selections.   <br/>  <br/>Testimonial from client:   <br/>  <br/>Please pass this message along to the broader team. I cannot thank you and your team enough for the collaboration on this project. The animations look absolutely fantastic and everyone that has seen the videos are blown away. I appreciate your willingness to be nimble and adjust on the fly. This project would not have come together without Pixel Bakery and I am eternally grateful.   <br/>  <br/>A million thanks. '

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
