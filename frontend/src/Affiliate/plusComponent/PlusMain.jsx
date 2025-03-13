import React, { useEffect, useState } from "react";
import "../CommonCSS/CommonMain.css";
import bgImage from "@/assets/Areal/plusback.jpg"; // ✅ Plus 페이지 배경

function PlusMain() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);
  }, []);

  return (
    <div
      className="common-main"
      style={{ backgroundImage: `url(${bgImage})` }} // ✅ 개별 배경 이미지 적용
    >
      <div className="common-overlay"></div> {/* ✅ 배경 위 오버레이 추가 */}
      <div className={`common-description ${isLoaded ? "show" : ""}`}>
        <div className={`common-text ${isLoaded ? "show" : ""}`}>
          <h1 id="main-h1">SAEHAN PLUS</h1>
          <p>
            (유)새한플러스는 최고의 품질과 정밀한 사출 성형 기술을 바탕으로 <br />
            김치냉장고, 세탁기, 냉장고 선반 및 산업용 부품을 생산하는 <br />
            글로벌 가전 부품 전문 제조 기업입니다.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PlusMain;
