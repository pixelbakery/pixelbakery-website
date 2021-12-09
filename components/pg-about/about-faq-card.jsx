import React from 'react'
import cs from 'classnames'

export default function FAQcard({ faq }) {
  const [open, setOpen] = React.useState(false)
  const onClick = () => setOpen(!open)

  return (
    <div
      onClick={onClick}
      className={cs('faqcard', {
        opened: open,
      })}
    >
      <button className='relative w-full border-2 rounded-md border-blue py-3 px-12 my-4 question flex justify-between'>
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
      <div className='overflow-hidden opacity-0 answer my-3 d-none '>
        <p className='px-12 md:px-24  text-blue-dark '>{faq.a}</p>
      </div>
    </div>
  )
}
