// src/Business/BizComponent/BusinessSection.jsx
import React from 'react';
import { useState } from "react";
import '../BuizCssFile/BusinessSection.css';
import biz1 from '../../assets/biz1.png';
import biz2 from '../../assets/biz2.png';
import biz3 from '../../assets/biz3.png';
import biz4 from '../../assets/biz4.png';
import biz5 from '../../assets/biz5.png';
import biz6 from '../../assets/biz6.png';

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
  {
    title: '품질 관리 및 인증 (Quality Control & Certification)',
    description: 'ISO 및 국제 인증 (정밀 검사, 공정 개선)',
    image: biz5,
  },
  {
    title: '글로벌 비즈니스 및 고객 지원 (Customer Support)',
    description: '해외 파트너십 및 고객 지원 서비스',
    image: biz6,
  },
];

const BusinessSection = () => {
  return (
    <div className="business-section">
      <h2>새한그룹 사업 영역</h2>
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
  );
};

export default BusinessSection;
