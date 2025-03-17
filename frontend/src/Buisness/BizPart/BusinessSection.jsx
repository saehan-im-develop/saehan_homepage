import React, { useEffect, useRef, useState } from "react";
import './BusinessSection.css';
import biz2 from '@/assets/biz/biz2.png';
import biz3 from '@/assets/biz/biz7.jpg';
import biz4 from '@/assets/biz/biz8.jpg';

const businessAreas = [
  {
    title: '플라스틱 사출 성형 (Plastic Injection Molding)',
    description: '플라스틱 제품 사출 성형 (자동차 부품, 백색가전 부품품 등)',
    image: biz2,
  },
  {
    title: '제품 개발 및 연구 (Product Development & R&D)',
    description: '제품 개발 (정밀 가공, 신소재 연구 등)',
    image: biz3,
  },
  {
    "title": "AI 및 LLM 연구 개발 (AI & LLM Research & Development)",
    "description": "인공지능 및 대규모 언어 모델(LLM) 연구 개발, 기업 맞춤형 AI 솔루션 제공",
    "image": biz4
}


];

const BusinessSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <>
      {/* 🔹 상단 배경 추가 */}
      <div className="business-header">
        <h2>새한그룹 사업 영역</h2>
      </div>

      {/* 🔹 기존 섹션 */}
      <div ref={ref} className={`business-section ${isVisible ? "fade-in" : ""}`}>
        <div className="business-grid">
          {businessAreas.map((area, index) => (
            <div key={index} className="business-card">
              <img src={area.image} alt={area.title} />
              <h3>{area.title}</h3>
              <p>{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BusinessSection;
