import React from "react";
import "../VisionCSSFile/VisionValues.css"

const values = [
  {
    title: "차별화를 통한 경쟁우위 확보",
    description:
      "새한그룹은 고품질 플라스틱 금형 및 사출 성형 기술을 바탕으로 차별화된 경쟁력을 확보합니다. 지속적인 연구개발과 혁신을 통해 시장을 선도해 나갑니다.",
  },
  {
    title: "최대가치 구현",
    description:
      "최대가치를 실현한다는 것은 단순한 제품 생산을 넘어, 고객이 기대하는 이상의 품질과 성능을 제공하는 것입니다.",
  },
  {
    title: "우리의 사명",
    description:
      "새한그룹은 최첨단 플라스틱 금형 제조 기술을 기반으로 차별화된 경쟁력을 확보하고, 이를 통해 고객과 신뢰를 구축하여 글로벌 기업으로 나아갑니다.",
  },
];

const VisionValues = () => {
  return (
    <div className="vision-values">
      {values.map((value, index) => (
        <div key={index} className="value-box">
          <h3>{value.title}</h3>
          <p>{value.description}</p>
        </div>
      ))}
    </div>
  );
};

export default VisionValues;
