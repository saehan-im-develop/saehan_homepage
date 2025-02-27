import React from "react";
import VisionIntro from "./VisionIntro";
import VisionValues from "./VisionValues";
import VisionPrinciples from "./VisionPrinciples";
import "./VisionMain.css";  // 공통 스타일

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
