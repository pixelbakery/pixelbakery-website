import Link from 'next/link'
import cn from 'classnames'
import {
  CapitalizeWord,
  textSizeHelper,
  textSizeProps,
  textColorVariants,
  type TextColorVariant,
} from '@lib'

import IconMap from './IconMap' // Adjust the import path as necessary
interface IconRendererProps {
  iconName: string
}

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1)

const IconRenderer = ({ iconName }: IconRendererProps) => {
  // Capitalize the first letter of iconName and replace any potential hyphens followed by lowercase letters with uppercase letters (camelCase)
  const formattedIconName = capitalize(iconName).replace(/-\w/g, (m) => m[1].toUpperCase())
  const IconComponent = IconMap[formattedIconName]

  if (!IconComponent) {
    // Optionally, render a placeholder or return null if the icon isn't found
    console.error(`Icon ${formattedIconName} not found.`)
    return null
  }
  return <IconComponent />
}

interface SocialIconProps {
  iconName: string
  href: string
  color: TextColorVariant
  size: textSizeProps
}

const SocialIcon = ({ iconName, href, color, size }: SocialIconProps) => {
  return (
    <div>
      <Link hrefLang={'en-US'} href={`${href}`} className='block mx-1'>
        <>
          <i
            className={cn(
              'block transform-gpu transition duration-700 ease-in-out hover:-translate-y-2 hover:animate-pulse',
              `${textColorVariants[color]}`,
              { [`${textSizeHelper[size]}`]: size },
            )}
            role='img'
            aria-label={iconName}
          >
            <IconRenderer iconName={iconName} />
          </i>
          <span className='sr-only'>{`${CapitalizeWord(iconName)}`}</span>
        </>
      </Link>
    </div>
  )
}
export default SocialIcon
