import { PrevNextNavigation, ReadTime } from '@/types/general'

import { Person, PostAuthor } from '@/types/people'
/**
 * Metadata structure for a post.
 */
export interface PostData {
  title: string // Title of the post
  author: { name: string; slug: string }
  categories: string[] // Categories for the post
  date: string // Date of the post in ISO format
  coverImage: string // URL or path to the cover image
  excerpt: string // Brief excerpt or summary of the post
  [key: string]: any
}

/**
 * Represents an individual post.
 */
export interface Post {
  filePath: string // Path to the post file
  frontMatter: PostFrontMatter // Frontmatter metadata for the post
}

/**
 * Represents the frontmatter for a post.
 */
export interface PostFrontMatter {
  [key: string]: unknown
  title: string // Title of the post
  subtitle?: string // Optional subtitle for the post
  excerpt: string // Brief excerpt or summary of the post
  coverImage: string // URL or path to the cover image
  date: string // Date of the post in ISO format
  categories: string[] // Categories associated with the post
  tags: string[] // Tags associated with the post
  author: PostAuthor // Author details
  prev?: PrevNextNavigation
  slug?: string
  next?: PrevNextNavigation
}

export interface OurMatchingPerson {
  slug?: Person['slug']
  avatar?: Person['avatar']
  name: Person['name']
  headshotSmiling?: Person['headshotSmiling']
  filePath?: string
}
/**
 * Props for a single post page.
 */
export interface PostPageProps {
  slug: string // URL slug for the post
  source: any // Serialized MDX content
  frontMatter: PostFrontMatter // Metadata for the post
  prev?: PrevNextNavigation | null // Previous post navigation
  next?: PrevNextNavigation | null // Next post navigation
  readTime: ReadTime // Reading time information
  matchingBio?: OurMatchingPerson
  relatedPosts: Post[]
}

/**
 * Props for components rendering matching posts.
 */
export interface AboutTeamMatchingPostsProps {
  data: {
    title: string
    date: string
    author: { name: string; slug: string }
    categories: string[]
    coverImage: string // URL or path to the cover image
    excerpt: string // Brief excerpt or summary of the post
    [key: string]: any
  }
  filePath: string // Name of the person to match posts with
}
