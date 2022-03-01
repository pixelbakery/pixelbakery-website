import SocialLinks from '@images/Icons_Social/SocialLinks'

function Nav_SocialLinks({ color, textSize }) {
  return (
    <div className='max-w-xs mx-auto flex justify-between gap-3 px-8'>
      <SocialLinks
        iconName={'Instagram'}
        color={color}
        textSize={textSize}
        size={'2xl'}
        href={'https://instagram.com/pixelbakery'}
      />
      <SocialLinks
        iconName={'Youtube'}
        color={color}
        textSize={textSize}
        size={'2xl'}
        href={'https://www.youtube.com/c/pixelbakery'}
      />
      <SocialLinks
        iconName={'Discord'}
        color={color}
        textSize={textSize}
        size={'2xl'}
        href={'https://discord.gg/DBxgDGJzAg'}
      />
      <SocialLinks
        iconName={'Vimeo'}
        color={color}
        textSize={textSize}
        size={'2xl'}
        href={'https://vimeo.com/pixelbakery'}
      />
      <SocialLinks
        iconName={'Twitch'}
        color={color}
        textSize={textSize}
        size={'2xl'}
        href={'https://twitch.tv/pixelbakery'}
      />
      <SocialLinks
        iconName={'Linkedin'}
        color={color}
        textSize={textSize}
        size={'2xl'}
        href={'https://www.linkedin.com/company/pixelbakery'}
      />
    </div>
  )
}
export default Nav_SocialLinks
