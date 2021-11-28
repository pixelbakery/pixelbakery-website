import { NextPage } from 'next'
import Link from 'next/link'
import PageSection from '../../components/PageSection'
import Button from '../../components/parts/button-filled'

let CareerPage: NextPage<{ career: string }> = ({ career }) => {
  return (
    <main className='bg-egg p-4'>
      <PageSection className='lander flex items-center'>
        <div className='mx-auto max-w-6xl'>
          <h1 className='text-4xl text-peach'>job position</h1>
          <h2 className='text-6xl text-blue'> creative director</h2>

          <div className='text-blue text-lg'>
            <p>
              Pixel Bakery is looking for someone to join our team as a full-time account executive.
            </p>

            <p>
              You will prospect new clients, create lots of proposals, transfer the client
              on-boarding process to our internal team, build and foster client relationships, and
              be in constant communication with all active clients.
            </p>

            <p>
              While our culture is extremely relaxed (you are allowed to set your own hours), things
              move very quickly around here. We’re a nimble team, which means you will have an
              enormous impact on our company and our work. You will learn to meet daily, weekly, and
              long-term deadlines in a fast-paced environment. Your days will vary greatly with a
              wide range of potential experiences. You will become a master of cold calling, and
              maybe even go across the country to help us find awesome new clients.
            </p>
          </div>
        </div>
      </PageSection>
      <PageSection className='bg-white my-4'>
        <div className='mx-auto flex gap-8'>
          <div className='w-1/2 h-full flex flex-col justify-center'>
            <h2 className='text-peach'>Responsibilities</h2>
          </div>
          <div className='w-1/2 text-blue text-lg'>
            <p>
              As an integral part of a small studio with 7 people, we all wear multiple hats, you
              will too!
            </p>
            <ul>
              <li>Warm and cold outreach to prospective clients</li>
              <li>Maintaining all client relationships</li>
              <li>Master of pitching and proposals</li>
              <li>Acting as a leader to your team</li>
              <li>Attending networking events on Pixel Bakery’s behalf</li>
              <li>Breadwinners (referral) program specialist</li>
            </ul>
          </div>
        </div>
      </PageSection>
      <PageSection className='bg-pink my-4'>
        <div className='mx-auto flex gap-8'>
          <div className='w-1/2 h-full flex flex-col justify-center'>
            <h2 className='text-pink-light mb-0 pb-0'>What we're lookin' for</h2>
            <p className='text-peach font-bold text-lg'>This is a subheader.</p>
          </div>
          <div className='w-1/2 text-white text-lg'>
            <p>
              As an integral part of a small studio with 7 people, we all wear multiple hats, you
              will too!
            </p>
            <ul>
              <li>Must have a positive and outgoing personality</li>
              <li>Genuine, yet Goal-oriented, with a drive to hit metrics</li>
              <li>Analytical, with decision-making skills</li>
              <li>The ability to self-teach and problem solve</li>
              <li>Passionate about what we do as a company</li>
              <li>Strong understanding of our internal brand & voice</li>
              <li>Master of interpersonal communications</li>
              <li>Willingness to go to all networking events, and make solid connections</li>
              <li>Has good connections outside of Nebraska, or is determined to make them</li>
              <li>Needs to be very quick to respond to potential clients</li>
              <li>Has to be able to make smart decisions about proposals</li>
              <li>Must be trustworthy, and very transparent</li>
              <li>Needs to be adaptable, late nights, and weekends might be necessary</li>
              <li>Needs to have an impressive sales background, with a portfolio of examples</li>
              <li>Be willing to work at the Lincoln office Monday-Friday</li>
              <li>Must be a team player, everything we do is a collaborative effort</li>
              <li>Ability to take positive criticism and feedback</li>
            </ul>
          </div>
        </div>
      </PageSection>
      <PageSection className='bg-blue-dark my-4'>
        <div className='mx-auto flex gap-8'>
          <div className='w-1/2 flex flex-col justify-center px-8'>
            <h2 className='text-pink-light'>Additional Information</h2>
            <p className='text-peach'>This is a subheader.</p>
          </div>
          <div className='w-1/2 flex flex-col justify-center px-8'>
            <p className='text-pink text-lg font-bold'>
              We’d love to have you join the team. To apply, skip the cover letter and shoot us your
              resume and sales portfolio.
            </p>
          </div>
        </div>
      </PageSection>
      <PageSection innerClassName='flex items-end justify-center'>
        <Button text='apply for position' link='/' color='bg-pink' />
      </PageSection>
    </main>
  )
}
export default CareerPage
