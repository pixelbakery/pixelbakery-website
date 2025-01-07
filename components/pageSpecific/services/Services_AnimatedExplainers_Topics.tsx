import { m, Variants, LazyMotion, domAnimation } from 'framer-motion'
import Image from 'next/image'
import { H2 } from '@typography'
import { InnerWrapper, PageSection } from '@parts'

const card1: Variants = {
  offscreen: {
    rotate: 0,
    transition: {
      duration: 0.44,
      ease: 'easeInOut',
    },
  },
  onscreen: {
    rotate: -30,
    transition: {
      duration: 0.44,
      ease: 'easeInOut',
    },
  },
}
const card2: Variants = {
  offscreen: {
    rotate: 0,
    transition: {
      duration: 0.44,
      ease: 'easeInOut',
    },
  },
  onscreen: {
    rotate: -15,
    transition: {
      duration: 0.44,
      ease: 'easeInOut',
    },
  },
}
const card3: Variants = {
  offscreen: {
    rotate: 0,
    transition: {
      duration: 0.44,
      ease: 'easeInOut',
    },
  },
  onscreen: {
    rotate: -4,
    transition: {
      duration: 0.44,
      ease: 'easeInOut',
    },
  },
}
const motionWrapper: Variants = {
  offscreen: {
    transition: {
      staggerDirection: -1,
      delayChildren: 0.125,
      staggerChildren: 0.125,
      ease: 'easeInOut',
    },
  },
  onscreen: {
    // display: 'block',
    transition: {
      staggerDirection: 1,
      staggerChildren: 0.125,
      when: 'beforeChildren',
      delayChildren: 0.125,
      ease: 'easeInOut',
    },
  },
}
const Services_AnimatedExplainers_Topics = () => {
  return (
    <PageSection id={'topics'} color='egg'>
      <InnerWrapper>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-12'>
          <div className='relative justify-center block w-64 h-full col-span-1 mx-auto my-12 lg:w-full lg:max-w-md lg:mt-32'>
            <LazyMotion features={domAnimation}>
              <m.div
                variants={motionWrapper}
                initial='offscreen'
                whileInView='onscreen'
                viewport={{ once: false }}
                className='relative'
              >
                <m.div
                  variants={card1}
                  className={'absolute origin-bottom-left  drop-shadow lg:drop-shadow-lg'}
                >
                  <Image
                    width={505.65}
                    height={332.91}
                    src={'/img/services/RecipeCard_DarkBlue.svg'}
                    alt={'Animated explainer videos recipe card 1'}
                  />
                </m.div>
                <m.div
                  variants={card2}
                  className={'absolute origin-bottom-left drop-shadow lg:drop-shadow-lg'}
                >
                  <Image
                    width={505.65}
                    height={332.91}
                    src={'/img/services/RecipeCard_Blue.svg'}
                    alt={'Animated explainer videos recipe card 2'}
                  />
                </m.div>

                <m.div
                  variants={card3}
                  className={
                    'animate-bob inline-block relative origin-bottom-left  drop-shadow lg:drop-shadow-lg'
                  }
                >
                  <Image
                    width={505.65}
                    height={332.91}
                    src={'/img/services/RecipeCard_Pink.svg'}
                    alt={'Pixel Bakery creates premium animated explainer videos as a service'}
                  />
                </m.div>
              </m.div>
            </LazyMotion>
          </div>
          <div className='grid-cols-1 lg:grid-cols-2'>
            <H2>What Topics Can Explainer Videos Cover?</H2>
            <p>
              Anything and everything, as long as it’s focused. Explainer videos work to make
              complex information easy to understand, and their short time spans make them a great
              delivery method for getting a concentrated concept across.
            </p>
            <p>
              Whether it’s the specifics of what your company does, an explanation of how your
              product works, or a celebration of your business’s most recent success, these videos
              can make your concept digestible and fun.
            </p>
          </div>
        </div>
      </InnerWrapper>
    </PageSection>
  )
}

export default Services_AnimatedExplainers_Topics
