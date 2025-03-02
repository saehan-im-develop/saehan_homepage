import React, { useEffect, useState } from "react";
import HightechMain from "./HightechMain";
import HightechProduct from "./HightechProduct";

function SaehanHightech() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // ✅ 페이지 로드 후 0.1초 뒤 페이드인 효과 실행
    setTimeout(() => setFadeIn(true), 100);
  }, []);

  return (
    <div>
      <HightechMain />

      {/* ✅ 페이드인 효과 적용된 hr */}
      <hr className={fadeIn ? "fade-in" : ""} />

      <HightechProduct />
    </div>
  );
}

export default SaehanHightech;
