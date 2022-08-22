// import Lottie from 'react-lottie-player'
import classNames from 'classnames'
import PageHeader_TextBox from './PageHeader_TextBox'
import { useEffect, useRef } from 'react'
import Lead from '@typography/Lead'
import lottie from 'lottie-web'

interface LottieProps {
  animationData: any
  width: number
  height: number
}

const Lottie = ({ animationData }: LottieProps) => {
  const element = useRef<HTMLDivElement>()
  const lottieInstance = useRef<any>()

  useEffect(() => {
    if (element.current) {
      lottieInstance.current?.destroy()
      lottieInstance.current = lottie.loadAnimation({
        container: element.current,
        renderer: 'svg',
        loop: true,
        // autoplay: true,

        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        },
        animationData: animationData,
      })
    }

    lottieInstance.current.playSegments(
      [
        [0, 23],
        [24, 95],
      ],
      true,
    )

    return () => {
      lottieInstance.current?.destroy()
      lottieInstance.current = null
    }
  }, [animationData])

  if (!animationData) {
    return (
      <div className='w-full h-full flex flex-col justify-center'>
        <Lead color='cream' className='self-center text-center'>
          Loading
        </Lead>
      </div>
    )
  }
  return <div style={{ height: '100%', width: '100%' }} ref={element} />
}

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
      className={classNames('relative overflow-hidden lander-variableHeight my-4', [
        `bg-${accentColor}`,
      ])}
      id='topOfPage'
    >
      <div className=' z-0 absolute  top-0 left-0 w-full h-full overflow-hidden lottie' id='lottie'>
        <Lottie animationData={animationData} width={100} height={100} />
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
