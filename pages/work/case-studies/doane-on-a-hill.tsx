import Main from '@parts/Main'
import { PropsWithChildren } from 'react'
// case study components
import CaseStudies_Header from '@caseStudies/CaseStudies_Header'
import CaseStudies_Tags from '@caseStudies/CaseStudies_Tags'
import CaseStudies_Credits from '@caseStudies/CaseStudies_Credits'

import CaseStudies_OtherProjects from '@caseStudies/CaseStudies_OtherProjects'
import CaseStudies_BecomeAClient from '@caseStudies/CaseStudies_BecomeAClient'
import CaseStudies_PrevNext from '@caseStudies/CaseStudies_PrevNext'
import CaseStudies_Description from '@caseStudies/CaseStudies_Description'

import Image from 'next/image'
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
      <CaseStudies_Description
        headerColor={'dark-blue'}
        textColor={'cream'}
        bgColor={'blue'}
        header={'Process'}
      >
         <p>
         After sifting through decades of photos and videos from throughout Doane’s history, we pulled together a timeline of material that would be set to a high-energy percussion track we remastered ourselves. We knew we wanted to build to a pivotal movement in the music where the animation switched from the past to the present.
        </p>
        <p>
        Typography was the true hero of this video. We made sure to time out every beat to make each word pop with energy and significance. Once we got a feel for how the words and music would weave together, we sprinkled in images and video to further accentuate the look and feel.
        </p>
        <p>
        The end product was a sweet mission roll-out video that’s sure to satisfy all typography and animation enthusiasts.
        </p>
  
      </CaseStudies_Description>

     <CaseStudies_Description header={''} bgColor={'cream'}>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          <div className='col-span-1 relative h-full w-full'>
            <Image
              src={'/img/work/KN_ECommPromo_SnackPack.gif'}
              layout={'fill'}
              alt={'DESCRIPTION GOES HERE'}
              objectFit={'contain'}
            />
          </div>
        </div>
      </CaseStudies_Description>
      <CaseStudies_Credits credits={credits} />
      <CaseStudies_PrevNext title={title} />

      <CaseStudies_OtherProjects client={client} title={title} />
      <CaseStudies_BecomeAClient />
    </Main>
  )
}

export default caseStudy_Backcountry_GearheadMagic