import React from 'react'
import Main from '../../../components/Main'

// case study components
import CaseStudies_Header from '../../../components/CaseStudies/CaseStudies_Header'
import CaseStudies_Tags from '../../../components/CaseStudies/CaseStudies_Tags'
import CaseStudies_OtherProjects from '../../../components/CaseStudies/CaseStudies_OtherProjects'
import CaseStudies_BecomeAClient from '../../../components/CaseStudies/CaseStudies_BecomeAClient'
import CaseStudies_Credits from '../../../components/CaseStudies/CaseStudies_Credits'
import CaseStudies_PrevNext from '../../../components/CaseStudies/CaseStudies_PrevNext'
import CaseStudies_Description from '../../../components/CaseStudies/CaseStudies_Description'

// project info
const title = 'On A Hill'
const tags = [
  { enabled: true, name: 'motion design', url: '/' },
  { enabled: true, name: 'post-production', url: '/' },
]

//client info
const client = 'Doane University'
const clientLogo = '/img/clients/pixelbakery_client_doane.png'

const clientURL = 'https://doane.edu'

// Project Header
const heroVideo = '362560267'
<<<<<<< HEAD
const projectSubhead = "The history of Doane planted a seed that has grown into a new mission."
const projectExcerpt = 'How that college on a hill grew into a University that is Doane.'
const projectIntroduction = 'To introduce their new school mission, vision, and values, Doane University came to us wanting a video that showed their past, present, and future. They needed a way to captivate current and potential students and steer them toward their new vision.'

// credits
const credits = [
  { name: 'Jordan Lambrecht', title: 'Director' },
  { name: 'Karley Johnson', title: 'Art Director'},
  { name: 'Tyler Loebig', title: 'Animation Lead'},
  { name: 'Josie Sittig', title: 'Account Manager'},
  { name: 'Yoni Gill', title: 'Account Manager'},
=======
const projectSubhead = "i'm a big old subheader"
const projectExcerpt = 'copy copy copy'
const projectIntroduction =
  'To introduce their new school mission, vision, and values, Doane University wanted a video that showed their past, present, and future. They needed a way to captivate current and potential students and steer them toward their new vision.<br/><br/>That’s where we whipped up a sweet video to tell their story through a mix of images, kinetic typography, and a killer drumbeat.'
const process =
  'After sifting through decades of photos and videos from throughout Doane’s history, we pulled together a timeline of material that would be set to a high-energy percussion track we remastered ourselves. We knew we wanted to build to a pivotal movement in the music where the animation switched from the past to the present.<br/><br/>Typography was the true hero of this video. We made sure to time out every beat to make each word pop with energy and significance. Once we got a feel for how the words and music would weave together, we sprinkled in images and video to further accentuate the look and feel.<br/><br/>The end product was a sweet mission roll-out video that’s sure to satisfy all typography and animation enthusiasts.'
// credits
const credits = [
  { name: 'Jordan Lambrecht', title: 'Art Director' },
  { name: 'Karley Johnson', title: 'Creative Director' },
  { name: 'Tyler Loebig', title: 'Motion Designer' },
  { name: 'Josie Sittig', title: 'Account Manager' },
>>>>>>> main
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
      <CaseStudies_Description header={'Process'} bodyCopy={process} />

      <CaseStudies_Credits credits={credits} />
      <CaseStudies_PrevNext title={title} />

      <CaseStudies_OtherProjects client={client} title={title} />
      <CaseStudies_BecomeAClient />
    </Main>
  )
}

export default caseStudy_Backcountry_GearheadMagic
