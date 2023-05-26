// import Lottie from 'react-lottie-player'

import dynamic from 'next/dynamic'
const LottiePatternPlayer = dynamic(() => import('@parts/LottiePatternPlayer'))
import cn from 'classnames'

const PageHeader_VariableHeight = ({ primaryColor }) => {
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
