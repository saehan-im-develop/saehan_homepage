import React, { useEffect, useState } from "react";
import IMMain from "./IMMain";
import IMProduct from "./IMProduct";

function SaehanIM() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    //  페이지 로드 후 0.1초 뒤 페이드인 효과 실행
    setTimeout(() => setFadeIn(true), 100);
  }, []);

  return (
    <div>
      <IMMain />

      {/* 🔹 <hr> 태그 제거 */}

      <IMProduct />
    </div>
  );
}

export default SaehanIM;
