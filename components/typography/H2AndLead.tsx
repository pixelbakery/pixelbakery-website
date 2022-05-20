import React, { ReactNode, PropsWithChildren } from 'react'
import cn from 'classnames'

type Props = {
  children?: ReactNode
  headerColor?: string
  leadColor?: string
  headerText: string
  leadText: string
  id?: string
  className?: string
}
// To override the bottom margin, you must prefix one of the classes with '2xl:'
const H2AndLead = ({
  headerText,
  leadText,
  headerColor,
  leadColor,
  className,
}: PropsWithChildren<Props>) => {
  return (
    <div className={cn([`${className}`])}>
      <h2
        className={cn(
          'font-bold max-w-md mt-0 text-5xl sm:text-5xl md:text-6xl 2xl:text-7xl 2xl:max-w-3xl leading-none mb-4',
          { [`text-${headerColor}`]: headerColor, [`text-peach`]: !headerColor },
        )}
      >{`${headerText}`}</h2>
      <p
        className={cn('text-2xl lg:text-3xl mt-0 font-bold leading-tight max-w-lg mb-0 pb-0', {
          [`text-${leadColor}`]: leadColor,
          [`text-wine`]: !leadColor,
        })}
      >{`${leadText}`}</p>
    </div>
  )
}

export default H2AndLead
