import React, { useEffect, useState } from "react";
import GlobalMain from "./GlobalMain";
import GlobalProduct from "./GlobalProduct";

function SaehanGlobal() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // ✅ 페이지가 로드되면 자동으로 fade-in 클래스 추가
    setTimeout(() => setFadeIn(true), 100);
  }, []);

  return (
    <div>
      <GlobalMain />
      
      {/* ✅ 페이드인 효과 적용된 hr */}
      <hr className={fadeIn ? "fade-in" : ""} />

      <GlobalProduct />
    </div>
  );
}

export default SaehanGlobal;
