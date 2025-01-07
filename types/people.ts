/**
 * Represents a person's frontmatter metadata for use across the application.
 */
export interface Person {
  name: string // Full name of the person
  active: boolean // Whether the person is currently active
  slug: string // URL slug for the person's profile
  title?: string // Person's role or title
  excerpt?: string // Brief description of the person
  phone?: string // Contact phone number
  email?: string // Contact email
  pronoun?: string //
  details?: PersonDetails[] // Array of key-value pairs for additional details
  spotifyPlaylist?: string // Spotify playlist ID associated with the person
  signs?: ZodiacSigns // Zodiac signs (sun, moon, rising)
  socials?: SocialLink[] // Social media or personal links
  avatar?: string // Path to avatar image
  headshotSerious?: string // Path to serious headshot image
  headshotSmiling?: string // Path to smiling headshot image
  headshotFun?: string // Path to fun/silly headshot image
}

/**
 * Represents additional details about a person as key-value pairs.
 */
export interface PersonDetails {
  [key: string]: string
}

/**
 * Represents a person's zodiac signs.
 */
export interface ZodiacSigns {
  sun?: string
  rising?: string
  moon?: string
}

/**
 * Represents a social media or external link for a person.
 */
export interface SocialLink {
  platform: string // Social media platform (e.g., "LinkedIn", "Instagram")
  url: string // Full URL to the social profile or link
}

/**
 * Represents a person with their file path information.
 */
export interface PersonWithFilePath extends Person {
  filePath: string // Path to the person's MDX file
  bioLink: string
}
export interface PersonWithBioLink extends Person {

  bioLink: string

}
/**
 * Represents a minimal version of a person used in navigation (e.g., next/previous person links).
 */
export interface MinimalPerson {
  name: string // Name of the person
  bioLink: string // Link to the person's bio
  title?: string // Title or role of the person
}

/**
 * Represents a person used in posts or related data.
 */
export interface PostAuthor {
  name: string // Author's name
}

/**
 * Props for the About_Team component.
 */
export interface AboutTeamProps {
  allPeople: Person[] // Array of all people to display
}

/**
 * Props for the PeopleCard component.
 */
export interface PeopleCardProps {
  allPeople: Person[] // Array of people passed to the card component
  leadIndex2: number // Index for the second lead person
}

export interface Award {
  name: string
  link: string
  project: string
  client: string
  role: string
}
export type Awards = Award[]