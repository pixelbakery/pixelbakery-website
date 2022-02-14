/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
// import { NextPage } from 'next'

import PageSection from '@parts/PageSection'
import Button_Filled from '@parts/Button_Filled'
import Main from '@parts/Main'
import H2 from '@typography/H2'
import InnerWrapper from '@parts/InnerWrapper'
import H2AndLead from '@typography/H2AndLead'
import Link from 'next/link'

function CareerPost() {
  return (
    <Main>
      <PageSection className='min-h-screen mt-32'>
        <InnerWrapper>
          <div className='max-w-2xl mx-auto'>
            <h1 className='text-4xl text-peach'>job position</h1>
            <H2 color='blue' className='text-6xl text-blue'>
              anything goes!
            </H2>
          </div>

          <div className='text-blue text-lg max-w-2xl mx-auto'>
            <p className='font-bold'>
              Pixel Bakery is growing, so if you think you have a great idea of how you could grow
              with us, make your case and apply!
            </p>
            <p>Qualities we're after:</p>
            <ul className='list-disc font-normal text-lg text-wine flex flex-col gap-4'>
              <li>
                The ability to self-teach and problem solve (all of the technical skills I’ve
                learned about motion design come from Youtube and obsessive curiosity)
              </li>
              <li>Definitely not allergic to dogs* </li>
              <li>
                Has a hard work ethic and intense passion (We value work ethic over skill any day.
                Skill can be taught, drive cannot)
              </li>
              <li>Someone who is constantly tinkering and experimenting with their craft</li>
              <li>
                Enjoys Taylor Swift and Glass Animals, because that’s apparently the only two bands
                our communal Spotify knows how to play.
              </li>
            </ul>

            <p>
              While our culture is extremely relaxed (you are allowed to set your own hours), things
              move very quickly around here. We’re a nimble team, which means you will have an
              enormous impact on our company and our work. You will learn to meet daily, weekly, and
              long-term deadlines in a fast-paced environment. Your days will vary greatly with a
              wide range of potential experiences. You will become a master of cold calling, and
              maybe even go across the country to help us find awesome new clients.
            </p>
            <p className='text-sm text-wine-300 leading-tight italic'>
              *We’re legally obligated to say that this is totally a joke, and that Pixel Bakery is
              an equal opportunity employer. But there are a lot of dogs that hang out in our
              office.
            </p>
            <div className='pt-4'>
              <Link href='/careers' passHref>
                <a className='border-b-2 pb-1 border-b-blue'> ← back to all careers</a>
              </Link>
            </div>
          </div>
        </InnerWrapper>
      </PageSection>

      <PageSection color='blue-dark'>
        <InnerWrapper>
          <div className='flex flex-col justify-center px-8'>
            <H2AndLead
              headerColor='pink-light'
              leadColor='pink'
              headerText={'Does that sound like you?'}
              leadText={'great, get at it.'}
            />
            <Button_Filled
              text='apply for position'
              bgColor={'pink-light'}
              textColor={'pink'}
              chevronDirection='right'
              link={'/careers/application'}
              center={false}
            />
          </div>
        </InnerWrapper>
      </PageSection>
    </Main>
  )
}
export default CareerPost
