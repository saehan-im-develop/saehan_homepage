// src/Business/Solutions/SolutionsMain.jsx
import React from 'react';
import './Solutions.css';
import StepComponent from './StepComponent';
import temp from "../../assets/temp_logo.png"

const stepsData = [
  {
    title: 'STEP 1: 맞춤형 컨설팅 & 설계',
    image: temp,
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
    image: temp,
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
    image: temp,
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
  return (
    <div className="solutions-main">
      <h2>고객 맞춤형 솔루션</h2>

      <div className="solutions-intro">
        {/* <div className="circle">새한</div>
        <div className="circle">고객</div>
        <div className="circle">컨설팅</div> */}
      </div>

      {stepsData.map((step, index) => (
        <StepComponent 
          key={index}
          title={step.title}
          image={step.image}
          points={step.points}
        />
      ))}

      <div className="business-contact">
        <h3>비즈니스 문의</h3>
        <p>E-MAIL : bwm6659@naver.com</p>
        <p>TEL : 010-9995-3841</p>
        <p>FAX : 112-4840-4547</p>
      </div>
    </div>
  );
};

export default SolutionsMain;
