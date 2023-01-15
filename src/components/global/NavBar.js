import React from "react";
import ContentContainer from "./ContentContainer";
import './NavBar.css'

const NavBar = () => {
  // TODO: This should be a nav element
  return (
    <div className="nav-bar">
      <ContentContainer>
        <span className="text-light">Daniel Power</span>
        <span className="text-light">Links, etc.</span>
      </ContentContainer>
    </div>
  )
}

export default NavBar