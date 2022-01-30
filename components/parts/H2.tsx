import React, { ReactNode, PropsWithChildren } from 'react'
import cn from 'classnames'

type Props = {
  children?: ReactNode
  color?: string
  id?: string
  className?: string
}
// To override the bottom margin, you must prefix one of the classes with '2xl:'
const H2 = ({ color, children, className }: PropsWithChildren<Props>) => {
  return (
    <h2
      className={cn(
        ' font-bold max-w-md mt-0 text-5xl sm:text-5xl md:text-6xl 2xl:text-7xl 2xl:max-w-4xl leading-none mb-12 2xl:mb-20 ',
        [`text-${color}`],
        className,
      )}
    >
      {children}
    </h2>
  )
}

export default H2
