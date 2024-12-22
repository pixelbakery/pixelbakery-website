import { ReactNode, PropsWithChildren } from 'react'
import cn from 'classnames'
import { textColorVariants, TextColorVariant } from '@lib/colorHelper'

type Props = {
  children?: ReactNode
  color?: TextColorVariant
  id?: string
  className?: string
  noMargins?: boolean
  noMaxWidth?: boolean
}
// To override the bottom margin, you must prefix one of the classes with '2xl:'
const H2 = ({
  color = 'peach',
  children,
  className,
  noMargins,
  noMaxWidth,
}: PropsWithChildren<Props>) => {
  return (
    <h2
      itemProp='name'
      className={cn(
        'font-dempsey mt-0 text-5xl sm:text-5xl md:text-6xl 2xl:text-7xl leading-none ',
        { [`max-w-md 2xl:max-w-3xl `]: !noMaxWidth },
        { [`mb-12 2xl:mb-20 `]: !noMargins },
        [`${textColorVariants[color]}`],
        { [`${className}`]: className },
      )}
    >
      {children}
    </h2>
  )
}

export default H2
