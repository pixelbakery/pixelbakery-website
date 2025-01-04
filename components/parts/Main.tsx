import type { ReactNode, PropsWithChildren } from 'react'
import cn from 'classnames'

type Props = {
  children?: ReactNode
  id?: string
  className?: string
}

const Main = ({ children, id, className }: PropsWithChildren<Props>) => {
  return (
    <main id={id} className={cn('max-w-screen overflow-x-hidden', className)}>
      {children}
    </main>
  )
}

export default Main
