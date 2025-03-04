import React from "react";
import "../VisionCSSFile/VisionMain.css";

const VisionIntro = () => {
  return (
    <div className="vision-container fade-in">
      {/* ✅ 비전 및 이념 제목을 박스 밖으로 이동 */}
      <h2 className="section-title">비전 및 이념</h2>

      {/* ✅ 본문을 포함하는 박스 */}
      <div className="vision-intro">
        <p>1. 새한그룹은 지속 가능한 성장과 혁신을 실현하는 경영 원칙을 기반으로 합니다.</p>
        <p>2. 첨단 기술과 창의적 도전 정신으로 변화에 유연하게 대응합니다.</p>
        <p>3. 고객과의 신뢰를 최우선으로 기업 문화를 만들어갑니다.</p>
        <p>4. 최고의 품질과 서비스로 차별화된 경쟁력을 확보합니다.</p>
        <p>5. 기업과 고객, 사회가 함께 성장하는 미래를 실현해 나갑니다.</p>
      </div>
    </div>
  );
};

export default VisionIntro;
