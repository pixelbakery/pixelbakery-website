// import Lottie from 'react-lottie-player'

import cn from 'classnames'
import LottiePatternPlayer from '@parts/LottiePatternPlayer'

interface Props {
  primaryColor: string
}
const PageHeader_VariableHeight = ({ primaryColor }: Props) => {
  return (
    <div
      className={cn(
        `z-0 absolute top-0 left-0 w-full h-full overflow-hidden lottie lottie-${primaryColor}`,
      )}
      id='lottie'
    >
      <LottiePatternPlayer />
    </div>
  )
}
export default PageHeader_VariableHeight
