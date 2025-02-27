import React from "react";
import "./VisionMain.css";

const PrincipleLabel = ({ position, text }) => {
  return <div className={`principle-item ${position}`}>{text}</div>;
};

export default PrincipleLabel;
