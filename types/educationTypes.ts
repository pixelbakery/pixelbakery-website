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
