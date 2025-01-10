/**
 * Represents the metadata for a project file.
 */
// export interface ProjectFileFrontMatter {
//   [key: string]: unknown
//   title: string // Title of the project file
//   category: string // Application or tool category (e.g., Cinema 4D)
//   fileName: string // Name of the file
//   fileSize: string // Size of the file (e.g., "25 MB")
//   fileType: string // Type of the file (e.g., ".zip")
//   uploadDate: string // ISO-formatted upload date
//   downloadLink: string // URL for downloading the file
//   coverImage: string // Path to the cover image
//   video?: string // Optional video URL
//   videoCoverImage?: boolean // Optional video cover image URL
//   excerpt: string // Short summary of the project file
//   slug: string // URL slug for the project file
// }
export interface ProjectFileFrontMatter {
  [key: string]: unknown
  title: string // Title of the tutorial
  active: boolean // Whether the tutorial is active
  category: string // Tutorial category (e.g., After Effects)
  downloadLink?: string | null // Optional download link
  fileName?: string
  fileSize?: string | number
  fileType?: string
  tags: string[] // Tags for the tutorial
  coverImage: string // Path to the cover image
  date?: string // Publication date
  videoCoverImage?: boolean // Optional video cover image URL
  video: string // Video URL
  excerpt: string // Short summary of the tutorial
  type: string // Type of tutorial (_madeToOrder, etc.)
}
/**
 * Represents a single project file.
 */
export interface ProjectFile {
  filePath: string // Path to the project file
  frontMatter: ProjectFileFrontMatter // Metadata for the project file
  slug: string
}

/**
 * Represents the props for the project file page components.
 */
export interface ProjectFilePageProps {
  slug: string // URL slug for the project file
  source: any // Serialized MDX content
  frontMatter: ProjectFileFrontMatter // Metadata for the project file
}
