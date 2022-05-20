import cn from 'classnames'
type Props = {
  className?: string
  innerClassName?: string
  innerMaxWidth?: string
  color?: string
  id?: string
}
function PageSection_FullWidth({ className, children, color, id }: React.PropsWithChildren<Props>) {
  return (
    <section className={cn('my-4', `bg-${color}`, `${className}`)} id={id}>
      {children}
    </section>
  )
}
export default PageSection_FullWidth
