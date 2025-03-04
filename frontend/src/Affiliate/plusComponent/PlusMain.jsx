import React, { useEffect, useState } from "react";
import "../CommonCSS/CommonMain.css";
import tempImg from "../../assets/mainImage.png";

function PlusMain() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    //  페이지가 로드된 후 0.1초 뒤 페이드인 효과 실행
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);
  }, []);

  return (
    <div className="common-main">
      <div className={`common-header ${isLoaded ? "show" : ""}`}>
          <h1 id="main-h1">SAEHAN PLUS</h1>
      </div>
      {/*  페이드인 효과 적용 */}
      <div className={`common-description ${isLoaded ? "show" : ""}`}>
        <p>새한플러스는 정밀한 기술력과 철저한 품질 관리로 우수한 성능의 플라스틱 부품을 생산합니다.</p>
        <img src={tempImg} alt="Saehan Plus Company" className="common-main-image" />
      </div>
    </div>
  );
}

export default PlusMain;
