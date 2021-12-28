import React from 'react'
import cs from 'classnames'
type Props = {
  className?: string
  innerClassName?: string
  innerMaxWidth?: string
  id?: string
}
export default function PageSection({
  className,
  innerClassName,
  innerMaxWidth,
  children,
  id,
  ...rest
}: React.PropsWithChildren<Props>) {
  return (
    <section className={cs('py-8 px-8 lg:py-32', className)} id={id}>
      <div className={'mx-auto ' + innerMaxWidth}>
        <div className={cs('lg:px-12 py-8 ', innerClassName)}>{children}</div>
      </div>
    </section>
  )
}
