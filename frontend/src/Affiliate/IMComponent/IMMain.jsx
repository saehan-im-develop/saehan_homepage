import React from "react";
import "../IMCssFile/IMMain.css";

function IMMain() {
  return (
    <div className="im-main">
      <div className="im-header">
        <img src="/assets/temp_logo.png" alt="Saehan IM Logo" className="im-logo" />
        <h1>SAEHAN IM</h1>
      </div>
      <div className="im-description">
        <p>
          새한아이엠은 혁신적인 소프트웨어 및 IT 솔루션을 제공합니다.<br />
          최신 기술과 최적화된 개발 프로세스를 바탕으로<br />
          고객이 필요로 하는 최상의 품질과 성능을 구현합니다.
        </p>
        <img src="/assets/mainImage.png" alt="Saehan IM Company" className="im-main-image" />
      </div>
    </div>
  );
}

export default IMMain;
