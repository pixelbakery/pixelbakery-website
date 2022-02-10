import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import H2 from '@typography/H2'
import Onboarding_ExpectationsRow from './Onboarding_Expectations_Row'
import { gsap } from 'gsap'
import { useLayoutEffect } from 'react'

function Onboarding_Expectations() {
  useLayoutEffect(() => {
    gsap.set('#expectation-1 .expect-numb', { y: -200, rotation: gsap.utils.random(0, 15) })
    gsap.set('#expectation-2 .expect-numb', { x: -100, rotation: 5 })
    gsap.set('#expectation-3 .expect-numb', {
      y: -100,
      rotation: gsap.utils.random(0, 15),
      delay: 0.5,
    })
    gsap.set('#expectation-4 .expect-numb', { x: -150 })
    let tl_ExpectationOne = gsap.timeline({
      defaults: {
        stagger: 0.1,
        ease: 'sine.inOut',
      },
      repeat: -1,
      repeatDelay: 0.44,
      yoyo: true,
    })

    let tl_ExpectationTwo = gsap.timeline({
      defaults: {
        stagger: 0.1,
        ease: 'sine.inOut',
      },
      repeat: -1,
    })

    let tl_ExpectationThree = gsap.timeline({
      defaults: {
        stagger: 0.1,
        ease: 'sine.inOut',
      },
      repeat: -1,
      repeatDelay: 0.66,
      yoyo: true,
    })
    let tl_ExpectationFour = gsap.timeline({
      defaults: {
        stagger: 0.1,
        ease: 'sine.inOut',
      },
      repeat: -1,
      repeatDelay: 0.25,
    })

    tl_ExpectationOne.to('#expectation-1   .expect-numb', {
      y: -100,
      rotation: gsap.utils.random(-15, 15),
      duration: 1,
    })

    tl_ExpectationTwo
      .to(
        '#expectation-2   .expect-numb',
        {
          x: 100,
          rotation: -5,
          duration: 1.22,
        },
        '<+=1',
      )
      .to(
        '#expectation-2   .expect-numb',
        {
          x: -100,
          rotation: 5,
          duration: 1.22,
        },
        '<+=3',
      )

    tl_ExpectationThree.to('#expectation-3   .expect-numb', {
      y: 50,
      rotation: gsap.utils.random(-15, 15),
      duration: 1,
    })
    tl_ExpectationFour
      .to(
        '#expectation-4   .expect-numb',
        {
          x: 150,
          rotation: 360,
          duration: 1,
        },
        '<+=3',
      )
      .to(
        '#expectation-4   .expect-numb',
        {
          x: -150,
          rotation: -360,
          duration: 1,
        },
        '<+=3',
      )

    return () => {}
  }, [])
  return (
    <PageSection id='onboarding-expectations'>
      <InnerWrapper>
        <div className='pb-8'>
          <H2> What you can expect from working with PBDS </H2>
        </div>

        <div>
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
            header={'We act as an extension of your team.'}
            bodyCopy={
              'Pixel Bakery operates   in lock step with your existing internal marketing team, or other vendors you partner with. Pixel Bakery comes in and helps smooth over creative potholes you might not otherwise have the bandwidth, energy, or capability to fill yourselves.  '
            }
          />
        </div>
      </InnerWrapper>
    </PageSection>
  )
}

export default Onboarding_Expectations
