import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faPenRuler, faListCheck } from '@fortawesome/free-solid-svg-icons'

export const SkillCard = ({skill}) => {
  
  const findIcon = (title) => {
    if (title === 'Software development') return <FontAwesomeIcon icon={faCode} />
    if (title === 'Interface & experience design') return <FontAwesomeIcon icon={faPenRuler} />
    if (title === 'Product management') return <FontAwesomeIcon icon={faListCheck} />
  }
  
  const {title, text, tools} = skill

  return (
    <article className="skill-card">
      {findIcon(title)}
      <h3>{title}</h3>
      <p>{text}</p>
      {tools.map((tool, i) => <ToolImage key={i} tool={tool} />)}
    </article>
  )
}

const ToolImage = ({tool}) => {
  const {src, alt} = tool
  return (
    <img className='tool-img' src={src} alt={alt} />
  )
}