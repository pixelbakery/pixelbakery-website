import Link from 'next/link'
export default function FooterNavMoreCard({ navitem }: any) {
  return (
    <li className='relative text-left leading-none text-cream text-md cursor-pointer my-0 py-0 duration-100 hover:scale-98 origin-left ease-in-out hover:opacity-95'>
      <Link hrefLang={'en-US'} href={navitem.url} className='my-0 py-0 leading-none'>
        {navitem.text}
      </Link>
    </li>
  )
}
