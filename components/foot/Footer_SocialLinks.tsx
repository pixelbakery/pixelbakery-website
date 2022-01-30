import SocialLinks from '@images/Icons_Social/SocialLinks'

function Footer_SocialLinks() {
  const color = 'text-egg'
  const textSize = 'text-3xl'

  return (
    <div className='max-w-xs mx-auto flex justify-between  px-8'>
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
