import React, { useEffect, useState } from "react";
import "../Common/CommonMain.css";

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
      style={{ backgroundImage: `url("/assets/aff/ai6.webp")` }} // ✅ 문자열 경로 직접 지정
    >
      <div className="common-overlay"></div> {/* ✅ 배경 위 오버레이 추가 */}
      <div className={`common-description ${isLoaded ? "show" : ""}`}>
        <div className={`common-text ${isLoaded ? "show" : ""}`}>
          <h1 id="main-h1">SAEHAN IM</h1>
          <p>
            (주)새한아이엠은 AI 및 LLM(대규모 언어 모델) 기반 IT 기업으로, <br />
            지식의 대중화를 위해 기업을 위한 솔루션을 제공합니다.
          </p>
        </div>
      </div>
    </div>
  );
}

export default IMMain;
