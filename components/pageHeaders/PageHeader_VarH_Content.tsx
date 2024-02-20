// import Lottie from 'react-lottie-player'

import cn from 'classnames'
import LottiePatternPlayer from '@parts/LottiePatternPlayer'

interface Props {
  objectColor: string
}
const PageHeader_VariableHeight = ({ objectColor }: Props) => {
  const color = `lottie-${objectColor}`
  return (
    <div
      className={cn(`z-0 absolute top-0 left-0 w-full h-full overflow-hidden lottie ${color}`)}
      id='lottie'
    >
      <LottiePatternPlayer />
    </div>
  )
}
export default PageHeader_VariableHeight
