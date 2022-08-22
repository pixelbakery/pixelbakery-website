import React, { ReactNode, PropsWithChildren } from 'react'
import cn from 'classnames'

type Props = {
  children?: ReactNode
  id?: string
  color?: string
  className?: string
  disableSpacing?: boolean
}

const InnerWrapper = ({
  id,
  color,
  children,
  disableSpacing,
  className,
}: PropsWithChildren<Props>) => {
  return (
    <div
      id={id}
      className={cn(
        'max-w-md md:max-w-3xl xl:max-w-6xl mx-auto',
        { [`bg-${color}`]: color != undefined },
        { [`max-w-md md:max-w-3xl xl:max-w-6xl`]: !disableSpacing || disableSpacing === null },
        className,
      )}
    >
      {children}
    </div>
  )
}

export default InnerWrapper
