import React from "react";
import "../VisionCSSFile/VisionMain.css"

const PrincipleLabel = ({ position, text }) => {
  return <div className={`principle-item ${position}`}>{text}</div>;
};

export default PrincipleLabel;
