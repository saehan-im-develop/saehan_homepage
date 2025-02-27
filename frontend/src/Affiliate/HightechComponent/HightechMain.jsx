import React from "react";
import "../CommonCSS/CommonMain.css"

function HightechMain() {
  return (
    <div className="common-main">
      <div className="common-header">
        <img src="/assets/temp_logo.png" alt="Saehan Hightech Logo" className="common-logo" />
        <h1 id="main-h1">SAEHAN HIGHTECH</h1>
      </div>
      <div className="common-description">
        <p>새한하이테크는 반도체 기술의 기준을 만들어갑니다.<br/> 
        미래 공정과 최적화된 생산 시스템을 통해 최고의 품질과 성능을 제공합니다.</p>
        <img src="/assets/mainImage.png" alt="Saehan Hightech Company" className="common-main-image" />
      </div>
    </div>
  );
}

export default HightechMain;
