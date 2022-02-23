import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import awards from '@data/awards'
import H2 from '@typography/H2'

function About_Awards() {
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
            <H2 color='blue-dark'>
              awards and recognition<span className='hidden lg:inline'>*</span>
            </H2>
            <div className='-mt-8 text-2xl text-cream font-extrabold'>swoosh.</div>
            <p className='hidden lg:block max-w-lg mt-6 text-xs text-cream font-medium'>
              *awards are stupid and meaningless, but idk, i guess everything is. might as well
              smoke &apos;em if you got &apos;em, right?
            </p>
          </div>
          <div className='col-span-2  flex flex-col justify-between mx-auto w-full '>
            <ul
              className='w-fit self-end text-cream font-body text-xs sm:text-sm md:text-lg font-medium md:font-bold  relative awardsList'
              id='awardsList1'
            >
              {awards.map((award, index) => {
                return (
                  <li key={index + award.project} className='my-4 '>
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

export default About_Awards
