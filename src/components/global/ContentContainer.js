import React from "react";
import './ContentContainer.css'

const ContentContainer = (props) => (
  <div className="content-container">{props.children}</div>
)

export default ContentContainer