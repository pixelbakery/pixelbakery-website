import React, { ReactNode, PropsWithChildren } from 'react'
import cn from 'classnames'

import { textColorVariants, TextColorVariant } from '@lib/colorHelper'

type Props = {
  children?: ReactNode
  color?: TextColorVariant
  className?: string
}

const H1 = ({ color = 'peach', children, className }: PropsWithChildren<Props>) => {
  return (
    <h1
      className={cn(
        'font-bold max-w-md mt-0 text-6xl md:text-7xl lg:text-8xl 3xl:text-9xl 2xl:max-w-4xl leading-none mb-12 2xl:mb-8 ',
        [`${textColorVariants[color]}`],
        { [`${className}`]: className },
      )}
    >
      {children}
    </h1>
  )
}

export default H1
