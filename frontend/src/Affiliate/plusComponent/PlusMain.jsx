import React from "react";
import "../CommonCSS/CommonMain.css"
import tempImg from "../../assets/mainImage.png";

function PlusMain() {
  return (
    <div className="common-main">
      <div className="common-header">
        <h1 id="main-h1">SAEHAN PLUS</h1>
      </div>
      <div className="common-description">
        <p>새한플러스는 정밀한 기술력과 철저한 품질 관리로 우수한 성능의 플라스틱 부품을 생산합니다.</p>
        <img src={tempImg} alt="Saehan Plus Company" className="common-main-image" />
      </div>
    </div>
  );
}

export default PlusMain;
