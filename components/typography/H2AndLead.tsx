import React, { ReactNode, PropsWithChildren } from 'react'
import cn from 'classnames'
import H2 from './H2'

type Props = {
  children?: ReactNode
  headerColor?: string
  leadColor?: string
  headerText: string
  leadText: string
  id?: string
  className?: string
  center?: boolean
}
// To override the bottom margin, you must prefix one of the classes with '2xl:'
const H2AndLead = ({
  headerText,
  leadText,
  headerColor,
  leadColor,
  className,
  center,
}: PropsWithChildren<Props>) => {
  return (
    <div className={cn([`${className}`])}>
      <H2
        noMargins={true}
        className={cn(' mb-4', {
          [`text-${headerColor}`]: headerColor,
          [`text-peach`]: !headerColor,
          [`text-center`]: center === true,
        })}
      >{`${headerText}`}</H2>
      <p
        className={cn(
          'text-2xl lg:text-2xl mt-0 font-semibold leading-tight max-w-lg lg:mb-12',
          { [`text-${leadColor}`]: leadColor != undefined && 'text-wine' },
          { [`${className}`]: className },
          { [`text-center`]: center === true },
        )}
      >
        {leadText}
      </p>
    </div>
  )
}

export default H2AndLead
