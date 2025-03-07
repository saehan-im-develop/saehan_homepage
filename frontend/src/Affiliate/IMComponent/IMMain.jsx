import React, { useEffect, useState } from "react";
import "../CommonCSS/CommonMain.css";
import bgImage from "../../assets/aff/aff_im.jpg"; // ✅ IM 페이지 배경

function IMMain() {
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
          <h1 id="main-h1">SAEHAN IM</h1>
          <p>
            새한아이엠은 혁신적인 소프트웨어 및 IT 솔루션을 제공합니다.<br />
            최신 기술과 최적화된 개발 프로세스를 바탕으로<br />
            고객이 필요로 하는 최상의 품질과 성능을 구현합니다.
          </p>
        </div>
      </div>
    </div>
  );
}

export default IMMain;
