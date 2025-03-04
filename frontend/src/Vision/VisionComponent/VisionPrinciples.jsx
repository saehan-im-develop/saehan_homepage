import React from "react";
import "../VisionCSSFiile/VisionMain.css";
import PrinciplesCircle from "./PrinciplesCircle";

const VisionPrinciples = () => {
  return (
    <div className="vision-principles">
      {/* 🔵 "우리의 원칙"을 박스 바깥으로 이동 */}
      <h2 className="section-title">우리의 원칙</h2>

      {/* 🔵 박스 스타일 추가 */}
      <div className="vision-intro">
        <p>새한그룹의 핵심 경영 철학이 담긴 방향성이자, 모든 의사 결정과 기업 운영의 기준이 되는 원칙입니다.</p>
        <p>우리는 기술 혁신과 품질 우선주의를 바탕으로 고객과 산업의 발전에 기여하며, 지속 가능한 성장을 이루어갑니다.</p>
      </div>

      <div className="principles-container">
        {/* 🔵 중앙 원 */}
        <PrinciplesCircle />
      </div>
    </div>
  );
};

export default VisionPrinciples;
