import Link from 'next/link'

interface MenuLinkProps {
  href: string
  text: string
  update: () => void
  external?: boolean
}
const MenuLink = ({ href, text, update, external = false }: MenuLinkProps) => {
  const linkClass = 'relative duration-100 hover:scale-98 origin-left ease-in-out hover:opacity-95'

  if (external) {
    return (
      <li className={linkClass}>
        <a href={href} target='_blank' rel='noopener noreferrer' onClick={update}>
          {text} ↗
        </a>
      </li>
    )
  }

  return (
    <li className={linkClass}>
      <Link href={href} onClick={update}>
        {text}
      </Link>
    </li>
  )
}
export default MenuLink
