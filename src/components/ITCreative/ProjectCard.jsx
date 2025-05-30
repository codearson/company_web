import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <a href={`/projects/${project.id}`} className="project-card style-7">
      <div className="info">
        <h6>{ project.title }</h6>
        <h3>{ project.description }</h3>
      </div>
      <div className="img">
        <img src={project.image} alt={project.title} />
      </div>
    </a>
  )
}

export default ProjectCard