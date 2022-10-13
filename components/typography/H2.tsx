import { ReactNode, PropsWithChildren } from 'react'
import cn from 'classnames'

type Props = {
  children?: ReactNode
  color?: string
  id?: string
  className?: string
  noMargins?: boolean
  noMaxWidth?: boolean
}
// To override the bottom margin, you must prefix one of the classes with '2xl:'
const H2 = ({ color, children, className, noMargins, noMaxWidth }: PropsWithChildren<Props>) => {
  return (
    <h2
      className={cn(
        'inline-block font-bold mt-0 text-5xl sm:text-5xl md:text-6xl 2xl:text-7xl leading-none ',
        { [`max-w-md 2xl:max-w-3xl `]: !noMaxWidth },
        { [`mb-12 2xl:mb-20 `]: !noMargins },
        { [`text-${color}`]: color, [`text-peach`]: !color },
        { [`${className}`]: className },
      )}
    >
      {children}
    </h2>
  )
}

export default H2
