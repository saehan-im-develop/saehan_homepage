import React, { useEffect, useState } from "react";
import "../CommonCSS/CommonMain.css";
import temp from "../../assets/mainImage.png";

function HightechMain() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // 페이지 로드 후 0.1초 뒤 페이드인 효과 실행
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);
  }, []);

  return (
    <div className="common-main">
      <div className={`common-header ${isLoaded ? "show" : ""}`}>
        <h1 id="main-h1">SAEHAN HIGHTECH</h1>
      </div>
      {/*  텍스트와 이미지가 나란히 배치되도록 조정 */}
      <div className={`common-description ${isLoaded ? "show" : ""}`}>
        <div className="common-text">
          <p>
            새한하이테크는 반도체 기술의 기준을 만들어갑니다.<br />
            미래 공정과 최적화된 생산 시스템을 통해 최고의 품질과 성능을 제공합니다.
          </p>
        </div>
        <div className="common-image-container">
          <img src={temp} alt="Saehan Hightech Company" className="common-main-image" />
        </div>
      </div>
    </div>
  );
}

export default HightechMain;
