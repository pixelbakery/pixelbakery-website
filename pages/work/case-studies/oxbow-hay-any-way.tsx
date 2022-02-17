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
const title = 'Hay, Any Way'
const tags = [{ name: 'Creative Concepting', url: '/' }]

//client info
const client = 'Oxbow Animal Health'
const clientLogo = '/img/clients/1x/pixelbakery_client_oxbow.png'
const clientURL = 'https://oxbowanimalhealth.com'

// Project Header
const heroVideo = '397498496'
const projectSubhead = "for all small pets looking for something healthier in their day-to-day."
const projectExcerpt = 'Through tiny sets and star quality small pets Oxbow Animal Health’s organic hay line is fit for all little fury friends.'
const projectIntroduction =  
'Our second project with Oxbow Animal Health centered on their organic hay line, which includes six types of hay to fit different small pet ages and personalities.   <br/>  <br/>Basically, we heard “small pet personalities” and ran with it.   <br/>  <br/> We found six local small pets with star quality, built some tiny sets, got a chinchilla to drink from a tea cup and a bunny to do some yoga, and “Hay Any Way” was born.'

// credits
const credits = [
  { name: 'Jordan Lambrecht', title: 'Director' },
  { name: 'Karley Johnson', title: 'Videographer'},
  { name: 'Madeline Christensen', title: 'Lead Animator'},
  { name: 'Hannah Klemme', title: 'Animator'},
  { name: 'Natalie Roteman', title: 'Account Executive'},
  { name: 'Kaitlyn Pfannenstiel', title: 'Account Manager'},
  { name: 'Tyler Leobig', title: 'Set Designer'},
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
         Our process for “Hay Any Way” began with brainstorming possible human-like personalities we could illustrate with bunnies, hamsters, chinchillas, and guinea pigs. We settled on six favorites: a western cowboy on a ranch, a yogi a their zen studio, a posh pet having a tea party, an artist hard at work, and a rough-hewn camping enthusiast.
        </p>
        <p>
        We spent some time away from our computers to build mini “sets” for each character. Wanting to capture the bright color scheme of each hay flavor, we built small rooms with prop elements painted in a mostly monochromatic, bold color scheme. We loved the idea of the colors really popping on a social media feed.
        </p>
        <p>
        Working with small pets is always a challenge, but rewarding! Somehow, we’re beginning to become experts at this sort of thing. A day of shooting small pets consists of a lot of small wins when your tiny stars finally start taking direction. Divas, am I right?
        </p>
        <p>
        All kidding aside, we were so fortunate to work with the most enthusiastic and patient pet owners willing to donate their pets and their time to the shoot.
        </p>
        <p>
        In post-production, we added sound effects and frame-by-frame, doodle-y animation as a final touch. The result is cuteness overload that we were able to modulate for all of Oxbow’s social media platforms, providing them with various lengths to accommodate different advertising specifications.
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