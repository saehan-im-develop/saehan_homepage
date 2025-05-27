// VisionIntro.jsx
import React from "react";
import "../VisionCSSFile/VisionIntro.css"; // 새로 추가할 CSS (권장: VisionIntro.css)
  // 상단 배경 이미지
 // 대체할 이미지

const VisionIntro = () => {
  return (
    <div>
      {/* ✅ 상단 배경 이미지는 기존대로 유지 */}
      <div className="vision-main-header-bg">
        <img src="/assets/upimage.jpg" alt="배경 이미지" />
      </div>

      {/* ✅ "비전 및 이념" 텍스트 영역은 이미지로 교체 */}
      <div className="vision-main-image-container">
        <img
          src="/assets/vision_Image/vision1.png"
          alt="비전 및 이념"
          className="vision-main-content-image"
        />
      </div>
    </div>
  );
};

export default VisionIntro;



{/* ✅ 비전 및 이념 섹션 */}
      {/* <div className="vision-main-container vision-main-fade-in">
        <h2 className="vision-main-section-title">비전 및 이념</h2>
        <div className="vision-main-list">
          {[
            "새한그룹은 지속 가능한 성장을 위해 제조 혁신과 품질 경영을 최우선으로 합니다.",
            "변화하는 산업 환경에 맞춰 유연한 사고와 개선 노력을 지속합니다.",
            "고객과의 신뢰를 바탕으로, 차별화된 제품과 서비스를 제공합니다.",
            "기술력과 노하우를 바탕으로 글로벌 시장에서도 인정받는 기업이 되겠습니다.",
            "기업, 고객, 그리고 사회가 함께 성장할 수 있는 미래를 만들어 갑니다."
          ].map((text, index) => (
            <div className="vision-main-box" key={index}>
              <div className="vision-main-box-number">{index + 1}</div>
              <span>{text}</span>
            </div>
          ))}
        </div> 
      </div> */}