import { projects } from './projects.json'
import { IProject } from './interfaces'

type TFetch<T> = () => Promise<T>

export const fetchProjects: TFetch<IProject[]> = async () => projects
