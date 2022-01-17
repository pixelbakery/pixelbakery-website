import Main from '../components/Main'
import PageHeader_VarH from '../components/PageHeader/PageHeader_VarH'
import React, { useLayoutEffect } from 'react'
// import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Onboarding_ExpectationsRow from '../components/Onboarding/Onboarding_ExpectationsRow'
import PageSection from '../components/PageSection'
import InnerWrapper from '../components/InnerWrapper'
import H1 from '../components/H1'
import H2 from '../components/H2'
import Lead from '../components/Lead'

function Onboarding() {
  // gsap.registerPlugin(ScrollTrigger)

  // useLayoutEffect(() => {
  //   gsap.set('#expectation-1 .expect-numb', { y: -200, rotation: gsap.utils.random(0, 15) })
  //   gsap.set('#expectation-2 .expect-numb', { x: -100, rotation: 5 })
  //   gsap.set('#expectation-3 .expect-numb', {
  //     y: -100,
  //     rotation: gsap.utils.random(0, 15),
  //     delay: 0.5,
  //   })
  //   let tl_ExpectationOne = gsap.timeline({
  //     defaults: {
  //       stagger: 0.1,
  //       ease: 'power1.inOut',
  //     },
  //     repeat: -1,
  //     repeatDelay: 0.44,
  //     yoyo: true,
  //   })

  //   let tl_ExpectationTwo = gsap.timeline({
  //     defaults: {
  //       stagger: 0.1,
  //       ease: 'power1.inOut',
  //     },
  //     repeat: -1,
  //   })

  //   let tl_ExpectationThree = gsap.timeline({
  //     defaults: {
  //       stagger: 0.1,
  //       ease: 'power1.inOut',
  //     },
  //     repeat: -1,
  //     repeatDelay: 0.66,
  //     yoyo: true,
  //   })

  //   tl_ExpectationOne.to('#expectation-1   .expect-numb', {
  //     y: -100,
  //     rotation: gsap.utils.random(-15, 15),
  //     duration: 1,
  //   })

  //   tl_ExpectationTwo
  //     .to(
  //       '#expectation-2   .expect-numb',
  //       {
  //         x: 100,
  //         rotation: -5,
  //         duration: 1.22,
  //       },
  //       '<+=1',
  //     )
  //     .to(
  //       '#expectation-2   .expect-numb',
  //       {
  //         x: -100,
  //         rotation: 5,
  //         duration: 1.22,
  //       },
  //       '<+=3',
  //     )

  //   tl_ExpectationThree.to('#expectation-3   .expect-numb', {
  //     y: 50,
  //     rotation: gsap.utils.random(-15, 15),
  //     duration: 1,
  //   })

  //   return () => {}
  // }, [])

  return (
    <Main id='page-onboarding'>
      <PageHeader_VarH header='start something wonderful' subheader='copy copy copy' />
      <PageSection>
        <InnerWrapper>
          <Lead>
            We don&apos;t do the pushy sales thing. We&apos;re here to make well-crafted,
            custom-tailored pieces of work for clients that we have a deep-rooted connection with.
            This means that we&apos;re highly selective when we take on a new client. We view it
            more as dating than making a sale. It&apos;s just as important that you like us and it
            is we like you.
          </Lead>
        </InnerWrapper>
      </PageSection>
      <section id='onboarding-contact' className='bg-yellow h-16 lander'>
        <div className='max-w-6xl mx-auto flex flex-col justify-center h-full'>
          <p className='text-lg text-wine leading-loose max-w-xl'></p>

          <div className='hb-p-5d92c026f3a53e07975e0cea-2'></div>
          <div>
            {/* <form className="border-2 border-peach rounded-lg" id="onboarding-form">
                                   <input type="text">Name</input>
                                   <input type="email">Email</input>
                                   <input type="text">Entity You Represent</input>
                                   <input type="url">Website</input>
                                   <input type="text">Entity You Represent</input>
                                   <input type="submit" className="">Send It</input>

                              </form> */}
          </div>
        </div>
      </section>
      <section id='onboarding-expectations my-4'>
        <div className='max-w-5xl mx-auto py-8'>
          <div>
            <h2 className='my-8 py-4 w-3/5'> What you can expect from working with PBDS </h2>
          </div>

          <Onboarding_ExpectationsRow
            flip={true}
            number={'1'}
            header={'We never asks for the keys to the kingdom right away.'}
            bodyCopy={
              " We know that trust is something that is earned over time. Our initial projects with our clients usually start small. This is a relationship afterall, and it's important to us that both parties are happy and healthy."
            }
          />
          <Onboarding_ExpectationsRow
            flip={false}
            number={'2'}
            header={"We're not here to tell you what to do."}
            bodyCopy={
              " Sure, we're probably better at animating than you are, but we'll never know your brand more intimately than you will. We can advise, strategize, suggest, and execute– but we won't barge in thinking we know what's best."
            }
          />
          <Onboarding_ExpectationsRow
            flip={true}
            number={'3'}
            header={'Your success is our success.'}
            bodyCopy={
              ' We believe it is possible to create thoughtful and purposeful design while hitting deadlines and turning projects around on time. Our team of planners and designers work together to execute creative ideas with an intense concentration and attention to detail. '
            }
          />
          <Onboarding_ExpectationsRow
            flip={false}
            number={'4'}
            header={'Your success is our success.'}
            bodyCopy={
              ' We believe it is possible to create thoughtful and purposeful design while hitting deadlines and turning projects around on time. Our team of planners and designers work together to execute creative ideas with an intense concentration and attention to detail. '
            }
          />
        </div>
      </section>
      <section id='onboarding-process' className='bg-yellow h-16'>
        Here&apos;s where we talk about our process
      </section>
    </Main>
  )
}

export default Onboarding
