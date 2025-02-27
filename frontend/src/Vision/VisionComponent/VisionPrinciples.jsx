import React from "react";
import "../VisionCSSFiile/VisionMain.css"
import PrinciplesCircle from "./PrinciplesCircle";
import PrincipleLabel from "./PrincipleLabel";
import PrincipleLine from "./PrincipleLine";

const VisionPrinciples = () => {
  return (
    <div className="vision-principles">
      <h2 className="section-title">우리의 원칙</h2>
      <p>새한그룹의 핵심 경영 철학이 담긴 방향성이자, 모든 의사 결정과 기업 운영의 기준이 되는 원칙입니다.</p>
      <p>우리는 기술 혁신과 품질 우선주의를 바탕으로 고객과 산업의 발전에 기여하며, 지속 가능한 성장을 이루어갑니다.</p>

      <div className="principles-container">
        {/* 중앙 원 */}
        <PrinciplesCircle />

        {/* 텍스트 라벨 */}
        {/* <PrincipleLabel position="top-left" text="최상의 제품과 서비스 제공" />
        <PrincipleLabel position="top-right" text="지속적인 기술 개발과 연구" />
        <PrincipleLabel position="bottom-left" text="고객 및 협력사와의 신뢰 구축" />
        <PrincipleLabel position="bottom-right" text="신속하고 효율적인 생산 및 대응" /> */}

        {/* 연결 선 */}
        <PrincipleLine from="left-mid" to="top-left" />
        <PrincipleLine from="top-mid" to="top-right" />
        <PrincipleLine from="right-mid" to="bottom-left" />
        <PrincipleLine from="bottom-mid" to="bottom-right" />
      </div>
    </div>
  );
};

export default VisionPrinciples;
