import React, { useEffect, useState } from "react";
import GlobalMain from "./GlobalMain";
import GlobalProduct from "./GlobalProduct";
import GlobalEquip from "./GlobalEquip";

function SaehanGlobal() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // 페이지가 로드되면 자동으로 fade-in 효과 적용
    setTimeout(() => setFadeIn(true), 100);
  }, []);

  return (
    <div>
      <GlobalMain />
      <GlobalEquip />
      <GlobalProduct />
    </div>
  );
}

export default SaehanGlobal;
