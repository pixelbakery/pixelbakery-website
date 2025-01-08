import { ReactNode, PropsWithChildren } from 'react'
import cn from 'classnames'

import { textColorVariants, type TextColorVariant } from '@lib'

type Props = {
  children?: ReactNode
  color?: TextColorVariant
  className?: string
  id?: string
  centered?: boolean
}

const H1 = ({
  color = 'peach',
  children,
  className,
  centered = false,
}: PropsWithChildren<Props>) => {
  return (
    <header>
      <h1
        itemProp='name'
        className={cn(
          'font-bold max-w-md mt-0 text-6xl md:text-7xl lg:text-8xl 3xl:text-9xl 2xl:max-w-4xl leading-none mb-12 2xl:mb-8 ',
          [`${textColorVariants[color]}`],
          { ['text-center']: centered },
          { [`${className}`]: className },
        )}
      >
        {children}
      </h1>
    </header>
  )
}

export default H1
