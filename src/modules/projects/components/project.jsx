import React from 'react'
import PropTypes from 'prop-types'

// TODO: IMPLEMENT THIS
const Project = ({ project }) => (
  <div className="project">
    <div className="project-name">{project.name}</div>
  </div>
)

// TODO: IMPLEMENT THIS
Project.propTypes = {
  project: PropTypes.PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string
  }).isRequired
}

export default Project
