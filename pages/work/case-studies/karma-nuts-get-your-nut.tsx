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
const title = 'Get Your Nuts'
const tags = [{ name: 'Creative Concepting', url: '/' }]

//client info
const client = 'Karma Nuts'
const clientLogo = '/img/clients/1x/pixelbakery_client_karmanuts.png'
const clientURL = 'https://www.karmanuts.com/'

// Project Header
const heroVideo = '426332870'
const projectSubhead =
  "An on-brand animation highlighting all of its health benefits."
const projectExcerpt =
  "Using engaging colors and shapes for an irresistible product that is Karma Nuts."
const projectIntroduction =
  'Karma Nuts is the alternative to the oil-fried cashews that we normally seen on supermarket shelves. These cashews are Wrapped®, giving them an irresistible crunch. We came in to spread the word about this tasty snack by creating a brand video that highlights all its awesome benefits.   <br/>  <br/>The goal was to create a cool and colorful 30-second, e-commerce animation that Karma Nuts could place to quickly tell the story of their products. Using the mandala-shaped logo as inspiration, we wanted to play with all the different flavors of nuts intertwining while giving it a bohemian flare.'

// credits
const credits = [
  { name: 'Jordan Lambrecht', title: 'Director' },
  { name: 'Karley Johnson', title: 'Art Director' },
  { name: 'Madeline Christensen', title: 'Lead Animator' },
  { name: 'Tyler Loebig', title: 'Animator' },
  { name: 'Kaitlyn Pfannenstiel', title: 'Account Executive' },
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
          Karma Nuts wanted the video to showcase their Wrapped® cashews in 30-seconds while making
          sure to highlight all the important health benefits. After examining their brand, we knew
          we wanted to make something with engaging with a lot of small moving parts. It needed to
          catch the audience instantly and hold them until the end by dazzling the eye with color
          and shape. The first step was the script. We made sure to include all of the health
          benefits in a short amount of time without it sounding like a shopping list. Once we got
          the tone set, we moved on to product photography.
        </p>
        <p>
          There is quite an assortment of flavors with two different sizes of packaging, so we had
          to diligently make sure to note each cashew. Using a green screen, we placed out the
          cashews making it easy to cut out for later. We then shot the snack packs and larger
          containers until we hit each of the flavors. After we meticulously cut out each nut and
          package, we moved into After Effects.
        </p>
        <p>
          The end result is a captivating and colorful animation that is on-brand for Karma Nuts.
          You can check out this video on Amazon, their website, and social media.
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
