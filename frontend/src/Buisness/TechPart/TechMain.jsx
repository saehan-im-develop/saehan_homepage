import React, { useEffect, useRef, useState } from "react";
import "./TechMain.css";
// import tech1 from '@/assets/tech/tech1.png';
// import tech2 from '@/assets/tech/tech2.png';
// import tech3 from '@/assets/tech/tech3.png';
// import tech4 from '@/assets/tech/tech4.png';

// const techSections = [
//   {
//     title: '핵심 기술 (CORE TECHNOLOGIES)',
//     description: '고정밀 금형 설계 및 제작 - CAD/CAM 시스템 활용한 정밀 금형 설계',
//     points: [
//       '정밀 가공 시스템 - 자동화 공정 & 최적화된 품질 관리',
//       '신소재 개발 지원 - 탄소 복합재 및 친환경 합성 시스템 개발'
//     ],
//     image: tech1,
//   },
//   {
//     title: '연구개발 & 혁신 (R&D & Innovation)',
//     description: '첨단 기술 연구와 응용 - 신기술 개발 및 시뮬레이션 테스트 진행',
//     points: [
//       '3D 몰딩 및 하이브리드 가공 - 제품 개발 최적화',
//       'AI·IoT 기반 스마트 팩토리 - 공정 최적화 및 실시간 데이터 분석',
//       '고객 맞춤형 R&D 서비스 - 기업별 맞춤형 제품 개발 지원'
//     ],
//     image: tech2,
//   },
//   {
//     title: '스마트 제조 시스템 (Smart Manufacturing)',
//     description: '새한그룹은 스마트 팩토리를 도입하여 생산성을 30% 향상시키고...',
//     points: [
//       '자동차 로봇 & AI 기반 생산 공정 - 효율성 및 품질 안정성 강화',
//       'IoT 센서 기반 실시간 모니터링 - 불량률 최소화 및 생산 최적화',
//       '에너지 절감형 제조 공정 도입 - 친환경 설계 및 원료 비용 절감'
//     ],
//     image: tech3,
//   },
//   {
//     title: '지속 가능한 혁신 (Sustainable Innovation)',
//     description: '새한그룹은 친환경 소재 개발 및 에너지 절감형 제조 공정을 통해...',
//     points: [
//       '친환경 플라스틱 소재 개발 - 재활용 가능 & 생분해성 소재 적용',
//       '에너지 효율적 공정 설계 - 제조 공정 전력 소모 최소화 및 탄소 배출 저감',
//       'ISO 14001 친환경 인증 획득 - 글로벌 ESG 혁신'
//     ],
//     image: tech4,
//   },
// ];

const TechMain = () => {
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
      {/* 🔹 상단 배경 헤더 추가 */}
      <div className="tech-header">
        <h2>기술 & 혁신</h2>
      </div>

      <div ref={ref} className={`tech-innovation ${isVisible ? "fade-in" : ""}`}>
        <p className="tech-intro">
          새한그룹은 최첨단 CNC 가공 및 EDM 기술을 기반으로 초정밀 금형을 제작하며,
          자동화된 사출 성형 공정을 통해 고객 맞춤형 고품질 부품을 제공합니다.
        </p>

        {techSections.map((section, index) => (
          <div key={index} className={`tech-section ${isVisible ? "fade-in" : ""}`}>
            <img src={section.image} alt={section.title} className="tech-image" />
            <div className="tech-content">
              <h3>{section.title}</h3>
              <p>{section.description}</p>
              <ul>
                {section.points.map((point, i) => (
                  <li key={i}>✔ {point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TechMain;
