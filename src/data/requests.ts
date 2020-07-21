import articles from './articles.json'
import projects from './projects.json'
import { IProject, IArticle } from './interfaces'
import { mapTopics } from './topic-classes'

type TFetch<T> = () => Promise<T>

export const fetchProjects: TFetch<IProject[]> = async () => {
  const URL = 'https://ab-portfolio-api.herokuapp.com/projects'
  const data = fetch(URL)
    .then(res => {
      if (res.ok) {
        return res.json()
      }
      return projects
    })
    .then((res: IProject[]) => {
      return res.map(proj => {
        if (proj.topics?.length) {
          const topics = mapTopics(proj.topics)
          Object.assign(proj, { ...topics })
        }

        return proj
      })
    })
    .catch(() => {
      return projects
    })

  return data
}

export const fetchArticles: TFetch<IArticle[]> = async () => articles
