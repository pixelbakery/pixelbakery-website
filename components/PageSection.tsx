import cs from 'classnames'
type Props = {
  className?: string
  innerClassName?: string
  id?: string
}
export default function PageSection({
  className,
  innerClassName,
  children,
  id,
  ...rest
}: React.PropsWithChildren<Props>) {
  return (
    <section className={cs('py-8 lg:py-16', className)} id={id}>
      <div className='max-w-screen-sm md:max-w-screen-md lg:max-w-6xl mx-auto'>
        <div className={cs('px-8 lg:px-12 py-8 ', innerClassName)}>{children}</div>
      </div>
    </section>
  )
}
