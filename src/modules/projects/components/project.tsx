import React, { useCallback } from 'react'
import { GitHub } from '@material-ui/icons'

import { IProject } from '../../../data/interfaces'
import { IFilters } from './filters'
import Tag from './tag'

interface IProjectFC {
  project: IProject
  selectedFilters: IFilters
  selectFilters: (type: keyof IFilters, filter: string) => void
}

const ICONS: { [key: string]: JSX.Element } = {
  github: <GitHub />
}

const Project: React.FC<IProjectFC> = ({
  project,
  selectFilters,
  selectedFilters
}) => {
  const renderTags = useCallback(() => {
    const {
      language = '',
      frameworks = [],
      database = [],
      topics = []
    } = project

    const languageTag = [
      <Tag
        label={language}
        key={`lang-${language}`}
        onClick={() => selectFilters('languages', language)}
        active={selectedFilters.languages.has(language)}
      />
    ]

    const frameworksTags = frameworks.map(fw => (
      <Tag
        label={fw}
        key={`fw-${fw}`}
        onClick={() => selectFilters('frameworks', fw)}
        active={selectedFilters.frameworks.has(fw)}
      />
    ))

    const databaseTags = database.map(db => (
      <Tag
        label={db}
        key={`db-${db}`}
        onClick={() => selectFilters('database', db)}
        active={selectedFilters.database.has(db)}
      />
    ))

    const topicTags = topics.map(tp => (
      <Tag
        label={tp}
        key={`topic-${tp}`}
        onClick={() => selectFilters('topics', tp)}
        active={selectedFilters.topics.has(tp)}
      />
    ))

    return [...languageTag, ...frameworksTags, ...databaseTags, ...topicTags]
  }, [project, selectFilters, selectedFilters])

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
