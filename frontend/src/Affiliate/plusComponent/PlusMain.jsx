import React, { useEffect, useState } from "react";
import "../Common/CommonMain.css";
import bg1 from "@/assets/Areal/plus1.jpg";
import bg2 from "@/assets/Areal/plus2.jpg";

const bgImages = [bg1, bg2];
const textSet = [
  {
    title: "SAEHAN PLUS",
    description: `(유)새한플러스는 독일제 엥겔 ENGEL 설비를 기반으로
정밀한 사출 기술을 바탕으로 글로벌 가전 및 자동차 부품을 생산하는
전문 제조 기업입니다.`,
  },
  {
    title: "정밀 사출 솔루션",
    description: `최신 사출 기술과 품질 혁신으로
김치냉장고·세탁기·자동차 부품을
세계 최고 수준으로 공급합니다.`,
  },
];

function PlusMain() {
  const [currentIndex, setCurrentIndex] = useState(0);       // 배경 이미지 index
  const [visibleIndex, setVisibleIndex] = useState(0);       // 텍스트 index
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false); // 🔽 텍스트 페이드 아웃

      setTimeout(() => {
        const next = (currentIndex + 1) % bgImages.length;
        setCurrentIndex(next);     // 이미지 먼저 전환
        setVisibleIndex(next);     // 텍스트도 함께 전환
        setFadeIn(true);           // 🔼 텍스트 페이드 인
      }, 600); // 0.6초 후 동기화 전환
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

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

      {/* ✅ 텍스트 영역 */}
      <div className="common-main" style={{ backgroundImage: "none" }}>
        <div className="common-overlay" />
        <div className={`plus-description ${fadeIn ? "show" : "hide"}`}>
          <div className={`plus-text ${fadeIn ? "show" : "hide"}`}>
            <h1 id="main-h1">{textSet[visibleIndex].title}</h1>
            <p>
              {textSet[visibleIndex].description.split("\n").map((line, idx) => (
                <React.Fragment key={idx}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlusMain;
