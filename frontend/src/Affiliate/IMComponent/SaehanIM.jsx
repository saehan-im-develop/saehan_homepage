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

      {/*  페이드인 효과 적용된 hr */}
      <hr className={fadeIn ? "fade-in" : ""} />

      <IMProduct />
    </div>
  );
}

export default SaehanIM;
