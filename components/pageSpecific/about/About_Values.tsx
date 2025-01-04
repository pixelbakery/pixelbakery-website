import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import { InnerWrapper, PageSection } from '@parts'
import { H2AndLead, Lead } from '@typography/index'

interface ValueItem {
  id: number
  title: string
  content: string // can contain <br> or other HTML tags
}

const VALUES: ValueItem[] = [
  {
    id: 1,
    title: "We're All Going to Die",
    content: `Life is fleeting, and you only have so many days to craft the world you'd 
      like to live in. <br><br>
      Our goal is to live in that realization and make work that leaves a legacy.`,
  },
  {
    id: 2,
    title: 'Take Care of Your People',
    content: `Our success is a direct result of the people in our lives.
      Our employees, our clients, and our community are vitally important to us.</br></br>
      We believe in paying a competitive wage, building trust with our clients,
      and giving back to the community through education.<br><br>`,
  },
  {
    id: 3,
    title: 'Unapologetically Us',
    content: `We are who we are and we treat everyone exactly the same.</br></br>
      We want our relationships to be built on trust, so how could we have it any other way?
      <br><br>
      We practice this with vulnerability, constructive criticism, and honesty.`,
  },
  {
    id: 4,
    title: "You've Got to Be Kind",
    content: `“Hello babies. Welcome to Earth. It's hot in the summer and cold in the winter.
      It's round and wet and crowded. On the outside, babies, you've got a hundred years here.
      There's only one rule that I know of, babies—<em>God damn it, you've got to be kind.</em>” </br></br>
      – Kurt Vonnegut, <strong><em>God Bless You, Mr. Rosewater</em></strong><br><br>`,
  },
  {
    id: 5,
    title: 'Make it Fantastic',
    content: `If you're going to do something, do it right or don't do it at all. We don't take shortcuts.</br></br>We're not in this (only; we gotta eat too) for the money, we're in this to design beautiful things that inspire creativity and create beautiful moments.</br></br>Sure, we're animators and designers, but we're also artists that take pride in what we make.`,
  },
]

const PROGRESS_DURATION = 15 // seconds (desktop only)

export default function About_Values() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [activeIndexMobile, setActiveIndexMobile] = useState(0)

  function handleProgressComplete(index: number) {
    // Only rotate if user hasn't switched items
    setActiveIndex((prev) => {
      if (prev !== index) return prev
      return (prev + 1) % VALUES.length
    })
  }

  // User taps/clicks an item
  function handleSelect(index: number) {
    setActiveIndex(index)
    setActiveIndexMobile(index)
  }

  return (
    <PageSection id='values' color='white'>
      <InnerWrapper>
        <H2AndLead
          headerText={'Our Core Values'}
          className='max-w-md'
          leadColor='blue'
          leadText={
            'This is the foundation of our company and the precedent we believe in setting for our community.'
          }
        />

        {/* MOBILE: ACCORDION (no auto-rotation) */}
        <div className='mt-8 space-y-4 md:hidden'>
          {VALUES.map((value, index) => {
            const isActive = index === activeIndexMobile
            return (
              <div
                key={value.id}
                onClick={() => handleSelect(index)}
                className='pb-3 cursor-pointer'
              >
                <div className='w-full h-1 mb-2 bg-wine-100' />

                <div className='flex items-center mb-2'>
                  <h3 className='w-10 mr-2 text-3xl font-black leading-none text-peach font-geologica'>
                    {value.id}
                  </h3>
                  <h3 className='text-xl leading-none font-geologica text-blue-dark'>
                    {value.title}
                  </h3>
                </div>

                {/* Content accordion */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      key={`accordion-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className='h-24 mt-2 overflow-hidden'
                    >
                      <p
                        className='text-md text-wine'
                        dangerouslySetInnerHTML={{ __html: value.content }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>

        {/* DESKTOP: TWO-COLUMN LAYOUT (with auto-rotation) */}
        <div className='hidden mt-8 gap-x-10 lg:gap-x-24 md:grid md:grid-cols-2'>
          {/* LEFT COLUMN */}
          <div className='space-y-4 lg:space-y-8'>
            {VALUES.map((value, index) => {
              const isActive = index === activeIndex
              return (
                <div
                  key={value.id}
                  onClick={() => handleSelect(index)}
                  className='relative pb-3 overflow-hidden duration-300 ease-in-out bg-opacity-50 rounded-lg shadow-none cursor-pointer group hover:bg-egg hover:shadow-sm'
                >
                  {/* Progress Bar (top) */}
                  <div className='w-full h-1 duration-300 group bg-wine-100 hover:bg-peach group-hover:bg-peach'>
                    {isActive && (
                      <motion.div
                        className='h-1 bg-peach'
                        initial={{ width: '0%' }}
                        animate={{ width: '100%' }}
                        transition={{ duration: PROGRESS_DURATION }}
                        onAnimationComplete={() => handleProgressComplete(index)}
                      />
                    )}
                  </div>
                  {/* Value Title */}
                  <div className='flex items-center px-4 my-3'>
                    <h3 className='w-10 mr-2 text-3xl font-black leading-none text-peach'>
                      {value.id}
                    </h3>
                    <h3 className='pb-0 mb-0 text-xl leading-none font-geologica text-blue-dark'>
                      {value.title}
                    </h3>
                  </div>
                </div>
              )
            })}
          </div>

          {/* RIGHT COLUMN */}
          <div className='relative'>
            <AnimatePresence mode='wait'>
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className='absolute inset-0'
              >
                <div className='relative'>
                  <Lead
                    color='blue-dark'
                    className='pt-0 -mt-3 leading-none align-text-top pb-0mb-4'
                    noMargins={true}
                  >
                    {VALUES[activeIndex].title}
                  </Lead>
                  <p
                    className='text-xl text-wine'
                    dangerouslySetInnerHTML={{
                      __html: VALUES[activeIndex].content,
                    }}
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </InnerWrapper>
    </PageSection>
  )
}
