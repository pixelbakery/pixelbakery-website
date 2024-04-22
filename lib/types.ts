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
export type Children {
 children: ReactNode
}
