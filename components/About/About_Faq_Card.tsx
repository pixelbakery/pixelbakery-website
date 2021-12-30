import React, { useEffect, useState } from 'react'
import cn from 'classnames'
import { gsap } from 'gsap'
type Props = {
  faq: { a: string; q: string }
  index: number
}
function About_Faq_Card({ faq, index }: Props) {
  const btnClass = 'btn'
  const [open, setOpen] = useState(false)
  const onClick = () => setOpen(!open)

  return (
    <div
      onClick={onClick}
      className={cn(' h-full', {
        opened: open,
      })}
      id={cn(`faq${index}`)}
    >
      <button className='relative w-full border-2 rounded-md bg-pink-light border-blue py-3 px-12 my-4 question flex justify-between z-20'>
        <div className='self-center pr-9'>
          <p className='text-left text-pink font-bold text-lg '>{faq.q}</p>
        </div>

        <div className='absolute top-0 right-0 h-full w-16 circle-plus flex flex-col justify-center  closed '>
          <div className=' circle'>
            <div className='absolute horizontal bg-blue'></div>
            <div className='absolute vertical bg-blue'></div>
          </div>
        </div>
      </button>
      <div
        className={cn(
          'relative flex flex-col transform translate-all duration-500  overflow-hidden  my-3 d-none ',
          {
            ['opacity-100 h-full ']: open,
            ['opacity-0  h-0 -translate-y-10']: !open,
          },
        )}
      >
        <p className='px-12 md:px-24  text-blue-dark text-md'>{faq.a}</p>
      </div>
    </div>
  )
}
export default About_Faq_Card
