import { useEffect } from 'react'
import gsap from 'gsap'
import PageSection from '@parts/PageSection'

function About_Values() {
  return (
    <PageSection id='values'>
      <section className='my-4 lander py-32' id='topOfPage'>
        <div className='mx-auto  max-w-6xl '>
          <h2 className='text-blue-dark mb-2'>Values we live by</h2>
          <p className='text-peach mb-4 text-xl max-w-lg'>
            This isn’t just some sales gimmick, this is the foundation of our company and the
            precedent we believe in setting for our community.
          </p>
        </div>
        <div className='mx-auto max-w-6xl flex  mb-14 h-full gap-2 py-8'>
          <div className='w-1/3 h-full flex flex-col justify-between gap-8 flex-wrap'>
            <div
              id='value-1'
              className='value-title px-5 flex flex-col items-center justify-center bg-white py-4 rounded-lg h-1/5'
            >
              <h3 className=' text-wine text-2xl font-bold'>We&apos;re all going to die.</h3>
            </div>
            <div
              id='value-2'
              className='value-title px-5 flex flex-col items-center justify-center bg-white py-4  h-1/5 '
            >
              <h3 className=' text-wine text-2xl font-bold text-center'>
                Take care of your people.
              </h3>
            </div>
            <div
              id='value-3'
              className='value-title px-5 flex flex-col items-center justify-center bg-white py-4 h-1/5 '
            >
              <h3 className='text-wine text-2xl font-bold'>Unapologetically us.</h3>
            </div>
            <div
              id='value-4'
              className='value-title px-5 flex flex-col items-center justify-center rounded-xl border-2 border-yellow bg-white py-2 h-1/5 '
            >
              <h3 className='text-wine text-2xl font-semibold leading-tight  '>
                You’ve Got to Be Kind.
              </h3>
            </div>
          </div>
          <div className='w-2/3 flex flex-col justify-center'>
            <div className='mx-auto px-20 max-w-xl'>
              <div className='py-3 value-desc' id='value-desc-1'>
                <h4 className='py-4 text-4xl text-wine'>It’s our only guarantee in this life.</h4>
                <p className='py-4 text-xl text-wine'>
                  {' '}
                  Pixel Bakery began with the realization that life is fleeting, and you only have
                  so many days to design the world you’d like to live in.
                </p>
                <p className='py-4 text-xl text-wine'>
                  Our goal is to hurry up and grind everyday to make cool stuff that we’re proud of
                  before we kick the bucket.{' '}
                </p>
              </div>

              <div className='py-3 value-desc' id='value-desc-2'>
                <h4 className='py-4 text-4xl text-wine'>
                  We&apos;ll never pretend to be something we&apos;re not.
                </h4>
                <p className='py-4 text-xl text-wine'>
                  We believe that the typical agency way is not always the best way. We bring a
                  truly unique perspective to any problem on the table. We’re a bunch of
                  20-somethings—which means designing to appeal to a millennial demographic means
                  creating things that appeal to us.
                </p>
                <p className='py-4 text-xl text-wine'>
                  It also means we’ve digested what’s been working in the world of design, media,
                  targeted ads, and web content, and what isn’t working. We’re not stuck in a
                  routine, and adapting to change is second nature.
                </p>
              </div>

              <div className='py-3 value-desc' id='value-desc-3'>
                <h4 className='py-4 text-4xl text-wine'>Your success is our success.</h4>
                <p className='py-4 text-xl text-wine'>
                  {' '}
                  We believe it is possible to create thoughtful and purposeful design while hitting
                  deadlines and turning projects around on time. Our team of planners and designers
                  work together to execute creative ideas with an intense concentration and
                  attention to detail.
                </p>
                <p className='py-4 text-xl text-wine'>
                  We make it our business to involve our clients in every decision, and keep them in
                  the loop every step of the way. Other agencies wouldn’t allow as much control from
                  the client. We think it’s important, so our small team gives unparalleled customer
                  service.
                </p>
              </div>

              <div className='py-3 value-desc' id='value-desc-4'>
                <blockquote className='py-4 text-xl text-wine'>
                  {' '}
                  “Hello babies. Welcome to Earth. It’s hot in the summer and cold in the winter.
                  Itss round and wet and crowded. On the outside, babies, you’ve got a hundred years
                  here. There’s only one rule that I know of, babies-“God damn it, you’ve got to be
                  kind.”
                </blockquote>
                <cite className='py-4 text-xl text-wine'>
                  <strong>– Kurt Vonnegut</strong>, God Bless You, Mr. Rosewater
                </cite>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageSection>
  )
}
export default About_Values
