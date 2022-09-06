import PageSection from '@parts/PageSection'
import InnerWrapper from '@parts/InnerWrapper'
import Lead from '@typography/Lead'

const About_Values = () => {
  return (
    <PageSection id='values' color='white'>
      <InnerWrapper>
        <h2>Our Core Values</h2>
        <Lead>
          This is the foundation of our company and the precedent we believe in setting for our
          community.
        </Lead>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 '>
          {/* value 1: we're all going to die */}
          <div className='flex gap-4'>
            <div className='text-6xl font-black text-peach'>1</div>
            <div>
              <Lead color='blue' className='mb-0 lg:mb-0 pb-0'>
                we&apos;re all going to die
              </Lead>
              <p className='py-4 text-xl text-wine mt-0'>
                Life is fleeting, and you only have so many days to craft the world you’d like to
                live in. Our goal is to live in that realization and make work that leaves a legacy.
              </p>
            </div>
          </div>
          {/* value 2: take care of your people */}
          <div className='flex gap-4'>
            <div className='text-6xl font-black text-peach'>2</div>

            <div>
              <Lead color='blue' className='mb-0 lg:mb-0 pb-0'>
                take care of your people
              </Lead>
              <p>
                Our success is a direct result of the people in our lives. Our employees, our
                clients, and our community are vitally important to us. We believe in paying a
                competitive wage, building trust with our clients, and giving back to the community
                through education.
              </p>
            </div>
          </div>

          {/* value 3: unapologetically us*/}
          <div className='flex gap-4'>
            <div className='text-6xl font-black text-peach'>3</div>
            <div>
              <Lead color='blue' className='mb-0 lg:mb-0 pb-0'>
                unapologetically us
              </Lead>
              <p className='py-4 text-xl text-wine'>
                We are who we are and we treat everyone exactly the same. We want our relationships
                to be built on trust, so how could we have it any other way? We practice this with
                vulnerability, constructive criticism, and honesty.
              </p>
            </div>
          </div>

          {/* value 4: You've got to be kind*/}
          <div className='flex gap-4'>
            <div className='text-6xl font-black text-peach'>4</div>
            <div>
              <Lead color='blue' className='mb-0 lg:mb-0 pb-0'>
                You&apos;ve got to be kind
              </Lead>
              <p className='pt-4 mb-0 text-xl text-wine italic'>
                “Hello babies. Welcome to Earth. It’s hot in the summer and cold in the winter.
                It&apos;s round and wet and crowded. On the outside, babies, you’ve got a hundred
                years here. There’s only one rule that I know of, babies-“God damn it, you’ve got to
                be kind.”
              </p>
              <cite className=' text-xl text-wine'>
                <strong>– Kurt Vonnegut</strong>, God Bless You, Mr. Rosewater
              </cite>
            </div>
          </div>
        </div>
      </InnerWrapper>
    </PageSection>
  )
}
export default About_Values
