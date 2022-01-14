import React, { ReactNode, PropsWithChildren } from 'react'
import cn from 'classnames'

type Props = {
  children?: ReactNode
  color?: string
  id?: string
  className?: string
}

const Lead = ({ color, children, className }: PropsWithChildren<Props>) => {
  return (
    <p
      className={cn(
        'text-2xl lg:text-3xl mt-0 font-bold mb-8 lg:mb-12 leading-none',
        [`text-${color}`],
        className,
      )}
    >
      {children}
    </p>
  )
}

export default Lead
