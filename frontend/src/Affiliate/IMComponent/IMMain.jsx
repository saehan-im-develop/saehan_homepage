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
      style={{ backgroundImage: `url("/assets/aff/ai6.webp")` }}
    >
      <div className="common-overlay"></div>
      <div className={`common-description ${isLoaded ? "show" : ""}`}>
        <div className={`common-text ${isLoaded ? "show" : ""}`}>
          <h1 id="main-h1">SAEHAN IM</h1>
          <p>
            (주)새한아이엠은 AI와 LLM 기술을 바탕으로<br />
            다양한 IT 솔루션과 서비스를 제공합니다.
          </p>
        </div>
      </div>
    </div>
  );

}

export default IMMain;
