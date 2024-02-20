import { ComponentType, SVGProps } from 'react'

// Import all icons
import Behance from './Icon_Behance'
import Discord from './Icon_Discord'
import Dribbble from './Icon_Dribbble'
import Envelope from './Icon_Envelope'
import Facebook from './Icon_Facebook'
import Github from './Icon_Github'
import Globe from './Icon_Globe'
import Instagram from './Icon_Instagram'
import LinkedIn from './Icon_LinkedIn'
import Medium from './Icon_Medium'
import Spotify from './Icon_Spotify'
import Telephone from './Icon_Telephone'
import Tiktok from './Icon_Tiktok'
import Twitch from './Icon_Twitch'
import Twitter from './Icon_Twitter'
import Vimeo from './Icon_Vimeo'
import Website from './Icon_Website'
import Youtube from './Icon_Youtube'
import Letterboxd from './Icon_Letterboxd'
import Goodreads from './Icon_Goodreads'
import AppleMusic from './Icon_AppleMusic'

// Create a mapping object
interface SVGRProps {
  title?: string
}
type IconComponentType = ComponentType<SVGProps<SVGSVGElement> & SVGRProps>

const IconMap: Record<string, IconComponentType> = {
  Behance,
  Discord,
  Dribbble,
  Envelope,
  Facebook,
  Github,
  Globe,
  Instagram,
  LinkedIn,
  Medium,
  Spotify,
  Telephone,
  Tiktok,
  Twitch,
  Twitter,
  Vimeo,
  Website,
  Youtube,
  Letterboxd,
  Goodreads,
  AppleMusic,
}

export default IconMap
