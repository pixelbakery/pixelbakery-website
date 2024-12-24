import type { ReactNode, PropsWithChildren } from 'react'
import cn from 'classnames'
import { dempsey, poppins, geologica } from '@styles/fonts'
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
        `max-w-screen overflow-x-hidden ${dempsey.variable} ${poppins.variable} ${geologica.variable}`,
        className,
      )}
    >
      {children}
    </main>
  )
}

export default Main
