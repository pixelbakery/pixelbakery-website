import React, { ReactNode, PropsWithChildren } from 'react'
import cn from 'classnames'
import { textColorVariants, TextColorVariant } from '@lib/colorHelper'

type Props = {
  children?: ReactNode
  color?: TextColorVariant
  id?: string
  className?: string
  noMargins?: boolean
}

const Lead = ({ color = 'blue', children, className, noMargins }: PropsWithChildren<Props>) => {
  return (
    <p
      className={cn(
        'text-2xl lg:text-2xl mt-0 font-semibold leading-tight max-w-lg',
        { [`lg:mb-12 `]: !noMargins },
        { [`${textColorVariants[color]}`]: color != undefined && 'text-blue' },
        { [`${className}`]: className },
      )}
    >
      {children}
    </p>
  )
}

export default Lead
