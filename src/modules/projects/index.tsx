import React, { useState, useEffect, useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import Loader from '../shared/loader'
import { fetchProjects } from '../../data/requests'
import { IProject } from '../../data/interfaces'
import Project from './components/project'
import { ProjectsWrapper } from './styles'
import Filters, { IFilters } from './components/filters'

const Projects: React.FC = () => {
  const { t } = useTranslation('projects')
  const [loading, setLoading] = useState(true)

  const [selectedFilters, selectFilters] = useState<IFilters>({
    languages: new Set(),
    frameworks: new Set(),
    database: new Set(),
    topics: new Set()
  })
  const [filters, setFilters] = useState<IFilters>({
    languages: new Set(),
    frameworks: new Set(),
    database: new Set(),
    topics: new Set()
  })
  const [projects, setProjects] = useState<IProject[]>([])

  // FETCH PROJECTS
  useEffect(() => {
    fetchProjects()
      .then(data => setProjects(data))
      .catch(() => {
        setProjects([])
      })
      .finally(() => setLoading(false))

    return () => setLoading(true)
  }, [setLoading])

  // FETCH FILTERS
  useEffect(() => {
    const langSet = new Set<string>()
    const fwSet = new Set<string>()
    const dbSet = new Set<string>()
    const topicSet = new Set<string>()

    projects.forEach(proj => {
      const { language, frameworks = [], database = [], topics = [] } = proj

      langSet.add(language)

      frameworks.forEach(fw => fwSet.add(fw))
      database.forEach(db => dbSet.add(db))
      topics.forEach(tp => topicSet.add(tp))
    })

    setFilters({
      languages: langSet,
      frameworks: fwSet,
      database: dbSet,
      topics: topicSet
    })
  }, [projects])

  const handleFilters = useCallback(
    (filterCategory: keyof IFilters, filterName: string) => {
      const newFilters = { ...selectedFilters }

      if (newFilters[filterCategory].has(filterName)) {
        newFilters[filterCategory].delete(filterName)
      } else {
        newFilters[filterCategory].add(filterName)
      }

      selectFilters(newFilters)
    },
    [selectedFilters]
  )

  const renderProjects = useCallback(() => {
    if (loading) {
      return <Loader />
    }
    if (!projects.length) {
      return <div className="projects-notfound">{t('no-projects-found')}</div>
    }

    return projects.map(project => {
      const { languages, frameworks, database, topics } = selectedFilters

      const isFiltered =
        languages.size || frameworks.size || database.size || topics.size

      const ProjectComponent = (
        <Project
          project={project}
          key={project.id}
          selectFilters={handleFilters}
          selectedFilters={selectedFilters}
        />
      )

      if (isFiltered) {
        if (languages.has(project.language)) {
          return ProjectComponent
        }

        const frameworkIntersection = project.frameworks?.filter(fw =>
          frameworks.has(fw)
        )

        if (frameworkIntersection?.length) {
          return ProjectComponent
        }

        const databaseIntersection = project.database?.filter(db =>
          database.has(db)
        )

        if (databaseIntersection?.length) {
          return ProjectComponent
        }

        const topicIntersection = project.topics?.filter(tp => topics.has(tp))

        if (topicIntersection?.length) {
          return ProjectComponent
        }

        return null
      }

      return ProjectComponent
    })
  }, [projects, t, selectedFilters, handleFilters, loading])

  return (
    <ProjectsWrapper>
      <Filters
        filters={filters}
        selectedFilters={selectedFilters}
        selectFilters={handleFilters}
      />
      {renderProjects()}
    </ProjectsWrapper>
  )
}

export default Projects
