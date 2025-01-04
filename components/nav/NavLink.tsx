import { m } from 'framer-motion'
import Link from 'next/link'
import cn from 'classnames'

interface NavLinkProps {
  href: string
  text: string
  delay: number
  showNavBar: boolean
  isHamActive: boolean
  isHighlighted?: boolean
  navItemVariants?: Record<string, any>
}

export default function NavLink({
  href,
  text,
  delay,
  showNavBar,
  isHamActive,
  isHighlighted,
  navItemVariants,
}: NavLinkProps) {
  const linkClasses = cn(
    'z-20 self-center hidden px-4 py-3 font-extrabold tracking-wide lowercase duration-200 rounded-sm cursor-pointer pointer-events-auto select-auto md:block hover:scale-98',
    {
      'bg-peach text-cream': isHighlighted,
      'bg-cream text-peach': !isHighlighted,
    },
  )

  const containerClasses = cn('relative self-center', {
    'opacity-0 hidden': isHamActive,
  })

  return (
    <m.div
      initial='offscreen'
      animate={showNavBar ? 'onscreen' : 'offscreen'}
      variants={navItemVariants}
      exit='offscreen'
      custom={delay}
      className={containerClasses}
    >
      <Link hrefLang='en-US' href={href} className={linkClasses}>
        {text}
      </Link>
    </m.div>
  )
}
