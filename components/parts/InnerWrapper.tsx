import React, { ReactNode, PropsWithChildren } from 'react'
import cn from 'classnames'

type Props = {
  children?: ReactNode
  id?: string
  color?: string
  className?: string
}

const InnerWrapper = ({ id, color, children, className }: PropsWithChildren<Props>) => {
  return (
    <div
      id={id}
      className={cn('max-w-md md:max-w-3xl xl:max-w-6xl mx-auto', `bg-${color}`, className)}
    >
      {children}
    </div>
  )
}

export default InnerWrapper
