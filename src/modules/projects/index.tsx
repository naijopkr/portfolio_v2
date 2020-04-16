import React, { useState, useEffect, useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import { fetchProjects } from '../../data/requests'
import { IProject } from '../../data/interfaces'
import Project from './components/project'
import { ProjectsWrapper } from './styles'

interface IFilters {
  languages: Set<string>
  frameworks: Set<string>
  database: Set<string>
}

const Projects: React.FC = () => {
  const { t } = useTranslation('projects')

  const [filters, setFilters] = useState<IFilters>()
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
      const { languages } = cv
      if (!languages || !languages.length) {
        return pv
      }
      return [...pv, ...languages]
    }, [])

    const frameworkArray = projects.reduce((pv: string[], cv) => {
      const { frameworks } = cv
      if (!frameworks || !frameworks.length) {
        return pv
      }
      return [...pv, ...frameworks]
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

  useEffect(() => {
    console.log(filters) // eslint-disable-line
  }, [filters])

  const renderProjects = useCallback(() => {
    if (!projects.length) {
      return <div className="projects-notfound">{t('no-projects-found')}</div>
    }

    return projects.map(project => (
      <Project project={project} key={project.id} />
    ))
  }, [projects, t])

  return <ProjectsWrapper>{renderProjects()}</ProjectsWrapper>
}

export default Projects
