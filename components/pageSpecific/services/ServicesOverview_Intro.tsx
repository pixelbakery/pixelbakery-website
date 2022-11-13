import Button_Filled from '@parts/Button_Filled'
import Button_Outlined from '@parts/Button_Outlined'
import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import Pill from '@parts/Pill'
import H2 from '@typography/H2'
import H3 from '@typography/H3'
import Lead from '@typography/Lead'
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
    service: 'Web Hosting',
    link: '/services/web-hosting',
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
          <H2 className='text-center mx-auto max-w-4xl md:max-w-4xl 2xl:max-w-4xl 3xl:max-w-4xl'>
            We don't try to do everything– we focus on what we're great at
          </H2>
        </div>
        <Lead className='text-center mx-auto' color='blue-dark'>
          Check out our work and let us know if you think we&apos;d vibe
        </Lead>
        <div className='flex justify-center flex-wrap gap-x-8'>
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
          <H3 className='text-blue-dark mt-10 mb-5 pb-2 text-center mx-auto'>
            Explore some of our talents
          </H3>
          <div className='flex justify-center gap-x-4 gap-y-6 flex-wrap max-w-2xl mx-auto pt-4'>
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
