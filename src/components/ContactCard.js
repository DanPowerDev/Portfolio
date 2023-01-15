import React from "react";
import './ContactCard.css'
import { CopyLinkButton, NewTabButton } from "./global/Buttons";

const ContactCard = ({method}) => {
  const {title, pref, text, buttonType, link} = method
  return (
    <div className="contact-card">
      <h4>{title}</h4>
      {pref && <PrefLabel/>}
      <p>{text}</p>
      {buttonType === 'copy' && <CopyLinkButton title={'Copy to clipboard'} link={link}/>}
      {buttonType === 'newTab' && <NewTabButton title={'Open in new tab'} link={link}/>}
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