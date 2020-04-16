export interface IProject {
  id: number
  name: string
  published_on: {
    [key: string]: string
  }
  description: string
  language: string
  frameworks?: string[]
  database?: string[]
  updated_at: string
}
