import React from "react";
import "./VisionMain.css";

const VisionPrinciples = () => {
  return (
    <div className="vision-principles">
      <h2 className="section-title">우리의 원칙</h2>
      <p>
        새한그룹의 핵심 경영 철학이 담긴 방향성이자, 모든 의사 결정과 기업 운영의 기준이 되는 원칙입니다.
      </p>
      <div className="principles-circle">
        <div className="center-circle">
          <p>품질</p>
          <p>혁신</p>
          <p>신뢰</p>
          <p>속도</p>
        </div>
        <div className="principle-item top">지속적인 기술 개발과 연구</div>
        <div className="principle-item right">신속하고 효율적인 생산 및 대응</div>
        <div className="principle-item bottom">고객 및 협력사와의 신뢰 구축</div>
        <div className="principle-item left">최상의 제품과 서비스 제공</div>
      </div>
    </div>
  );
};

export default VisionPrinciples;
