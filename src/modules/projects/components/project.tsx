import React, { useCallback } from 'react'
import { GitHub } from '@material-ui/icons'

import { IProject } from '../../../data/interfaces'
import Tag from './tag'

interface IProjectFC {
  project: IProject
}

const ICONS: { [key: string]: JSX.Element } = {
  github: <GitHub />
}

const Project: React.FC<IProjectFC> = ({ project }) => {
  const renderTags = useCallback(() => {
    const { language = '', frameworks = [], database = [] } = project

    const tags = [language, ...frameworks, ...database]
    return tags.map(tag => <Tag label={tag} key={tag} />)
  }, [project])

  const renderLinks = useCallback(() => {
    const { published_on } = project
    return Object.keys(published_on).map(key => (
      <div className="project-link" key={key}>
        <a
          className="project-link-anchor"
          href={published_on[key]}
          target="_blank"
          rel="noopener noreferrer"
        >
          {ICONS[key]}
        </a>
      </div>
    ))
  }, [project])

  return (
    <div className="project">
      <div className="project-name">{project.name}</div>
      <div className="project-tags">{renderTags()}</div>
      <div className="project-description">{project.description}</div>
      <div className="project-links">{renderLinks()}</div>
    </div>
  )
}

export default Project
