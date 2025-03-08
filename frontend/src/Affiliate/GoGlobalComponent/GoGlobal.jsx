import React, { useEffect, useState } from "react";
import GlobalMain from "./GoMain";
import GlobalProduct from "./GoProduct";

function GoGlobal() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // 페이지가 로드되면 자동으로 fade-in 효과 적용
    setTimeout(() => setFadeIn(true), 100);
  }, []);

  return (
    <div>
      <GoMain />

      {/* 🔹 <hr> 태그 제거 */}

      <GoProduct />
    </div>
  );
}

export default GoGlobal;
