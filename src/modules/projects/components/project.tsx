import React from 'react'

interface IProject {
  project: {
    id: number
    name: string
  }
}

// TODO: IMPLEMENT THIS
const Project: React.FC<IProject> = ({ project }) => {
  return (
    <div className="project">
      <div className="project-name">{project.name}</div>
    </div>
  )
}

export default Project
