import React from "react";
import "../VisionCSSFiile/VisionMain.css"

const PrincipleLabel = ({ position, text }) => {
  return <div className={`principle-item ${position}`}>{text}</div>;
};

export default PrincipleLabel;
