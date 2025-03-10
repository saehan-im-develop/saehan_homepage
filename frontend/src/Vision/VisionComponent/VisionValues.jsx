import React from "react";
import "../VisionCSSFile/VisionValues.css";

const values = [
  {
    title: "정밀한 제조 기술과 품질 관리",
    description:
      "새한그룹은 다년간 축적된 제조 기술과 체계적인 품질 관리 시스템을 바탕으로, 고객이 신뢰할 수 있는 고품질 제품을 제공합니다.",
  },
  {
    title: "생산성 향상을 위한 혁신",
    description:
      "효율적인 공정 개선과 자동화 시스템을 도입하여, 더 높은 생산성과 품질 안정성을 동시에 확보합니다.",
  },
  {
    title: "미래를 대비한 기술 발전",
    description:
      "제조업의 경쟁력을 높이기 위해, 최신 IT기술을 도입하여 보다 체계적인 데이터 관리와 품질 개선을 추진하고 있습니다.",
  },
];

const VisionValues = () => {
  return (
    <div className="vision-values-container">
      <div className="vision-values">
        {values.map((value, index) => (
          <div key={index} className="value-box">
            <h3>
              <span className="icon">✅</span>
              {value.title}
            </h3>
            <p>{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VisionValues;
