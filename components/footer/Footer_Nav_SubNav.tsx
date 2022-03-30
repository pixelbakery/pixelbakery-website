import Link from 'next/link'
export default function FooterNavMoreCard({ navitem }) {
  return (
    <li className='text-left leading-none text-cream text-md cursor-pointer my-0 py-0'>
      <Link href={navitem.url} passHref>
        <a className='my-0 py-0 leading-none' href={navitem.url}>
          {navitem.text}
        </a>
      </Link>
    </li>
  )
}
