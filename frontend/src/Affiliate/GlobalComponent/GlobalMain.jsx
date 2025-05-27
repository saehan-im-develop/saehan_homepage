import React, { useEffect, useState } from "react";
import "../Common/CommonMain.css";
// import bgImage from "@/assets/aff/global1.webp"; // 제거됨

function GlobalMain() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);
  }, []);

  return (
    <div
      className="common-main"
      style={{ backgroundImage: `url("/assets/aff/global1.webp")` }} // 경로 직접 지정
    >
      <div className="common-overlay"></div> {/* 배경 위 오버레이 추가 */}
      <div className={`common-description ${isLoaded ? "show" : ""}`}>
        <div className={`common-text ${isLoaded ? "show" : ""}`}>
          <h1 id="main-h1">SM 케미칼</h1>
          <p>
            (유)SM케미칼은 <strong>고객 감동과 품질 혁신</strong>을 최우선으로 하는 <br />
            종합 제조 및 기술 솔루션 기업입니다.<br />
            <br />
            저희는 고객과 함께 성장하는 파트너로서<br />
            <strong>혁신적인 기술과 최상의 품질</strong>을 제공합니다.
          </p>
        </div>
      </div>
    </div>
  );
}

export default GlobalMain;
