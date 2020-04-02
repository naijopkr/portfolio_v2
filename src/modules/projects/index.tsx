import React, { useState, useEffect, useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import { fetchProjects, IProject } from '../../data/requests'
import Project from './components/project'

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
      return <div>{t('no-projects-found')}</div>
    }

    return projects.map(project => <Project project={project} />)
  }, [projects, t])

  return <div>{renderProjects()}</div>
}

export default Projects
