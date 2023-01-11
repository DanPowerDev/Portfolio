import React from "react";

import './ProjectCard.css'

const ProjectCard = ({project}) => {
  const {name, src, alt, description} = project
  return (
    <article className="project-card">
      <img src={src} alt={alt}/>
      <div className="project-card-text">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </article>
  )
}

export default ProjectCard