import React, { useState, useEffect, useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import { fetchProjects } from '../../data/requests'
import { IProject } from '../../data/interfaces'
import Project from './components/project'
import { ProjectsWrapper } from './styles'
import Filters, { IFilters } from './components/filters'

const Projects: React.FC = () => {
  const { t } = useTranslation('projects')

  const [selectedFilters /* selectFilters */] = useState<IFilters>({
    languages: new Set(),
    frameworks: new Set(),
    database: new Set()
  })
  const [filters, setFilters] = useState<IFilters>({
    languages: new Set(),
    frameworks: new Set(),
    database: new Set()
  })
  const [projects, setProjects] = useState<IProject[]>([])

  useEffect(() => {
    fetchProjects()
      .then(data => setProjects(data))
      .catch(() => {
        setProjects([])
      })
  }, [])

  useEffect(() => {
    const langArray = projects.reduce((pv: string[], cv) => {
      const { language } = cv

      return [...pv, language]
    }, [])

    const frameworkArray: string[] = projects.reduce((pv: string[], cv) => {
      const { frameworks, language } = cv
      if (!frameworks || !frameworks.length) {
        return pv
      }

      const newFrameworks: string[] = frameworks.map(fw => {
        return `${language}/${fw}`
      })

      return [...pv, ...newFrameworks]
    }, [])

    const databaseArray = projects.reduce((pv: string[], cv) => {
      const { database } = cv
      if (!database || !database.length) {
        return pv
      }
      return [...pv, ...database]
    }, [])

    const langSet = new Set(langArray)
    const frameworkSet = new Set(frameworkArray)
    const databaseSet = new Set(databaseArray)

    setFilters({
      languages: langSet,
      frameworks: frameworkSet,
      database: databaseSet
    })
  }, [projects])

  const renderProjects = useCallback(() => {
    if (!projects.length) {
      return <div className="projects-notfound">{t('no-projects-found')}</div>
    }

    return projects.map(project => (
      <Project project={project} key={project.id} />
    ))
  }, [projects, t])

  return (
    <ProjectsWrapper>
      <Filters filters={filters} selectedFilters={selectedFilters} />
      {renderProjects()}
    </ProjectsWrapper>
  )
}

export default Projects
