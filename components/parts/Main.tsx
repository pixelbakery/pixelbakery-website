import type { ReactNode, PropsWithChildren } from 'react'
import cn from 'classnames'
import { dempsey, poppins, gilroy } from '@styles/fonts'
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
        `max-w-screen overflow-x-hidden ${dempsey.variable} ${poppins.variable} ${gilroy.variable}`,
        className,
      )}
    >
      {/* <div className={`${dempsey.variable} ${poppins.variable} ${gilroy.variable}`}></div> */}
      {children}
    </main>
  )
}

export default Main
