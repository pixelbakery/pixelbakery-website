import { ReactNode } from 'react'
import cn from 'classnames'
import { H2 } from '@typography'
import { textColorVariants, TextColorVariant } from '@lib/colorHelper'

type Props = {
  children?: ReactNode
  headerColor?: TextColorVariant
  leadColor?: TextColorVariant
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
  headerColor = 'peach',
  leadColor = 'wine',
  className,
  center,
}: Props) => {
  return (
    <hgroup className={cn([`${className}`])} itemScope itemType='https://schema.org/CreativeWork'>
      <H2
        noMargins={true}
        color={headerColor}
        className={cn(' mb-4 ', [`${textColorVariants[headerColor]}`], {
          [`text-center`]: center === true,
        })}
      >{`${headerText}`}</H2>
      <p
        role='doc-subtitle'
        itemProp='alternativeHeadline'
        className={cn(
          'text-2xl lg:text-2xl mt-0 font-semibold leading-tight max-w-lg lg:mb-12 font-geologica',
          [`${textColorVariants[leadColor]}`],
          { [`${className}`]: leadColor },
          { [`text-center`]: center === true },
        )}
      >
        {leadText}
      </p>
    </hgroup>
  )
}

export default H2AndLead
