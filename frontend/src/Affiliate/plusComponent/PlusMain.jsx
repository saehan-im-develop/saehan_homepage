import React, { useEffect, useState } from "react";
import "../CommonCSS/CommonMain.css";
import bgImage from "../../assets/back2.jpg"; // ✅ Plus 페이지 배경

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
            새한플러스는 정밀한 기술력과 철저한 품질 관리로 <br />
            우수한 성능의 플라스틱 부품을 생산합니다.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PlusMain;
