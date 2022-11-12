import Link from 'next/link'
export default function FooterNavMoreCard({ navitem }) {
  return (
    <li className='text-left leading-none text-cream text-md cursor-pointer my-0 py-0'>
      <Link hrefLang={'en-US'} href={navitem.url} className='my-0 py-0 leading-none'>
        {navitem.text}
      </Link>
    </li>
  )
}
