import React from "react";
import "../plusCssFile/PlusMain.css";

function PlusMain() {
  return (
    <div className="plus-main">
      <div className="plus-header">
        <img src="../assets/temp_logo.png" alt="Saehan Plus Logo" className="plus-logo" />
        <h1>SAEHAN PLUS</h1>
      </div>
      <div className="plus-description">
        <p>새한플러스는 정밀한 기술력과 철저한 품질 관리로 우수한 성능의 플라스틱 부품을 생산합니다.</p>
        <img src="../assets/PlusMainImage.png" alt="Saehan Plus Company" className="plus-main-image" />
      </div>
    </div>
  );
}

export default PlusMain;
