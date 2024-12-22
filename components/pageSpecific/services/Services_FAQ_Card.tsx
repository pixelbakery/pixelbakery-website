type FAQ = {
  questionName: string
  acceptedAnswerText: string
}

type Props = {
  faq: FAQ
  index: number
}

const Services_FAQ_Card = ({ index, faq }: Props) => {
  return (
    <div
      key={index}
      id={`faq-${index}`}
      className='border-2 rounded-lg max-w-3lg bg-pink-lighter border-blue'
    >
      <div
        className='relative z-20 flex justify-between w-full px-2 py-3 border-b-2 rounded-md border-blue lg:px-8 question'
        aria-label={faq.questionName}
      >
        <h3 className='py-0 pl-0 my-0 ml-0 font-medium leading-tight text-left text-pink lg:font-bold text-md lg:text-lg'>
          {faq.questionName}
        </h3>
      </div>
      <p className='max-w-3xl mx-3 md:mx-8'>{faq.acceptedAnswerText}</p>
    </div>
  )
}

export default Services_FAQ_Card
