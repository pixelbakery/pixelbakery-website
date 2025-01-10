// types/general.ts
//
// This file merges previously defined props with existing interfaces for
// the contact form and general data structures used throughout the app.
//

import type { ReactNode } from 'react'
import type { FieldErrors, UseFormRegister, Control } from 'react-hook-form'
import type { PostAuthor } from '@/types/people'
// ────────────────────────────────────────────────────────────────────────────
// SHARED / GENERIC TYPES
// ────────────────────────────────────────────────────────────────────────────

export type Children = {
  children: ReactNode
}

export interface Data {
  date: string
}

export interface ReadTime {
  text: string // Human-readable read time, e.g., "5 min read"
  minutes: number // Number of minutes as a decimal
  time: number // Total time in milliseconds
  words: number // Total word count
}

export interface PrevNextNavigation {
  title: string
  slug: string
  author?: PostAuthor
}
// ────────────────────────────────────────────────────────────────────────────
// SPOTIFY / PLAYLIST TYPES
// ────────────────────────────────────────────────────────────────────────────

export type Song = {
  songUrl: string
  albumArt: string
  artist: string
  title: string
  album: string
}

export type Playlist = {
  id: string // Playlist ID
  name: string // Playlist name
  description: string // Playlist description
  albumCoverImage: string // Cover image URL
  albumLength: string // Duration of the playlist
  external_urls: {
    spotify: string // Spotify playlist link
  }
  followers: {
    total: number // Number of followers
  }
  tracks: {
    total: number // Total number of tracks
  }
  tracksSelected: Song[] // Selected tracks for the playlist
}

// ────────────────────────────────────────────────────────────────────────────
// MEDIA / VIDEO TYPES
// ────────────────────────────────────────────────────────────────────────────

export enum MediaProvider {
  VIMEO = 'Vimeo',
  // add more providers as needed
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

// ────────────────────────────────────────────────────────────────────────────
// POSTS / BLOG TYPES
// ────────────────────────────────────────────────────────────────────────────

export interface PostData {
  title: string
  author: { name: string } | string
  tags?: string[] | undefined
  categories: string[]
  date: string
  coverImage: string
  excerpt?: string
  aspectW?: string
  aspectY?: string
  width?: number
  height?: number
  href?: string
  slug?: string
  as?: string
  onClick?: () => void
}

export interface Post {
  data: PostData
  filePath: string
}

export interface FullscreenMenuProps {
  isActive: boolean
  onModalUpdate: (isActive: boolean) => void
}

export interface MenuComponentBaseProps {
  update: () => void
  className?: string
}

// ────────────────────────────────────────────────────────────────────────────
// CONTACT FORM TYPES
// ────────────────────────────────────────────────────────────────────────────

// The core shape of data from the main contact forms.
export interface FormInputs {
  name: string
  entity?: string
  multipleErrorInput?: string
  message: string
  soliciting: string | null
  subject: string
  value?: string
  phone?: string
  email: string
  website?: string | undefined
  tag?: string
}

// Props for the sub-form
export interface FormProps {
  register: UseFormRegister<FormInputs>
  errors: FieldErrors<FormInputs>
  control: Control<FormInputs>
  hideForm: boolean
  handleSubmit: (
    callback: (data: FormInputs) => void,
  ) => (e?: React.BaseSyntheticEvent) => Promise<void>
  setSubmitted: React.Dispatch<React.SetStateAction<boolean>>
  setHideForm: React.Dispatch<React.SetStateAction<boolean>>
}

// Basic error record: keyed by field name, each with a `message`.
export interface ErrorsProps {
  errors: FieldErrors<FormInputs>
  className?: string
}

export interface PhoneInputProps {
  register: UseFormRegister<any>
  errors: FieldErrors<any>
  fieldName?: keyof any // Matches valid keys in FormInputs
  control?: Control<any>
  placeHolder?: string
  className?: string
}
// Base props shared by text inputs, email inputs, etc.
export interface BaseFieldProps {
  register: UseFormRegister<any>
  errors: FieldErrors<any>
  fieldName: string
  placeHolder?: string
  className?: string
  autoComplete?: string
  rows?: number
}

// Props for the submit button.
export interface SubmitProps {
  valueText?: string
  className?: string
  disabled?: boolean
}

// Radio buttons for whether the user is soliciting or not.
export interface SolicitationProps {
  register: UseFormRegister<any>
  errors: Record<string, any>
  value?: boolean
}

// Multi-select dropdown props.
export interface MultiSelectProps {
  control: Control<any>
  errors: Record<string, any>
  fieldName: string
  className?: string
  options: Array<{ value: string; label: string }>
}

export interface ParsedFile {
  filename: string
  encoding: string
  mimeType: string
  data: Buffer
}

export interface ParsedRequest {
  fields: {
    [key: string]: string // All form fields as key-value pairs
  }
  files: {
    [key: string]: ParsedFile // Files as key-value pairs
  }
}
// ────────────────────────────────────────────────────────────────────────────
// MAIL API TYPES
// ────────────────────────────────────────────────────────────────────────────

export interface SendMailBody {
  about_personal: string
  about_professional: string
  address_line_1: string
  address_line_2?: string
  authorized: string
  band: string
  commitment: string
  education: string
  email: string
  first_name: string
  hear: string
  hours: string
  last_name: string
  middle_name?: string
  pay: string
  phone_number: string
  position: string
  pronoun?: string
  social?: string
  website?: string
  why: string
  zodiac?: string
}

export interface SendMailAttachments {
  content: string
  filename: string
  type: string
  disposition: string
}
