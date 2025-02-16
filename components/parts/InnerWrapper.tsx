import { ReactNode, PropsWithChildren } from 'react'
import cn from 'classnames'
import { backgroundColorVariants, backgroundColorVariant } from '@lib/colorHelper'

type Props = {
  children?: ReactNode
  id?: string
  color?: backgroundColorVariant
  className?: string
  disableSpacing?: boolean
  center?: boolean
}

const InnerWrapper = ({
  id,
  color = 'none',
  children,
  disableSpacing,
  className,
  center,
}: PropsWithChildren<Props>) => {
  return (
    <div
      id={id}
      className={cn(
        'max-w-md md:max-w-3xl xl:max-w-6xl mx-auto',
        [`${backgroundColorVariants[color]}`],
        { [`max-w-md md:max-w-3xl xl:max-w-6xl`]: !disableSpacing || disableSpacing === null },
        { [`mx-auto flex flex-col items-center text-center`]: center },
        className,
      )}
    >
      {children}
    </div>
  )
}

export default InnerWrapper
