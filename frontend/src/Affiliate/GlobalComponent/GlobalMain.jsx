import React from "react";
import "../CommonCSS/CommonMain.css"
import tempImg from "../../assets/mainImage.png"

function GlobalMain() {
  return (
    <div className="common-main">
      <div className="common-header">
        <h1>SAEHAN GLOBAL</h1>
      </div>
      <div className="common-description">
        <p>
          새한글로벌은 글로벌 시장을 대상으로 다양한 사업을 전개하는 종합 무역 및 기술 솔루션 기업입니다.<br />
          신뢰성과 혁신을 바탕으로 최적의 비즈니스 환경을 제공합니다.
        </p>
        <img src={tempImg} alt="Saehan Global Company" className="common-main-image" />
      </div>
    </div>
  );
}

export default GlobalMain;
