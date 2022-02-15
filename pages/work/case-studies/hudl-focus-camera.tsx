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
const title = 'The Focus Camera'
const tags = [{ name: 'Creative Concepting', url: '/' }]

//client info
const client = 'Hudl'
const clientLogo = '/img/clients/1x/pixelbakery_client_hudl.png'
const clientURL = 'https://www.hudl.com/'

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
      <CaseStudies_Description
        headerColor={'dark-blue'}
        textColor={'cream'}
        bgColor={'blue'}
        header={'Process'}
      >
         <p>
         For the highly anticipated launch of the Hudl Focus, we were asked to make a “sizzle” video. If you’re wondering what a sizzle video is, it’s like when you put meat on a grill and it makes that “sssss” sound—in a marketing sense, it’s gotta feel just like that. It needed to be exciting, it needed to quickly get to the point, and it needed to be…juicy.
        </p>
        <p>
        Hudl came to us with a general concept and storyboards for the what they were looking for. At this point, they had a prototype model of the Hudl Focus, but not a final version. We took their AutoCad file and built out the camera in Cinema 4D to create a workable, 3D file with our system. Recreating tech hardware was a time-consuming challenge, from working with circuitry and motherboards to learning how camera lenses work, among hundreds of other components. In the end we were able to bring them highly realistic renders and a quality product to show potential customers.
        </p>
        <p>
        We filmed during a live high school basketball game to achieve the authentic introductory shots. Working through external factors in a low-lit high school gym was a big undertaking, but a welcome challenge. We provided the team at Hudl with several approaches to get the shots they were after, including some drone work. Hudl had never made a sizzle video, so we offered our industry expertise when it came to things like pacing and how to frame shots.
        </p>
        <p>
        Hudl has a recognizable brand that was important to incorporate and remain consistent throughout. During the project, they were actually going through a slight rebrand that was evolving as we were editing. We wanted to make sure the video had the smooth, sleek look they were aiming for, and less of an emphasis on their bubbly, orange brand colors. After many iterations, we stuck with slate grays and whites, and subtly incorporated orange in a few backdrops and in the reflections on the camera itself.
        </p>
        <p>
        The final product is a hype video with slick 3D animation, cohesive branding, action-packed shots and, let’s be honest, background music that truly slaps.
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