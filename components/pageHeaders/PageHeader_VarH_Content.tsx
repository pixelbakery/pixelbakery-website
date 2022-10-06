// import Lottie from 'react-lottie-player'
import classNames from 'classnames'
import LottiePatternPlayer from '@parts/LottiePatternPlayer'
import dynamic from 'next/dynamic'
const PageHeader_TextBox = dynamic(() => import('./PageHeader_TextBox'), { ssr: false })

const PageHeader_VariableHeight = ({
  animationData,
  header,
  primaryColor,
  accentColor,
  subheaderColor,
  subheader,
}) => {
  return (
    <div
      className={classNames('relative overflow-hidden w-full h-full', [`bg-${accentColor}`])}
      id='topOfPage'
    >
      <div className=' z-0 absolute  top-0 left-0 w-full h-full overflow-hidden lottie' id='lottie'>
        <LottiePatternPlayer animationData={animationData} width={100} height={100} />
      </div>
      <PageHeader_TextBox
        header={header}
        primaryColor={primaryColor}
        accentColor={accentColor}
        subheader={subheader}
        subheaderColor={subheaderColor}
      />
    </div>
  )
}
export default PageHeader_VariableHeight
