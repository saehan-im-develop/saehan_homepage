import React, { useEffect, useState } from "react";
import "../CommonCSS/CommonMain.css";
import bgImage from "../../assets/back1.jpg"; //  하이테크 페이지 배경

function HightechMain() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);
  }, []);

  return (
    <div
      className="common-main"
      style={{ backgroundImage: `url(${bgImage})` }} //  개별 배경 이미지 적용
    >

      <div className="common-overlay"></div> {/*  배경 위 오버레이 추가 */}
      
      <div className={`common-description ${isLoaded ? "show" : ""}`}>
        <div className={`common-text ${isLoaded ? "show" : ""}`}>
          <h1 id="main-h1">SAEHAN HIGHTECH</h1>
          <p>
            새한하이테크는 반도체 기술의 기준을 만들어갑니다.<br />
            미래 공정과 최적화된 생산 시스템을 통해 최고의 품질과 성능을 제공합니다.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HightechMain;
