import React from "react";
import ContentContainer from "./ContentContainer";
import './NavBar.css'
import Spacer from "./Spacer";

const NavBar = () => {
  // TODO: This should be a nav element
  return (
    <div className="nav-bar">
      <ContentContainer>
        <Spacer>
          <span className="text-light nav-text">Daniel Power</span>
          <span className="text-light nav-text">Links, etc.</span>
        </Spacer>
      </ContentContainer>
    </div>
  )
}

export default NavBar