import React from "react";
import VisionIntro from "./VisionIntro";
import VisionValues from "./VisionValues";
import VisionPrinciples from "./VisionPrinciples";
import "../VisionCSSFiile/VisionMain.css"

const VisionMain = () => {
  return (
    <div className="vision-container">
      <VisionIntro />
      <VisionValues />
      <VisionPrinciples />
    </div>
  );
};

export default VisionMain;
