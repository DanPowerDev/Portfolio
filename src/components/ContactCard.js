import React from "react";
import './ContactCard.css'
import { CopyLinkButton, NewTabButton } from "./global/Buttons";
import Spacer from "./global/Spacer";

const ContactCard = ({method}) => {
  const {title, pref, text, buttonType, link} = method
  return (
    <div className="contact-card">
      <Spacer>
        <div className="flex-row">
          <h5 className="no-bottom-margin">{title}</h5>
          {pref && <PrefLabel/>}
        </div>
        <div className="flex-row">
          <p className="no-bottom-margin">{text}</p>
          {buttonType === 'copy' && <CopyLinkButton title={'Copy to clipboard'} link={link}/>}
          {buttonType === 'newTab' && <NewTabButton title={'Open in new tab'} link={link}/>}
        </div>
      </Spacer>
    </div>
    // TODO: add links, new tab, 
  )
}

export default ContactCard

const PrefLabel = () => (
  <div className="pref-label">
    <span className="label-text">PREFERRED</span>
  </div>
)