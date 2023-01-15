import React from "react";
import './BioCard.css'

const BioCard = ({bio}) => {
  const {title, text, img} = bio
  console.log(bio)
  return (
    <div className='bio-card'>
    <img className="bio-img" src={img.src} alt={img.alt} />
    <div className="bio-content">
      <h5>{title}</h5>
      {text.map((paragraph, i) => <p key={i} >{paragraph}</p>)}
      <ResumeButton/>
    </div>  
  </div>
  )
}

export default BioCard

const ResumeButton = () => (
  // TODO: Get this hosted somehow
  <button>Curriculum vitae/Resume</button>
)