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
const title = 'The Price of Free'
const tags = [{ name: 'Creative Concepting', url: '/' }]

//client info
const client = 'SoulPancake'
const clientLogo = '/img/clients/1x/pixelbakery_client_soulpancake.png'
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
      <CaseStudies_Description
        headerColor={'dark-blue'}
        textColor={'cream'}
        bgColor={'blue'}
        header={'Process'}
      >
         <p>
         Since the animation was a promotional item for a film, it had a tight timeline and a hard deadline. We were given about two weeks after receiving the script to have the finished video ready for publication. This meant the project would become a full-team effort, where we were storyboarding, designing, and animating – all at the same time.
        </p>
        <p>
        We started by going over the script, and jotting down some visual notes. Because the turnaround time was so short, we created a written storyboard rather than a hand-drawn one like we normally do. We went through the script line by line and took notes about what we wanted that scene to look like and how we wanted it to move. Since all visual cues were written down, the language had to be extremely specific and concise.
        </p>
        <p>
        We started designing the first scene we needed animated, and from there began designing and animating congruently. This helped us speed up the production since we had two designers and animating all together. After all animating was done, we sourced and added background music and sound effects to give the video a much more engaging and dramatic tone.
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
