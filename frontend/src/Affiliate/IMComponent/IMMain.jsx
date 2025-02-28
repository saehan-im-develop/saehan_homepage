import React from "react";
import "../CommonCSS/CommonMain.css"
import tempImg from "../../assets/mainImage.png";

function IMMain() {
  return (
    <div className="common-main">
      <div className="common-header">
        <h1 id="main-h1">SAEHAN IM</h1>
      </div>
      <div className="common-description">
        <p>
          새한아이엠은 혁신적인 소프트웨어 및 IT 솔루션을 제공합니다.<br />
          최신 기술과 최적화된 개발 프로세스를 바탕으로<br />
          고객이 필요로 하는 최상의 품질과 성능을 구현합니다.
        </p>
        <img src={tempImg} alt="Saehan IM Company" className="common-main-image" />
      </div>
    </div>
  );
}

export default IMMain;
