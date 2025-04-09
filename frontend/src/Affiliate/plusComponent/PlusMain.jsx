import React, { useEffect, useState } from "react";
import "../Common/CommonMain.css";
import bg1 from "@/assets/Areal/plus1.jpg";
import bg2 from "@/assets/Areal/plus/back1.png";
import bg3 from "@/assets/Areal/plus/back2.png";

const bgImages = [bg1, bg2, bg3];
const textSet = [
  {
    title: "SAEHAN PLUS",
    description: `(유)새한플러스는 독일제 엥겔 ENGEL 설비를 기반으로\n정밀한 사출 기술을 바탕으로 글로벌 가전 및 자동차 부품을 생산하는\n전문 제조 기업입니다.`,
  },
  {
    title: "정밀 사출 솔루션",
    description: `최신 사출 기술과 품질 혁신으로\n김치냉장고·세탁기·자동차 부품을\n세계 최고 수준으로 공급합니다.`,
  },
  {
    title: "지속 가능한 제조 혁신",
    description: `친환경 생산 설비와 스마트 품질관리 시스템을 바탕으로\n지속 가능한 미래 제조 산업을 선도합니다.\n신뢰, 기술, 그리고 책임을 함께 실현합니다.`,
  },
];

function PlusMain() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bgImages.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="plus-main-container">
      {/* ✅ 배경 이미지 페이드 전환 */}
      <div className="plus-bg-fade-wrapper">
        {bgImages.map((img, i) => (
          <div
            key={i}
            className={`plus-bg-fade ${i === currentIndex ? "active" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>

      {/* ✅ 텍스트 페이드 전환 */}
      <div className="common-main" style={{ backgroundImage: "none" }}>
        <div className="common-overlay" />
        <div className="plus-text-layer-container">
          {textSet.map((text, idx) => (
            <div
              key={idx}
              className={`plus-text-layer ${idx === currentIndex ? "active" : ""}`}
            >
              <h1>{text.title}</h1>
              <p>
                {text.description.split("\n").map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PlusMain;
