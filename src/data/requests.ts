import articles from './articles.json'
import projects from './projects.json'
import { IProject, IArticle } from './interfaces'

type TFetch<T> = () => Promise<T>

export const fetchProjects: TFetch<IProject[]> = async () => projects

export const fetchArticles: TFetch<IArticle[]> = async () => articles
