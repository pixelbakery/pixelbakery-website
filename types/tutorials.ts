/**
 * Represents the metadata for a tutorial.
 */

import type { PrevNextNavigation, ReadTime } from '@/types/general'

export interface TutorialFrontMatter {
  [key: string]: unknown
  title: string // Title of the tutorial
  active: boolean // Whether the tutorial is active
  category: string // Tutorial category (e.g., After Effects)
  downloadLink?: string | null // Optional download link
  date: string // Publication date
  tags: string[] // Tags for the tutorial
  coverImage: string // Path to the cover image
  excerpt: string // Short summary of the tutorial
  author: TutorialAuthor // Author details
  video: string // Video URL
  type: string // Type of tutorial (_madeToOrder, etc.)
  draft: boolean // Whether the tutorial is a draft
  slug: string // URL slug for the tutorial
  prev?: PrevNextNavigation
  next?: PrevNextNavigation
}

/**
 * Represents the author of a tutorial.
 */
export interface TutorialAuthor {
  name: string // Author's full name
  url?: string // Optional link to the author's page
}

/**
 * Represents a single tutorial.
 */
export interface Tutorial {
  filePath: string // Path to the tutorial file
  frontMatter: TutorialFrontMatter // Metadata for the tutorial
}

/**
 * Represents the props for the tutorial page components.
 */
export interface TutorialPageProps {
  slug: string // URL slug for the tutorial
  source: any // Serialized MDX content
  frontMatter: TutorialFrontMatter // Metadata for the tutorial
  readTime: ReadTime // Reading time information
  prev?: PrevNextNavigation | null // Previous tutorial navigation
  next?: PrevNextNavigation | null // Next tutorial navigation
}
