import React, {useState} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faPenRuler, faSitemap } from '@fortawesome/free-solid-svg-icons'

import './SkillCard.css';

export const SkillCard = ({skill}) => {
  
  const findIcon = (id) => {
    if (id === 'FE') return <FontAwesomeIcon icon={faCode} size='2x'/>
    if (id === 'BE') return <FontAwesomeIcon icon={faSitemap} size='2x'/>
    if (id === 'UX') return <FontAwesomeIcon icon={faPenRuler} size='2x'/>
  }
  
  const {id, title, text, tools} = skill

  return (
    <article className="skill-card">
      <div className="skill-img">
        {findIcon(id)}
      </div>
      <div className="skill-card-text">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
      <div className="tool-container">
        {tools.map((tool, i) => <ToolImage key={i} tool={tool} />)}
      </div>
    </article>
  )
}

const ToolImage = ({tool}) => {
  
  const [isHovered, setIsHovered] = useState(false)
  const {title, src, alt} = tool

  return (
    <div 
      className='tool'
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      <img className='tool-img' src={src} alt={alt} />
      {isHovered && <p className="tool-title">{title}</p>}
    </div>    
  )
}