import React, { useEffect, useState } from "react";
import GlobalMain from "./GlobalMain";
import GlobalProduct from "./GlobalProduct";

function SaehanGlobal() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // 페이지가 로드되면 자동으로 fade-in 효과 적용
    setTimeout(() => setFadeIn(true), 100);
  }, []);

  return (
    <div>
      <GlobalMain />

      {/* 🔹 <hr> 태그 제거 */}

      <GlobalProduct />
    </div>
  );
}

export default SaehanGlobal;
