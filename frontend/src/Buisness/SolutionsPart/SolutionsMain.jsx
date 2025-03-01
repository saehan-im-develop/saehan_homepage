import React, { useEffect, useRef, useState } from 'react';
import './Solutions.css';
import StepComponent from './StepComponent';
import ContactSection from "../../mainComponent/ContactSection";
import SolutionsIntro from './SolutionsIntro';
import img1 from "../../assets/solutions/sol1.png"
import img2 from "../../assets/solutions/sol2.png"
import img3 from "../../assets/solutions/sol3.png"

const stepsData = [
  {
    title: 'STEP 1: 맞춤형 컨설팅 & 설계',
    image: img1,
    points: [
      '3D 프린팅 & 빠른 시제품 제작 (Rapid Prototyping)',
      'FEA(유한 요소 해석) 기반 구조 안정성 분석',
      '고객 맞춤형 기능성 테스트 & 평가 진행',
      'CNC 가공을 활용한 정밀 시제품 제작',
      '사출 성형 테스트를 통한 공정 최적화 검증',
      '융·복합 연구를 통한 내구성 및 환경 내성 확인',
      '신소재 적용 시 기계적·화학적 안정성 평가',
      '초기 설계 검증을 통한 대량 생산 가능성 분석'
    ]
  },
  {
    title: 'STEP 2: 프로토타입 & 테스트',
    image: img2,
    points: [
      '3D 프린팅 & 빠른 시제품 제작 (Rapid Prototyping)',
      'FEA(유한 요소 해석) 기반 구조 안정성 분석',
      '고객 맞춤형 기능성 테스트 & 평가 진행',
      'CNC 가공을 활용한 정밀 시제품 제작',
      '사출 성형 테스트를 통한 공정 최적화 검증',
      '융·복합 연구를 통한 내구성 및 환경 내성 확인',
      '신소재 적용 시 기계적·화학적 안정성 평가',
      '초기 설계 검증을 통한 대량 생산 가능성 분석'
    ]
  },
  {
    title: 'STEP 3: 대량 생산 & 품질 보증',
    image: img3,
    points: [
      'AI & IoT 기반 스마트 팩토리 운영',
      '실시간 품질 검사 (SPC, AOI, CT 스캐닝 활용)',
      '지속적인 생산 효율화 및 유지보수 지원',
      '자동화 검사 시스템 도입 (X-ray 검사, 비파괴 검사 등)',
      '공정 최적화 및 데이터 분석 및 피드백 제공',
      'ISO 9001, IATF 16949 등 국제 품질 인증 시스템 도입',
      '고객 맞춤형 생산 프로세스 & 납기 최적화 전략 수립',
      '친환경 공정 적용 및 탄소배출 저감 솔루션 도입'
    ]
  }
];

const SolutionsMain = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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
    <div ref={ref} className={`solutions-main ${isVisible ? "fade-in" : ""}`}>
      <SolutionsIntro />

      {stepsData.map((step, index) => (
        <StepComponent
          key={index}
          title={step.title}
          image={step.image}
          points={step.points}
          isVisible={isVisible} // ✅ 이걸 추가해야 애니메이션 적용됨!
        />
      ))}

      <ContactSection />
    </div>
  );
};

export default SolutionsMain;
