import { useState } from 'react'
import cn from 'classnames'

type Props = {
  faq: { acceptedAnswerText: string; questionName: string }
  index: number
}
function About_Faq_Card({ faq, index }: Props) {
  const [open, setOpen] = useState(false)
  const onClick = () => setOpen(!open)

  return (
    <div
      onClick={onClick}
      className={cn('my-0 h-full', {
        opened: open,
      })}
      id={cn(`faq${index}`)}
    >
      <button className='relative w-full border-2 rounded-md bg-pink-light border-blue py-3 px-8 lg:px-12 question flex justify-between z-20'>
        <div className='self-center pr-9'>
          <p className='text-left text-pink font-medium lg:font-bold text-md lg:text-lg leading-tight my-0 py-0'>
            {faq.questionName}
          </p>
        </div>

        <div className='absolute top-0 right-0 w-16 h-full circle-plus flex flex-col justify-center  closed '>
          <div className=' circle'>
            <div className='absolute horizontal bg-blue'></div>
            <div className='absolute vertical bg-blue'></div>
          </div>
        </div>
      </button>
      <div
        className={cn(
          'relative flex flex-col transform translate-all duration-500  overflow-hidden   d-none ',
          {
            ['opacity-100 h-full ']: open,
            ['opacity-0  h-0 -translate-y-10']: !open,
          },
        )}
      >
        <div
          className='px-8 pt-4 md:px-24  text-blue-dark text-md'
          dangerouslySetInnerHTML={{
            __html: faq.acceptedAnswerText,
          }}
        />
      </div>
    </div>
  )
}
export default About_Faq_Card
