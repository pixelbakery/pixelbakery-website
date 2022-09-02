import PageSection from '@parts/PageSection'
import InnerWrapper from '@parts/InnerWrapper'
import Lead from '@typography/Lead'

function About_Values() {
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

// <section className='my-4 lander py-32' id='topOfPage'>
//   <div className='mx-auto  max-w-6xl '>
//     <h2 className='text-blue-dark mb-2'>Values we live by</h2>
//     <p className='text-peach mb-4 text-xl max-w-lg'>
//       This isn’t just some sales gimmick, this is the foundation of our company and the
//       precedent we believe in setting for our community.
//     </p>
//   </div>
//   <div className='mx-auto max-w-6xl flex  mb-14 h-full gap-2 py-8'>
//     <div className='w-1/3 h-full flex flex-col justify-between gap-8 flex-wrap'>
//       <div
//         id='value-1'
//         className='value-title px-5 flex flex-col items-center justify-center bg-white py-4 rounded-lg h-1/5'
//       >
//         <h3 className=' text-wine text-2xl font-bold'>We&apos;re all going to die.</h3>
//       </div>
//       <div
//         id='value-2'
//         className='value-title px-5 flex flex-col items-center justify-center bg-white py-4  h-1/5 '
//       >
//         <h3 className=' text-wine text-2xl font-bold text-center'>
//           Take care of your people.
//         </h3>
//       </div>
//       <div
//         id='value-3'
//         className='value-title px-5 flex flex-col items-center justify-center bg-white py-4 h-1/5 '
//       >
//         <h3 className='text-wine text-2xl font-bold'>Unapologetically us.</h3>
//       </div>
//       <div
//         id='value-4'
//         className='value-title px-5 flex flex-col items-center justify-center rounded-xl border-2 border-yellow bg-white py-2 h-1/5 '
//       >
//         <h3 className='text-wine text-2xl font-semibold leading-tight  '>
//           You’ve Got to Be Kind.
//         </h3>
//       </div>
//     </div>
//     <div className='w-2/3 flex flex-col justify-center'>
//       <div className='mx-auto px-20 max-w-xl'>
//         <div className='py-3 value-desc' id='value-desc-1'>
//           <h4 className='py-4 text-4xl text-wine'>It’s our only guarantee in this life.</h4>
//           <p className='py-4 text-xl text-wine'>
//             {' '}
//             Pixel Bakery began with the realization that life is fleeting, and you only have
//             so many days to design the world you’d like to live in.
//           </p>
//           <p className='py-4 text-xl text-wine'>
//             Our goal is to hurry up and grind everyday to make cool stuff that we’re proud of
//             before we kick the bucket.{' '}
//           </p>
//         </div>

//         <div className='py-3 value-desc' id='value-desc-2'>
//           <h4 className='py-4 text-4xl text-wine'>
//             We&apos;ll never pretend to be something we&apos;re not.
//           </h4>
//           <p className='py-4 text-xl text-wine'>
//             We believe that the typical agency way is not always the best way. We bring a
//             truly unique perspective to any problem on the table. We’re a bunch of
//             20-somethings—which means designing to appeal to a millennial demographic means
//             creating things that appeal to us.
//           </p>
//           <p className='py-4 text-xl text-wine'>
//             It also means we’ve digested what’s been working in the world of design, media,
//             targeted ads, and web content, and what isn’t working. We’re not stuck in a
//             routine, and adapting to change is second nature.
//           </p>
//         </div>

//         <div className='py-3 value-desc' id='value-desc-3'>
//           <h4 className='py-4 text-4xl text-wine'>Your success is our success.</h4>

//       </div>
//     </div>
//   </div>
// </section>
