import React, { useEffect } from 'react'
// import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'

function Benefit() {
  // useEffect(() => {
  //   const benefits = gsap.timeline()
  //   benefits.from('.benefitslist .benefit', {
  //     overwrite: 'auto',
  //     ease: 'power3.out',
  //     stagger: 0.08,
  //     opacity: 0,
  //     y: -15,
  //   })

  //   ScrollTrigger.create({
  //     trigger: '#benefits',
  //     toggleActions: 'play reverse play reverse',
  //     start: 'top center',
  //     end: 'bottom center',
  //     // start: 'top 60%',

  //     animation: benefits,
  //   })
  // }, [])

  return (
    <section className=' mb-4 px-4 py-40  mx-auto max-h-screen bg-pink-light' id='benefits'>
      <div className='container grid grid-cols-1 md:grid-cols-5 gap-20 mx-auto py-4 max-w-7xl'>
        <div className='col-span-2'>
          <h2 className='text-pink text-right mb-1 pb-1'>benefits</h2>
          <h4 className='my-0 py-0 text-right text-2xl text-blue font-extrabold'>nice.</h4>
        </div>
        <div className='col-span-3 flex flex-col justify-between mx-auto w-full gap-12'>
          <div className='mx-4 px-4'>
            <div>
              <ul
                className='text-blue font-body font-extrabold text-xl relative benefitslist'
                id='awardslist1'
              >
                <li className='my-2 benefit'>4 day work week</li>
                <li className='my-2 benefit'>office dogs</li>
                <li className='my-2 benefit'>4% 401k match</li>
                <li className='my-2 benefit'>
                  open tab at{' '}
                  <a href='https://reactor.coffee' target='_blank'>
                    Reactor Coffee
                  </a>
                  .
                </li>
                <li className='my-2 benefit'>monthly book stipend</li>
                <li className='my-2 benefit'>2 weeks vacation</li>
                <li className='my-2 benefit'>office snacks</li>
                <li className='my-2 benefit'>50% gym membership reimbursement</li>
                <li className='my-2 benefit'>free domain and hosting… forever</li>
                <li className='my-2 benefit'>paid passion project hours</li>
                <li className='my-2 benefit'>
                  access to pb's camera equiptment and studio for personal use
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Benefit
