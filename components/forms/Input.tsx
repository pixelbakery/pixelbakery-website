import { ReactNode } from 'react'
type InputProps = {
  children: ReactNode
  id?: string
  className?: string
  type: string
  placeholder?: string
}

const Input = ({ children }: InputProps) => {
  return (
    <input className='w-full px-8 py-4 font-semibold bg-transparent border-2 border-blue rounded-xl md:text-lg text-wine cursor-text focus:ring-1 focus:border-blue-dark focus:ring-blue-dark'>
      {children}
    </input>
  )
}

export default Input
