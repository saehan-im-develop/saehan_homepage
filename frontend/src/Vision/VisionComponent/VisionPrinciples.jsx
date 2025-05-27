import React from "react";
import "../VisionCSSFile/VisionMain.css";
import PrinciplesCircle from "./PrinciplesCircle";

const VisionPrinciples = () => {
  return (
    <section className="vision-main-principles">
      {/* 제목 */}
      <h2 className="vision-main-section-title">우리의 원칙</h2>

      {/* 설명 박스 */}
      <div className="vision-main-intro">
        <p>
          새한그룹은 정밀한 제조 기술과 철저한 품질 관리를 바탕으로, 고객이 신뢰할 수 있는 제품을 제공합니다.
        </p>
        <p>
          우리는 생산 공정의 효율성을 높이고, 품질 경쟁력을 강화하기 위해 다양한 기술을 적극 도입하여 지속적인 발전을 이루어갑니다.
        </p>
      </div>

      {/* 원형 원칙 영역 */}
      <div className="vision-main-principles-container">
        <PrinciplesCircle />
      </div>
    </section>
  );
};

export default VisionPrinciples;
