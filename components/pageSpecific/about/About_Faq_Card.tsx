import { useState } from 'react'
import cn from 'classnames'
import { usePlausible } from 'next-plausible'

type Props = {
  faq: { acceptedAnswerText: string; questionName: string }
  index: number
}

const About_Faq_Card = ({ faq, index }: Props) => {
  const [open, setOpen] = useState(false)
  const plausible = usePlausible()

  const onClick = () => {
    setOpen(!open)
    // Track the click with Plausible
    plausible('faq-card-click', {
      props: {
        question: faq.questionName,
        status: open ? 'closed' : 'opened',
      },
    })
  }

  return (
    <div
      onClick={onClick}
      className={cn('my-0 h-full', {
        opened: open,
      })}
      id={cn(`faq${index}`)}
    >
      <button className='relative z-20 flex justify-between w-full px-8 py-3 border-2 rounded-md bg-pink-lighter border-blue lg:px-12 question'>
        <div className='self-center pr-9'>
          <p className='py-0 my-0 font-medium leading-tight text-left text-pink lg:font-bold text-md lg:text-lg'>
            {faq.questionName}
          </p>
        </div>

        <div className='absolute top-0 right-0 flex flex-col justify-center w-16 h-full circle-plus closed '>
          <div className=' circle'>
            <div className='absolute horizontal bg-blue'></div>
            <div className='absolute vertical bg-blue'></div>
          </div>
        </div>
      </button>
      <div
        className={cn(
          'relative flex flex-col transform translate-all duration-500 overflow-hidden d-none',
          {
            ['opacity-100 h-full ']: open,
            ['opacity-0 h-0 -translate-y-10']: !open,
          },
        )}
      >
        <div
          className='px-8 pt-4 md:px-24 text-blue-dark text-md'
          dangerouslySetInnerHTML={{
            __html: faq.acceptedAnswerText,
          }}
        />
      </div>
    </div>
  )
}

export default About_Faq_Card
