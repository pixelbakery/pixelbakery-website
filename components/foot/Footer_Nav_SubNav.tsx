import Link from 'next/link'
export default function FooterNavMoreCard({ navitem }) {
  return (
    <li className='text-left leading-none text-cream text-md cursor-pointer'>
      <Link href={navitem.url} passHref>
        <a href={navitem.url}>{navitem.text}</a>
      </Link>
    </li>
  )
}
