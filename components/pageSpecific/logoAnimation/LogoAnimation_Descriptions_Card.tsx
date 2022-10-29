import H3 from '@typography/H3'

interface LogoAnimation_Descriptions_Card {
  header: string
  desc: string
}

function LogoAnimation_Descriptions_Card({ header, desc }: LogoAnimation_Descriptions_Card) {
  return (
    <div className=''>
      <H3 color='blue'>{header}</H3>
      <p className='text-wine-400 text-lg max-w-xs pr-3'>{desc}</p>
    </div>
  )
}
export default LogoAnimation_Descriptions_Card
