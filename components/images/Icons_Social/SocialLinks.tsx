import Link from 'next/link'
import socialLinks from '@data/SocialUrls'
import * as Icons from 'components/images/Icons_Social/Icons'
import cn from 'classnames'
import { CapitalizeWord } from '@lib/helpers'

const getLinks = socialLinks

const Icon = ({ icon, title, titleId, className }) => {
  const TheIcon = icon
  return <TheIcon className={className} title={title} titleId={titleId} />
}
// Object Prop: iconName (mandatory)
// className Props: color, textSize, width, height. Must be tailwind-defined classes.
// If props 'height' and 'width' are passed, they will override textSize
const About_Team_SocialLinks = ({ iconName, ...props }) => {
  const link = getLinks[`${iconName}`]
  return (
    <div>
      <Link
        hrefLang={'en-US'}
        href={props.href ? props.href : link != undefined ? link : ''}
        passHref
      >
        <a hrefLang={'en-US'} rel='nofollow' className='mx-1 block'>
          <i
            className={cn(
              'block transform-gpu transition duration-700 ease-in-out hover:-translate-y-2 ',
              `text-${props.color}`,
              `text-${props.size}`,
            )}
            role='img'
            aria-label={iconName}
          >
            <Icon
              className={cn(props.height, props.width)}
              icon={Icons[`${CapitalizeWord(iconName)}`]}
              title={`${iconName}`}
              titleId={`${iconName}`}
            />
          </i>
        </a>
      </Link>
    </div>
  )
}
export default About_Team_SocialLinks
