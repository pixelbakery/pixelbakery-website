import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import H2 from '@typography/H2'

import { useRef } from 'react'

import { m, Variants, useScroll, useTransform, MotionValue } from 'framer-motion'
import { LazyMotion, domAnimation } from 'framer-motion'

const cardVariants: Variants = {
  offscreen: {
    y: 25,
    opacity: 0,
    transition: {
      ease: 'easeInOut',
      duration: 1.2,
    },
  },
  onscreen: {
    y: 0,
    opacity: 100,
    transition: {
      ease: 'easeInOut',
      duration: 1.2,
    },
  },
}
const cardVariantsReverse: Variants = {
  offscreen: {
    y: -25,
    opacity: 0,
    transition: {
      ease: 'easeInOut',
      duration: 1.2,
    },
  },
  onscreen: {
    y: 0,
    opacity: 100,
    transition: {
      ease: 'easeInOut',
      duration: 1.2,
    },
  },
}
const section: Variants = {
  offscreen: {
    transition: {
      staggerChildren: 0.24,
    },
  },
  onscreen: {
    transition: {
      staggerChildren: 0.24,
    },
  },
}

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance])
}

function Home_WhatWeMake() {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({ target: ref })
  const y = useParallax(scrollYProgress, -50)
  return (
    <LazyMotion features={domAnimation}>
      <PageSection id={'services-cta'} className={'relative'}>
        <InnerWrapper className='relative z-20'>
          <m.div
            ref={ref}
            variants={section}
            className='relative grid grid-cols-1 xl:grid-cols-2 xl:gap-x-16 '
            initial='offscreen'
            whileInView='onscreen'
            viewport={{ once: true, amount: 0.8 }}
          >
            <m.div variants={cardVariants}>
              <m.div
                variants={cardVariantsReverse}
                className='text-pink text-2xl  2xl:text-4xl  leading-noone font-bold'
              >
                to put it simply,
              </m.div>

              <H2 color='blue' className='text-pb-blue-dark 2xl:text-8xl mt-0 pt-0 max-w-4xl'>
                We build beautifully immersive worlds{' '}
              </H2>
            </m.div>
            <m.div
              variants={cardVariants}
              className='mx-auto lg:mx-0 w-full flex flex-col -mt-6 md:-mt-0 justify-start lg:mb-4'
            >
              <p className='text-blue-dark text-xl'>
                We create immersive, motion-centric content across various mediums and campaigns,
                from your website to your social channels.
              </p>
              <p className='text-blue-dark text-xl'>
                Motion content enhances your brand's story with another dimension of life. It shifts
                the interaction with your audience from them simply reading your brand, to your
                brand speaking directly to them.
              </p>
            </m.div>
          </m.div>
        </InnerWrapper>
      </PageSection>
    </LazyMotion>
  )
}
export default Home_WhatWeMake
