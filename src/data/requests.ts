import { projects } from './projects.json'

export interface IProject {
  id: number
  name: string
  published_on: {
    [key: string]: string
  }
  description: string
  languages?: string[]
  frameworks?: string[]
  database?: string[]
  updated_at: string
}

type TFetch<T> = () => Promise<T>

export const fetchProjects: TFetch<IProject[]> = async () => projects
