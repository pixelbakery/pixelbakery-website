// types/index.ts
//
// This file merges previously defined props with existing interfaces for
// the contact form and general data structures used throughout the app.
//

import type { ReactNode } from 'react'
import type { Controller, FieldErrors, UseFormRegister, Control } from 'react-hook-form'

// ────────────────────────────────────────────────────────────────────────────
// SHARED / GENERIC TYPES
// ────────────────────────────────────────────────────────────────────────────

export type Children = {
  children: ReactNode
}

export interface Data {
  date: string
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

// ────────────────────────────────────────────────────────────────────────────
// SPOTIFY / PLAYLIST TYPES
// ────────────────────────────────────────────────────────────────────────────

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

// ────────────────────────────────────────────────────────────────────────────
// CASE STUDY TYPES
// ────────────────────────────────────────────────────────────────────────────

export interface Credit {
  name: string // Name of the person
  title: string // Title or role of the person
  website?: string // Optional website link
}

export interface CaseStudiesCreditsProps {
  credits: Credit[] // List of credits
}

export interface CaseStudyData {
  date: string
  active: boolean
  credits: Credit[]
  client: string
  title: string
  excerpt: string
  tags: Record<string, string>
  vimeoPreview: string
  vimeoID: string
}

export interface CaseStudyProject {
  filePath: string
  data: CaseStudyData
}

export interface HomePortfolioCardProps {
  bgColor: string
  bgPosition: string
  project: CaseStudyProject
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
// PEOPLE TYPES
// ────────────────────────────────────────────────────────────────────────────
export interface PersonData {
  name: string
  title: string
  headshotSerious: string
  headshotSmiling: string
  bio?: string
}

// Define the structure of the `person` prop
export interface Person {
  data: PersonData
  filePath: string
}

export interface AboutTeamHeadshotProps {
  person: Person
}
// ────────────────────────────────────────────────────────────────────────────
// CONTACT FORM TYPES
// ────────────────────────────────────────────────────────────────────────────

// The core shape of data from the main contact forms.
export interface FormInputs {
  name: string
  entity?: string
  multipleErrorInput?: string
  newsletter?: boolean
  message: string
  soliciting: string | null
  subject: string
  value?: string
  phone?: string
  email: string
  website?: string | undefined
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
  register: UseFormRegister<FormInputs>
  errors: FieldErrors<FormInputs>
  fieldName?: keyof FormInputs
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

// Newsletter checkbox props.
export interface NewsletterProps {
  register: UseFormRegister<any>
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
