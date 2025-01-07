/**
 * Represents an individual post.
 */
export interface Post {
  filePath: string // Path to the post file
  data: PostData // Metadata associated with the post
}

/**
 * Metadata structure for a post.
 */
export interface PostData {
  title: string // Title of the post
  author: PostAuthor // Author details
  categories: string[] // Categories for the post
  date: string // Date of the post in ISO format
  coverImage: string // URL or path to the cover image
  excerpt: string // Brief excerpt or summary of the post
}

/**
 * Represents the author of a post.
 */
export interface PostAuthor {
  name: string // Full name of the author
}

/**
 * Props for components rendering matching posts.
 */
export interface AboutTeamMatchingPostsProps {
  matchingAuthorPosts: Post[] // Array of posts matching the author
  name: string // Name of the person to match posts with
}