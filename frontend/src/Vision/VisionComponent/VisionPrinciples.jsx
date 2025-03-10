import React from "react";
import "../VisionCSSFile/VisionMain.css";
import PrinciplesCircle from "./PrinciplesCircle";

const VisionPrinciples = () => {
  return (
    <div className="vision-principles">
      {/* 🔵 "우리의 원칙"을 박스 바깥으로 이동 */}
      <h2 className="section-title">우리의 원칙</h2>

      {/* 🔵 박스 스타일 추가 */}
      <div className="vision-intro">
        <p>새한그룹은 정밀한 제조 기술과 철저한 품질 관리를 바탕으로, 고객이 신뢰할 수 있는 제품을 제공합니다.</p>
        <p>우리는 생산 공정의 효율성을 높이고, 품질 경쟁력을 강화하기 위해 다양한 기술을 적극 도입하여 지속적인 발전을 이루어갑니다. </p>
      </div>

      <div className="principles-container">
        {/* 🔵 중앙 원 */}
        <PrinciplesCircle />
      </div>
    </div>
  );
};

export default VisionPrinciples;
