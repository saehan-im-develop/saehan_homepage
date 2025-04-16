import React from "react";
import "../VisionCSSFile/VisionMain.css";
import logo from "../../assets/upimage.jpg";  // ✅ 상단 배경 이미지

const VisionIntro = () => {
  return (
    <div>
      {/* ✅ 상단 배경 이미지 */}
      <div className="vision-header-bg">
        <img src={logo} alt="배경 이미지" />
      </div>

      {/* ✅ 비전 및 이념 섹션 */}
      <div className="vision-container fade-in">
        <h2 className="section-title">비전 및 이념</h2>
        <div className="vision-list">
          {[
            "새한그룹은 지속 가능한 성장을 위해 제조 혁신과 품질 경영을 최우선으로 합니다.",
            "변화하는 산업 환경에 맞춰 유연한 사고와 개선 노력을 지속합니다.",
            "고객과의 신뢰를 바탕으로, 차별화된 제품과 서비스를 제공합니다.",
            "기술력과 노하우를 바탕으로 글로벌 시장에서도 인정받는 기업이 되겠습니다.",
            "기업, 고객, 그리고 사회가 함께 성장할 수 있는 미래를 만들어 갑니다."
          ].map((text, index) => (
            <div className="vision-box" key={index}>
              <div className="vision-box-number">{index + 1}</div>
              {text}
            </div>
          ))}
        </div> 
      </div>
    </div>
  );
};

export default VisionIntro;
