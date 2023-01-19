import React from "react";
import ContentContainer from "./ContentContainer";
import './Footer.css'
import Spacer from "./Spacer";

const Footer = () => (
  <div className="footer">
    <ContentContainer>
      <Spacer>
        <p className="text-light fine-print">© Daniel Power, 2023</p>
        {/* TODO: Find proper legal text */}
        <p className="text-light fine-print">All images used belong to their respective owners</p>
      </Spacer>
      </ContentContainer>
  </div>
)

export default Footer