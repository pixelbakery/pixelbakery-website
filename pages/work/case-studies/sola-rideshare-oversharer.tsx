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
const title = 'Rideshare Oversharer'
const tags = [{ name: 'Creative Concepting', url: '/' }]

//client info
const client = 'SOLA'
const clientLogo = '/img/clients/pixelbakery_client_sola.png'
const clientURL = 'https://sola.com'

// Project Header
const heroVideo = '392586701'
const projectSubhead = "Using dry-humor to create something much different for a new demographic that's choosing healthier options."
const projectExcerpt = 'An awkward Uber ride leads to an average guy trying to get home to find peace in a sandwhich made with keto-friendly, carb-concious SOLA bread.'
const projectIntroduction = 'The SOLA company came to us to create a 60-second commercial that would promote their low-carb, keto-friendly bread. They needed something that would appeal to their millennial demographic: hopefully combining dry humor with a relatable scenario to today’s young adult.'

// credits
const credits = [
  { name: 'Kabin Thomas', title: 'Driver'},
  { name: 'Nathan Dunham', title: 'Passenger'},
  { name: 'Karley Johnson', title: 'Editor' },
  { name: 'Michael Hennings', title: 'Cinematographer'},
  { name: 'Madeline Christensen', title: 'Scriptwriter'},
  { name: 'Jordan Lambrecht', title: 'Animator'},
  { name: 'Aaron Smith', title: 'Gaffer'},
  { name: 'Katie Jenkins', title: 'Makeup Artist'},
  { name: 'Hannah Klemme', title: 'Production Assistant'},
  { name: 'Shanda Shappell', title: 'Production Assistant'},
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
      <CaseStudies_Tags tags={tags} />
      <CaseStudies_Description
        headerColor={'dark-blue'}
        textColor={'cream'}
        bgColor={'blue'}
        header={'Process'}
      >
          <p>
          To bring an awkward Uber ride to life, you’ve gotta film in a moving car. Not the easiest task. Luckily, our small but mighty team works well in tight spaces.
        </p>
        <p>
        We brought in a few reinforcements for an extra hand with lighting, filming, makeup, and assistance on set. We lucked out and found two local actors perfect for the Uber driver and his unfortunate passenger, and both were ready and willing to drive around in circles for hours and brave the bitter, midwest winter. We’ve got to give extra props to Kabin (the Driver) for his execution of the script, but also being able to ad-lib beautifully when we needed him to. Much of what made the final cut was made up on the spot.
        </p>
        <p>
        Authenticity was key with this project, and we felt a green screen just wouldn’t do the scene justice. Instead, we were able to mount a Black Magic Pocket Cinema 4k on the hood of the car to get shots through the windshield, and then inside the car for some additional angles. We directed via walkie talkies and followed in a car. Many people were crammed in trunks. Our mothers disapproved. Exciting stuff!
        </p>
        <p>
        Don’t forget about the real reason we’re all here, though: bread. We crafted trays of sandwiches for the perfect ending shot, and put our creative team to the task of food styling (it’s not easy.) If half of our time was spent in the trunk of a moving car for this commercial, the other half was spent watching Nathan trying to blissfully eat sandwich after sandwich until we told him to stop. (Sorry, Nathan.)
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