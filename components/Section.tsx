import React, { ReactNode, FunctionComponent } from 'react'
import cn from 'classnames'

type Props = {
  children?: ReactNode
  id?: string
  color?: string
}

const Container: FunctionComponent = ({ id, color, children }: Props) => {
  return (
    <section id={id} className={cn('container mx-auto px-5 bg-', color)}>
      {children}
    </section>
  )
}

export default Container
