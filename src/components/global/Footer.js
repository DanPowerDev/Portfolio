import React from "react";
import ContentContainer from "./ContentContainer";
import './Footer.css'

const Footer = () => (
  <div className="footer">
    <ContentContainer>
      <p className="text-light">© Daniel Power, 2023</p>
      {/* TODO: Find proper legal text */}
      <p className="text-light">All images used belong to their respective owners</p>
      </ContentContainer>
  </div>
)

export default Footer