import React, { ReactNode, PropsWithChildren } from 'react'
import cn from 'classnames'

type Props = {
  children?: ReactNode
  color?: string
  className?: string
}

const InnerWrapper = ({ color, children, ...className }: PropsWithChildren<Props>) => {
  return (
    <h2
      className={cn(
        'font-bold max-w-md mt-0 text-6xl 2xl:text-8xl 2xl:max-w-4xl leading-none mb-12 2xl:mb-20',
        [`text-${color}`],
        [`${className}`],
      )}
    >
      {children}
    </h2>
  )
}

export default InnerWrapper
