import type { ReactNode } from 'react'

export type Song = {
  songUrl: string
  artist: string
  title: string
}
export type Playlist = {
  album: string
  albumImageUrl: string
  albumCoverImage: string
  name: string
  artist: string
  isPlaying: boolean
  total: number
  tracks: any
  external_urls: string
  followers: any
  albumLength: string
  spotify: string
  description: string
  tracksSelected: any
  songUrl: string
  title: string
  id: string
}
export enum MediaProvider {
  VIMEO = 'Vimeo',
  // here you may include any other providers
}

export type MediaVimeoItem = {
  provider: MediaProvider.VIMEO
  id: string
}
export type MediaItem = {
  provider: MediaProvider
} & MediaVimeoItem

export interface Uploader {
  upload(
    file: File,
    onProgress?: (bytesUploaded: number, bytesTotal: number) => void,
  ): Promise<MediaItem>
}

export interface PostData {
  title: string
  author: { name: string }
  categories: string[]
  date: string
  coverImage: string
  excerpt: string
}
export interface FullscreenMenuProps {
  isActive: boolean
  onModalUpdate: (isActive: boolean) => void
}
export interface MenuComponentBaseProps {
  update: () => void
  className?: string
}
export interface Post {
  data: PostData
  filePath: string
}

export type Children = {
  children: ReactNode
}

export interface Data {
  date: string // Adjust and extend this interface as necessary based on the actual data structure
  // Include additional properties here
}

export interface ProjectFile {
  data: Data
  filePath: string
}

export interface MadeToOrder {
  data: Data
  filePath: string
}

export interface EducationPageProps {
  allMadeToOrders: MadeToOrder[]
  allProjectFiles: ProjectFile[]
}

export interface CommonInputProps {
  placeholder?: string
}
