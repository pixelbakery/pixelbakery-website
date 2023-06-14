import React, { ReactNode, PropsWithChildren } from 'react'
import cn from 'classnames'

type Props = {
  children?: ReactNode
  color?: string
  className?: string
}

const H3 = ({ color, children, className }: PropsWithChildren<Props>) => {
  return (
    <h3
      className={cn(
        'font-bold max-w-md text-3xl sm:text-3xl md:text-4xl 2xl:text-4xl 2xl:max-w-4xl mb-0 pb-0 leading-none ',
        [`text-${color}`],
        [`${className}`],
      )}
    >
      {children}
    </h3>
  )
}

export default H3
