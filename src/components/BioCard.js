import React from "react";
import './BioCard.css'
import { NewTabButton } from "./global/Buttons";

const BioCard = ({bio}) => {
  const {title, text, img} = bio
  return (
    <div className='bio-card'>
    <img className="bio-img" src={img.src} alt={img.alt} />
    <div className="bio-content">
      <p className="lead left-align">{title}</p>
      {text.map((paragraph, i) => <p key={i} className='left-align'>{paragraph}</p>)}
      {/* TODO: Get this hosted */}
      <NewTabButton title={'View CV/Resume'} link={'https://rateyourmusic.com/list/bengrieve/anthony-fantanos-top-50-albums-of-2022/'} />
    </div>  
  </div>
  )
}

export default BioCard