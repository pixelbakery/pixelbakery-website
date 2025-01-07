import { H2, H3, Lead } from '@typography'
import { InnerWrapper, PageSection, Button_Outlined, Pill, Button_Filled } from '@parts'

import Link from 'next/link'

const talents = [
  {
    service: 'Animation',
    link: '#animation',
  },
  {
    service: 'Video Production',
    link: '#video-production',
  },
  {
    service: 'Creative Strategy',
    link: '#creative-strategy',
  },
  {
    service: 'Motion Mixer',
    link: '/logo-animation',
  },
  {
    service: 'Emerging Media',
    link: '#emerging-media',
  },
  {
    service: 'Social Media Kits',
    link: '#social-media',
  },
]
function ServicesOverview_Intro() {
  return (
    <PageSection color='cream' id={'overview'}>
      <InnerWrapper>
        <div className='flex justify-center'>
          <H2 className='max-w-4xl mx-auto text-center md:max-w-4xl 2xl:max-w-4xl 3xl:max-w-4xl'>
            We don't try to do everything– we focus on what we're great at
          </H2>
        </div>
        <Lead className='mx-auto text-center' color='blue-dark'>
          Check out our work and let us know if you think we&apos;d vibe
        </Lead>
        <div className='flex flex-wrap justify-center gap-x-8'>
          <Button_Filled
            text={'Get Started'}
            link={'/onboarding'}
            center={false}
            bgColor={'blue'}
            textColor={'cream'}
            chevronDirection={''}
          />
          <Button_Outlined
            text='Our Work'
            link={'/work'}
            color='blue'
            center={false}
            chevronDirection={''}
          />
        </div>
        <div className=''>
          <H3 className='pb-2 mx-auto mt-10 mb-5 text-center text-blue-dark'>
            Explore some of our talents
          </H3>
          <div className='flex flex-wrap justify-center max-w-2xl pt-4 mx-auto gap-x-4 gap-y-6'>
            {talents.map((talent) => {
              return (
                <Link
                  hrefLang={'en-US'}
                  href={talent.link}
                  key={talent.link}
                  className='duration-300 hover:scale-98'
                >
                  <Pill
                    text={talent.service}
                    bgColor='pink'
                    textColor='cream'
                    size='sm'
                    className=''
                  />
                </Link>
              )
            })}
          </div>
        </div>
      </InnerWrapper>
    </PageSection>
  )
}
export default ServicesOverview_Intro
