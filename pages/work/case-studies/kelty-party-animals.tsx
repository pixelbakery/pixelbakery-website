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
const title = 'Party Animals'
const tags = [{ name: 'Creative Concepting', url: '/' }]

//client info
const client = 'Kelty'
const clientLogo = '/img/clients/1x/pixelbakery_client_kelty.png'
const clientURL = 'https://www.kelty.com/'

// Project Header
const heroVideo = '340232287'
const projectSubhead = "Bringing mischievous animals to life for a rebrand."
const projectExcerpt = 'How animation brought to life party animals stealing a camper’s gear that is Kelty.'
const projectIntroduction = 'Kelty is a 67-year-old camping gear company based out of Boulder, CO. The original inventor of the external frame backpack, the spirit of the brand is all about getting people outside to re-discover the joy they felt playing outside as a kid. Even their founder, Dick Kelty, left his job at Lockheed to spend more time in the outdoors.   <br/>  <br/>With a loyal base of customers in the baby boomer generation, Kelty rebranded to reach a new audience of active 25-45 year olds. That’s where we came in: they wanted a short animated video to show off their products in a way that would appeal to millennials, with little or no voiceovers or text.   <br/>  <br/> We created a short animation that was playful and a little bit edgy to capture the spirit of an outdoor escapade and appeal to a new generation of campers.'

// credits
const credits = [
  { name: 'Jordan Lambrecht', title: 'Director' },
  { name: 'Karley Johnson', title: 'Executive Producer'},
  { name: 'Hannah Klemme', title: 'Lead Illustrator'},
  { name: 'Ben Kamprath', title: 'Illustrator'},
  { name: 'Madeline Christensen', title: 'Animator'},
  { name: 'Elaine Dye', title: 'Account Manager'},
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
         In the ideation stage, we dreamt big. Kelty’s brand is playful with a casual, go-anywhere, do-anything attitude that’s all about not taking yourself too seriously. They’re a company that wants to appeal to fun-loving, adventurous people–outdoorsy, but not so outdoorsy that they’re climbing Mount Everest. Kelty’s gear is for the weekend warrior, spur-of-the-moment, music-festival-campsite type.
        </p>
        <p>
        Our challenge was to create something that would reach an audience that is well-versed in being “advertised to.” We needed to shoot for a playfully authentic tone without pandering. The animation had to showcase six different Kelty products in a way that is enjoyable to watch solely for the sake of entertainment—in other words, if it came up as a targeted ad on Instagram, you might stop scrolling to watch the whole thing.
        </p>
        <p>
        With no voiceover or text to work with, we came up with the “Party Animals” concept. It tells the story of life after a long day outdoors from the perspective of animals that come out to play when the night is young. A feisty pet dog, Fête, and a scheming group of wild animals put together a forest rager with stolen beer, gear, and pool floaties under the noses of sleeping human campers.
        </p>
        <p>
        The production called for a laundry list of assets, including Kelty gear and miscellaneous props, like disco balls and water guns. We took time in crafting each item, illustrating with uniform textures, gradients, and color schemes. We animated the forest scenery with moving shadows and flickering light from campfires and fireflies.
        </p>
        <p>
        We brought each character to life in their own way (see: the dancing bear). It was a blast to craft an attitude and personality for each animal though simple movement and only a handful of sound effects. Top it all off with a couple music tracks, and “Party Animals” was a reality.
        </p>
        <p>
        The end product was a 60 second video for the Kelty website and two shorter teaser modulations for social media.
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