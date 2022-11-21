import { m, Variants } from 'framer-motion'
import { LazyMotion, domAnimation } from 'framer-motion'
import Image from 'next/image'
import H2 from '@typography/H2'
import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'

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
          <div className='col-span-1 relative block w-64 lg:w-full lg:max-w-md my-12 lg:mt-32 mx-auto justify-center h-full'>
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
                    alt={''}
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
                    alt={''}
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
                    alt={''}
                  />
                </m.div>
              </m.div>
            </LazyMotion>
          </div>
          <div className='grid-cols-1 lg:grid-cols-2'>
            <H2>Crucial.</H2>
            <p>
              Professional photography sets the tone, and lets people know that not only do you care
              about what you’re selling, but that you care about the experience of anyone interested
              in buying it. The quality of your product photos can either be the start to a
              longstanding client relationship, or be the reason your site or social page gets
              scrolled past.
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
