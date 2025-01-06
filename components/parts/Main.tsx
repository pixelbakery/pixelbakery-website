import type { ReactNode, PropsWithChildren } from 'react'
import cn from 'classnames'
import { geologica, dempsey, poppins } from '@styles/fonts'

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
        'max-w-screen overflow-x-hidden',
        `${geologica.variable} ${dempsey.variable} ${poppins.variable} font-poppins font-poppins font-dempsey`,
        className,
      )}
    >
      {children}
    </main>
  )
}

export default Main
