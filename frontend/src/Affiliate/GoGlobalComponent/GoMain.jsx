import React, { useEffect, useState } from "react";
import "../CommonCSS/CommonMain.css";
import bgImage from "../../assets/aff/global1.jpg"; //  각 페이지별 배경 이미지 추가

function GoMain() {
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
          <h1 id="main-h1">지오 글로벌</h1>
          <p>
            지오 글로벌은 글로벌 시장을 대상으로 다양한 사업을 전개하는 <br />
            종합 무역 및 기술 솔루션 기업입니다.<br />
            신뢰성과 혁신을 바탕으로 최적의 비즈니스 환경을 제공합니다.
          </p>
        </div>
      </div>
    </div>
  );
}

export default GoMain;
