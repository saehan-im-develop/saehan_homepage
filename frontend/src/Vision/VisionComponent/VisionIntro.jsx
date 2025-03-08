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
            "새한그룹은 지속 가능한 성장과 혁신을 실현하는 경영 원칙을 기반으로 합니다.",
            "첨단 기술과 창의적 도전 정신으로 변화에 유연하게 대응합니다.",
            "고객과의 신뢰를 최우선으로 기업 문화를 만들어갑니다.",
            "최고의 품질과 서비스로 차별화된 경쟁력을 확보합니다.",
            "기업과 고객, 사회가 함께 성장하는 미래를 실현해 나갑니다."
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
