type InputProps = {
  children: ReactNode
  id?: string
  className?: string
  type: string
  placeholder?: string
}

const Input = ({ children }: InputProps) => {
  return (
    <input className='border-2 border-blue bg-transparent rounded-xl w-full font-semibold py-4  px-8  md:text-lg text-wine cursor-text focus:ring-1 focus:border-blue-dark  focus:ring-blue-dark'>
      {children}
    </input>
  )
}

export default Input
