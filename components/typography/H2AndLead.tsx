import React, { ReactNode, PropsWithChildren } from 'react'
import cn from 'classnames'
import H2 from './H2'
import Lead from './Lead'

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
      <H2
        noMargins={true}
        className={cn(' mb-4', {
          [`text-${headerColor}`]: headerColor,
          [`text-peach`]: !headerColor,
        })}
      >{`${headerText}`}</H2>
      <Lead
        noMargins={true}
        className={cn('', {
          [`text-${leadColor}`]: leadColor,
          [`text-wine`]: !leadColor,
        })}
      >{`${leadText}`}</Lead>
    </div>
  )
}

export default H2AndLead
