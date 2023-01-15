import { faExternalLinkSquare } from "@fortawesome/free-solid-svg-icons";
import { tab } from "@testing-library/user-event/dist/tab";
import React from "react";
import './ContactCard.css'

const ContactCard = ({method}) => {
  const {title, pref, text} = method
  return (
    <div className="contact-card">
      <h4>{title}</h4>
      {pref && <PrefLabel/>}
      <p>{text}</p>
    </div>
    // TODO: add links, new tab, 
  )
}

export default ContactCard

const PrefLabel = () => (
  <div>
    <span>PREFERRED</span>
  </div>
)