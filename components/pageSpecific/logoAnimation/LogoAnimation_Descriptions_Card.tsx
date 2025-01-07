import { H3 } from '@typography'

interface Props {
  header: string
  desc: string
}

function LogoAnimation_Descriptions_Card({ header, desc }: Props) {
  return (
    <div className=''>
      <H3 color='blue'>{header}</H3>
      <p className='max-w-xs pr-3 text-lg text-wine-400'>{desc}</p>
    </div>
  )
}
export default LogoAnimation_Descriptions_Card
