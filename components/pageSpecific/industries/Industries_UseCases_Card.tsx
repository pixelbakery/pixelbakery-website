import H3 from '@typography/H3'
const Industries_UseCases_Card = ({ children, title }) => {
  return (
    <div className='border-blue border-4 p-8 rounded-xl text-egg'>
      <H3 color='blue'>{title}</H3>
      <div>{children}</div>
    </div>
  )
}

export default Industries_UseCases_Card
