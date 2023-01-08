import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngry } from '@fortawesome/free-regular-svg-icons'

export const SkillCard = ({title, text, icon}) => {
  return (
    <article className="skill-card">
      <h3>{title}</h3>
      <p>{text}</p>
      <FontAwesomeIcon icon={faAngry} />
    </article>
  )
}