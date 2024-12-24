import { SocialIcon } from '@SocialIcons/SocialIcon'
import { TextColorVariant } from '@lib/colorHelper'
import { textSizeProps } from '@lib/textSizeHelper'

interface SocialLinksProps {
  color: TextColorVariant
  textSize: textSizeProps
}
function Nav_SocialLinks({ color, textSize }: SocialLinksProps) {
  return (
    <div className='flex justify-center max-w-xs px-8 mx-auto lg:justify-between gap-x-1 lg:gap-3'>
      <SocialIcon
        iconName={'Instagram'}
        color={`${color}`}
        size={`${textSize}`}
        href={'https://instagram.com/pixelbakery'}
      />
      <SocialIcon
        iconName={'Youtube'}
        color={`${color}`}
        size={`${textSize}`}
        href={'https://www.youtube.com/c/pixelbakery'}
      />

      <SocialIcon
        iconName={'Vimeo'}
        color={`${color}`}
        size={`${textSize}`}
        href={'https://vimeo.com/pixelbakery'}
      />

      <SocialIcon
        iconName={`LinkedIn`}
        color={`${color}`}
        size={`${textSize}`}
        href={'https://www.linkedin.com/company/7593086'}
      />
    </div>
  )
}
export default Nav_SocialLinks
