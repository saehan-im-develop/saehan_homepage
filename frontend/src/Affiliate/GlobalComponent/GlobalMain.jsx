import React, { useEffect, useState } from "react";
import "../CommonCSS/CommonMain.css";
import tempImg from "../../assets/mainImage.png";

function GlobalMain() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // 페이지가 로드된 후 0.1초 뒤 페이드인 효과 실행
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);
  }, []);

  return (
    <div className="common-main">
      {/* ✅ 제목을 내부 컨테이너 안으로 이동 */}
      <div className={`common-description ${isLoaded ? "show" : ""}`}>
        <div className="common-text">
          <h1 id="main-h1">SAEHAN GLOBAL</h1> {/* ✅ 제목을 왼쪽에 위치 */}
          <p>
            새한글로벌은 글로벌 시장을 대상으로 다양한 사업을 전개하는 <br />
            종합 무역 및 기술 솔루션 기업입니다.<br />
            신뢰성과 혁신을 바탕으로 최적의 비즈니스 환경을 제공합니다.
          </p>
        </div>
        <img src={tempImg} alt="Saehan Global Company" className="common-main-image" />
      </div>
    </div>
  );
}

export default GlobalMain;
