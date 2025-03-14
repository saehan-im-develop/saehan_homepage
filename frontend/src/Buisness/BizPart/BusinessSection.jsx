import React, { useEffect, useRef, useState } from "react";
import './BusinessSection.css';
import biz1 from '@/assets/biz/biz1.png';
import biz2 from '@/assets/biz/biz2.png';
import biz3 from '@/assets/biz/biz3.png';
import biz4 from '@/assets/biz/biz4.png';

const businessAreas = [
  {
    title: '금형 설계 및 제조 (Mold Design & Manufacturing)',
    description: '정밀 금형설계 & 제작 (가공, 조립, 품질 검사 등)',
    image: biz1,
  },
  {
    title: '플라스틱 사출 성형 (Plastic Injection Molding)',
    description: '플라스틱 제품 사출 성형 (자동차 부품, 전자기기 케이스 등)',
    image: biz2,
  },
  {
    title: '제품 개발 및 연구 (Product Development & R&D)',
    description: '3D 설계 & 제품 개발 (고정밀 가공, 신소재 연구 등)',
    image: biz3,
  },
  {
    title: '부품 및 조립 생산 (Component & Assembly Production)',
    description: '각종 부품 생산 및 조립 (전자, 자동차 부품 등)',
    image: biz4,
  },

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
