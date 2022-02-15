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
const title = 'Bee Better'
const tags = [{ name: 'Creative Concepting', url: '/' }]

//client info
const client = 'First Honey'
const clientLogo = '/img/clients/1x/pixelbakery_client_firsthoney.png'
const clientURL = 'https://firsthoney.com/'

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
      <CaseStudies_Description
        headerColor={'dark-blue'}
        textColor={'cream'}
        bgColor={'blue'}
        header={'Process'}
      >
         <p>
         First Honey wanted to highlight two products in less than 30-second video modulations for social media: their fast-healing ointment and all-natural bandages. For the first animation, we wanted the tone to be nurturing, lighthearted, and relatable; something that would appeal to our target demographic. A family-oriented playground scenario would achieve this tone. The second story gives a playful, inside look into the beehive production of their bandages. We wanted the tone to be informative, caring, and positive. To tie the animations together, we created a lovable bee character to follow through the animations.
        </p>
        <p>
        Once we had an idea of where the script was going, we were able to storyboard each scene, finalize illustrations and start animating. We chose a pastel color palette that would compliment the First Honey logo and product design. The illustrations are simple and shape-based, and animated, take on a gentle and inviting nature. Subtle texturing and playful music pulled the project together.
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