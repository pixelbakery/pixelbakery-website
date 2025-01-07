import { H3 } from '@typography'
import type { ReactNode } from 'react'

interface Industries_UseCases_Card_Props {
  children: ReactNode
  title: string
}
const Industries_UseCases_Card = ({ children, title }: Industries_UseCases_Card_Props) => {
  return (
    <div className='p-8 border-4 border-blue rounded-xl text-egg'>
      <H3 color='blue'>{title}</H3>
      <div>{children}</div>
    </div>
  )
}

export default Industries_UseCases_Card
