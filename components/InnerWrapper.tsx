import React, { ReactNode, PropsWithChildren } from 'react'
import cn from 'classnames'

type Props = {
  children?: ReactNode
  id?: string
  color?: string
  classNames?: string
}

const InnerWrapper = ({ id, color, children, ...classNames }: PropsWithChildren<Props>) => {
  return (
    <div
      id={id}
      className={cn('max-w-md md:max-w-2xl xl:max-w-6xl mx-auto', classNames, 'bg-', color)}
    >
      {children}
    </div>
  )
}

export default InnerWrapper
