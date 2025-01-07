export interface CaseStudy {
  filePath: string // Path to the case study file
  data: CaseStudyData // Metadata about the case study
}

export interface CaseStudyData {
  title: string // Title of the case study
  client: string // Client name
  tags: string[] // Relevant tags
  vimeoPreview: string // Vimeo preview link
  date?: string // Date of the case study
  credits?: Credit[] // Array of credit details
  awards?: string[] // List of awards associated with the case study
  active: boolean // Whether the case study is active
  quickfacts: QuickFacts // Object containing quick facts about the case study
} 

export interface Credit {
  name: string // Name of the credited person
  title: string // Title of the credited person
  website?: string // Optional website link
}

export interface QuickFacts {
  industry: string
  service_types:  string[]
  awards: string[]
}