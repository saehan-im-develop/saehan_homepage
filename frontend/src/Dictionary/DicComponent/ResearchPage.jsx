import React from "react";
import "../DicCssFile/ResearchPage.css"; // 스타일 분리

const researchData = [
  {
    title: "초정밀 사출 성형 기술",
    description: "초정밀 사출 성형 기술에 대해 설명하는 부분",
    details: {
      subtitle: "1. 초정밀 사출 성형 기술",
      tech: "Ultra-Precision Injection Molding Technology",
      number: "10-2022-XXXXX",
      date: "202X년 0X월 0일",
      summary: [
        "✔ 나노 단위 정밀도를 갖춘 사출 성형 공정",
        "✔ 불량률 감소 및 생산 효율 20% 향상",
        "✔ 의료·전자·자동차 부품 제조 적용 가능",
      ],
    },
  },
  {
    title: "AI 기반 스마트 공장 최적화",
    description: "AI를 활용한 스마트 공장 최적화 기술",
    details: {
      subtitle: "2. AI 기반 스마트 공장 최적화",
      tech: "AI-based Smart Factory Optimization",
      number: "10-2022-XXXXX",
      date: "202X년 0X월 0일",
      summary: [
        "✔ AI 기반 데이터 분석을 통한 자동 최적화",
        "✔ 생산 공정에서의 에너지 효율 극대화",
        "✔ 예측 유지보수 및 장애 예방 시스템 적용",
      ],
    },
  },
  {
    title: "고속 3D 프린팅 기술",
    description: "차세대 3D 프린팅 기술로 빠른 제작 가능",
    details: {
      subtitle: "3. 고속 3D 프린팅 기술",
      tech: "High-Speed 3D Printing Technology",
      number: "10-2022-XXXXX",
      date: "202X년 0X월 0일",
      summary: [
        "✔ 기존 대비 2배 빠른 출력 속도",
        "✔ 정밀도 유지 및 소재 다양화 가능",
        "✔ 제조업, 의료 및 연구 분야 적용 가능",
      ],
    },
  },
];

const ResearchPage = () => {
  return (
    <div>
      {/* 🟦 고정 배경 섹션 */}
      <div className="hero-section-re">
        <h1 className="hero-title">연구 개발</h1>
      </div>

      {/* 🟦 설명 섹션 반복 */}
      {researchData.map((item, index) => (
        <div key={index} className="content-section">
          <div className="text-container">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
          <div className="info-container">
            <h3>{item.details.subtitle}</h3>
            <p><strong>({item.details.tech})</strong></p>
            <p><strong>등록번호:</strong> {item.details.number}</p>
            <p><strong>등록일:</strong> {item.details.date}</p>
            <h4>특허 개요:</h4>
            <ul>
              {item.details.summary.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResearchPage;
