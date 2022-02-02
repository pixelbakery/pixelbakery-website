/* eslint-disable react/prop-types */

import Link from 'next/link'
import socialLinks from '@data/SocialUrls'
import * as Icons from './Icons/index'
import cn from 'classnames'
const getLinks = socialLinks

function capitalizeFirstLetter(string) {
  const lowered = string.toLowerCase()
  return lowered.charAt(0).toUpperCase() + lowered.slice(1)
}
const Icon = ({ icon, title, titleId, className }) => {
  const TheIcon = icon
  return <TheIcon className={className} title={title} titleId={titleId} />
}
// Object Prop: iconName (mandatory)
// className Props: color, textSize, width, height. Must be tailwind-defined classes.
// If props 'height' and 'width' are passed, they will override textSize
const SocialLinks = ({ iconName, ...props }) => {
  const link = getLinks[iconName]
  // console.log(iconName)
  return (
    <div>
      <Link href={props.href ? props.href : link != undefined ? link : ''} passHref>
        <a rel='nofollow' className='mx-1 '>
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
              icon={Icons[capitalizeFirstLetter(iconName)]}
              title={iconName}
              titleId={iconName}
            />
          </i>
        </a>
      </Link>
    </div>
  )
}
export default SocialLinks
