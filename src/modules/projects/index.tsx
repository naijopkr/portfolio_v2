import React, { useState, useEffect, useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import { fetchProjects } from '../../data/requests'
import { IProject } from '../../data/interfaces'
import Project from './components/project'
import { ProjectsWrapper } from './styles'

const Projects: React.FC = () => {
  const { t } = useTranslation('projects')

  const [projects, setProjects] = useState<IProject[]>([])
  useEffect(() => {
    fetchProjects()
      .then(data => setProjects(data))
      .catch(() => {
        setProjects([])
      })
  }, [])

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
