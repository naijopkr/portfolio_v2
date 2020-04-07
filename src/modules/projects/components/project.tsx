import React, { useCallback } from 'react'

import { IProject } from '../../../data/interfaces'

interface IProjectFC {
  project: IProject
}

// TODO: IMPLEMENT THIS
const Project: React.FC<IProjectFC> = ({ project }) => {
  const renderTags = useCallback(() => {
    const { languages = [], frameworks = [], database = [] } = project

    const tags = [...languages, ...frameworks, ...database]
    return tags.map(tag => (
      <div className="project-tag" key={tag}>
        {tag}
      </div>
    ))
  }, [project])

  const renderLinks = useCallback(() => {
    const { published_on } = project
    return Object.keys(published_on).map(key => (
      <div className="project-link" key={key}>
        <a href={published_on[key]} target="_blank" rel="noopener noreferrer">
          {key}
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
