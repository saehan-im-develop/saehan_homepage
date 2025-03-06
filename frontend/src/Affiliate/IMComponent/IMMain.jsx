import React, { useEffect, useState } from "react";
import "../CommonCSS/CommonMain.css";
import tempImg from "../../assets/mainImage.png";

function IMMain() {
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
          <h1 id="main-h1">SAEHAN IM</h1> {/* ✅ 제목을 왼쪽에 위치 */}
          <p>
            새한아이엠은 혁신적인 소프트웨어 및 IT 솔루션을 제공합니다.<br />
            최신 기술과 최적화된 개발 프로세스를 바탕으로<br />
            고객이 필요로 하는 최상의 품질과 성능을 구현합니다.
          </p>
        </div>
        <img src={tempImg} alt="Saehan IM Company" className="common-main-image" />
      </div>
    </div>
  );
}

export default IMMain;
