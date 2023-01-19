import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy, faUpRightFromSquare,} from '@fortawesome/free-solid-svg-icons'
import './Buttons.css'

export const CopyLinkButton = ({title = 'Copy', link}) => {
  
  const handleClick = (link) => {
    navigator.clipboard.writeText(link)
  }
  
  return(
    <button 
      className="circle-btn"
      onClick={() => handleClick(link)} 
    >
      <FontAwesomeIcon icon={faCopy} size='1x'/>
    </button>
  )
}

export const NewTabButton = ({title = 'New tab', link}) => {
  
  const handleClick = (link) => {
    window.open(link)
  }
  
  return(
    <button 
      className="circle-btn"
      onClick={() => handleClick(link)} 
    >
      <FontAwesomeIcon icon={faUpRightFromSquare} size='1x'/>
    </button>
  )
}