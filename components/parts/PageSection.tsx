import cn from 'classnames'
type Props = {
  className?: string
  innerClassName?: string
  innerMaxWidth?: string
  color?: string
  id?: string
}
export default function PageSection({
  className,
  children,
  color,
  id,
}: React.PropsWithChildren<Props>) {
  return (
    <section className={cn('my-4 py-8 px-8 lg:py-32', `bg-${color}`, `${className}`)} id={id}>
      {children}
    </section>
  )
}
