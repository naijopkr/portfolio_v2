import React from 'react'
import PropTypes from 'prop-types'

// TODO: IMPLEMENT THIS
const Project = ({ project }) => {
  return (
    <div className="project">
      <div className="project-name">{project.name}</div>
    </div>
  )
}

// TODO: IMPLEMENT THIS
Project.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    published_on: PropTypes.shape({
      github: PropTypes.string
    })
  }).isRequired
}

export default Project
