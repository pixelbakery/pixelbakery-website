import React from 'react'
import InnerWrapper from '../InnerWrapper'
import PageSection from '../PageSection'
import awards from '../../data/awards'
import H2 from '../H2'
function Work_Awards() {
  // useEffect(() => {
  //   const awards = gsap.timeline()
  //   awards.from('.awardslist .award', {
  //     overwrite: 'auto',
  //     ease: 'power3.out',
  //     stagger: 0.08,
  //     opacity: 0,
  //     y: -15,
  //   })
  //   ScrollTrigger.create({
  //     trigger: '#awards',
  //     toggleActions: 'play reverse play reverse',
  //     start: 'top center',
  //     end: 'bottom center',

  //     animation: awards,
  //   })
  // }, [])

  return (
    <PageSection color={'blue'} id='awards'>
      <InnerWrapper>
        <div className=' grid grid-cols-1 xl:grid-cols-3 gap-12 xl:gap-32'>
          <div className='col-span-1'>
            <H2 className='text-blue-dark'>
              awards and recognition<span className='hidden lg:inline'>*</span>
            </H2>
            <div className='-mt-8 text-2xl text-cream font-extrabold'>swoosh.</div>
            <p className='hidden lg:block max-w-lg mt-6 text-xs text-cream font-medium'>
              *awards are stupid and meaningless, but idk, i guess everything is. might as well
              smoke &apos;em if you &apos;em, right?
            </p>
          </div>
          <div className='col-span-2  flex flex-col justify-between mx-auto w-full gap-12'>
            <ul
              className='w-fit self-end text-cream font-body font-bold  md:text-lg relative awardsList'
              id='awardsList1'
            >
              {awards.map((award) => {
                return (
                  <li key={award.project} className='my-4 '>
                    {award.award != '' ? `${award.award} ` : ''}
                    {award.category != '' ? `/ ${award.category} ` : ''}
                    {award.project != '' ? `/ ${award.project} ` : ''}
                    {award.client != '' ? `/ ${award.client} ` : ''}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </InnerWrapper>
    </PageSection>
  )
}

export default Work_Awards
