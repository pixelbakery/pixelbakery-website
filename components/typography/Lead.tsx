import React, { ReactNode, PropsWithChildren } from 'react'
import cn from 'classnames'

type Props = {
  children?: ReactNode
  color?: string
  id?: string
  className?: string
  noMargins?: boolean
}

const Lead = ({ color, children, className, noMargins }: PropsWithChildren<Props>) => {
  return (
    <p
      className={cn(
        'text-2xl lg:text-2xl mt-0 font-semibold leading-tight max-w-lg',
        { [`lg:mb-12 `]: !noMargins },
        { [`text-${color}`]: color != undefined && 'text-blue' },
        { [`${className}`]: className },
      )}
    >
      {children}
    </p>
  )
}

export default Lead
