import Main from '@parts/Main'

// case study components
import CaseStudies_Header from '@caseStudies/CaseStudies_Header'
import CaseStudies_Tags from '@caseStudies/CaseStudies_Tags'
import CaseStudies_OtherProjects from '@caseStudies/CaseStudies_OtherProjects'
import CaseStudies_BecomeAClient from '@caseStudies/CaseStudies_BecomeAClient'
import CaseStudies_Credits from '@caseStudies/CaseStudies_Credits'
import CaseStudies_PrevNext from '@caseStudies/CaseStudies_PrevNext'

// project info
const title = 'Bee Better'
const tags = [{ name: 'Creative Concepting', url: '/' }]

//client info
const client = 'First Honey'
const clientLogo = '/img/client-logos/Black-Sola-Logo.png'
const clientURL = 'https://backcountry.com'

// Project Header
const heroVideo = '372482666'
const projectSubhead = "Simple and shape-based illustrations promote First Honey's all-natural healing products."
const projectExcerpt = 'Illustrating and animating a cute bumblebee mascot.'
const projectIntroduction = 
'Based in Tennessee, First Honey is a bandage company that uses manuka honey to provide a unique, all-natural healing experience—manuka honey is native to New Zealand and produced by bees that pollinate the manuka bush. First Honey came to us looking for an engaging way to captivate their audience and encourage them to give their manuka honey-infused bandages and ointments a try. We created two playful, family-oriented animations to help show the power of First Honey’s fast, all-natural healing.'

// credits
const credits = [
  { name: 'Jordan Lambrecht', title: 'Director' },
  { name: 'Karley Johnson', title: 'Art Director' },
  { name: 'Madeline Christensen', title: 'Animator'},
  { name: 'Hannah Klemme', title: 'Lead Illustrator'},
  { name: 'Tyler Loebig', title: 'Illustrator'},
  { name: 'Josie Sittig', title: 'Account Executive'},
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
