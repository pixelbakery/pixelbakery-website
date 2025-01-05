import { ReactNode } from 'react'
import cn from 'classnames'
import { textColorVariants, TextColorVariant } from '@lib/colorHelper'

type Props = {
  children?: ReactNode
  color?: TextColorVariant
  className?: string
  overrideSizes?: boolean
}

const H3 = ({ color = 'wine', children, className, overrideSizes }: Props) => {
  return (
    <h3
      className={cn(
        'font-geologica font-bold max-w-md  mb-0 pb-0 leading-none ',
        [`${textColorVariants[color]}`],
        [`${className}`],
        { [`text-3xl sm:text-3xl md:text-4xl 2xl:text-4xl 2xl:max-w-4xl`]: !overrideSizes },
      )}
    >
      {children}
    </h3>
  )
}

export default H3
