import SocialLinks from '@images/Icons_Social/SocialLinks'

function Footer_SocialLinks() {
  const color = 'text-egg'
  const textSize = 'text-xl lg:text-3xl'

  return (
    <div className='max-w-xs flex justify-center gap-2  px-8'>
      <SocialLinks iconName={'Instagram'} color={color} textSize={textSize} />
      <SocialLinks iconName={'Youtube'} color={color} textSize={textSize} />
      <SocialLinks iconName={'Discord'} color={color} textSize={textSize} />
      <SocialLinks iconName={'Vimeo'} color={color} textSize={textSize} />
      <SocialLinks iconName={'Twitch'} color={color} textSize={textSize} />
      <SocialLinks iconName={'Linkedin'} color={color} textSize={textSize} />
    </div>
  )
}
export default Footer_SocialLinks
