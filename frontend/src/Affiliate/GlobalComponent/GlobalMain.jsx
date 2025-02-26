import React from "react";
import "../GlobalCssFile/GlobalMain.css";

function GlobalMain() {
  return (
    <div className="global-main">
      <div className="global-header">
        <img src="/assets/temp_logo.png" alt="Saehan Global Logo" className="global-logo" />
        <h1>SAEHAN GLOBAL</h1>
      </div>
      <div className="global-description">
        <p>
          새한글로벌은 글로벌 시장을 대상으로 다양한 사업을 전개하는 종합 무역 및 기술 솔루션 기업입니다.<br />
          신뢰성과 혁신을 바탕으로 최적의 비즈니스 환경을 제공합니다.
        </p>
        <img src="/assets/mainImage.png" alt="Saehan Global Company" className="global-main-image" />
      </div>
    </div>
  );
}

export default GlobalMain;
