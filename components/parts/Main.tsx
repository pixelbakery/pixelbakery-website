import type { ReactNode, PropsWithChildren } from 'react'
import cn from 'classnames'
import { dempsey, poppins } from '@styles/fonts'
type Props = {
  children?: ReactNode
  id?: string
  className?: string
}

const Main = ({ children, id, className }: PropsWithChildren<Props>) => {
  return (
    <main
      id={id}
      className={cn(
        'max-w-screen overflow-hidden',

        className,
      )}
    >
      <div className={`${dempsey.variable} ${poppins.variable}`}></div>
      {children}
    </main>
  )
}

export default Main
