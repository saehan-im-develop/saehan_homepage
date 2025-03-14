import React, { useEffect } from "react";
import "../DicCssFile/TechData.css"
import img1 from "@/assets/docu/tech01.png"

const techDataList = [
  {
    title: "초정밀 사출 기술 (Ultra-Precision Injection Molding Technology)",
    number: "10-2022-XXXXX",
    date: "2022년 등록",
    description: [
      "나노 단위 정밀도를 갖춘 초소형 부품 생산 공정",
      "생산성 증대 및 불량률 30% 감소",
      "특수소재 적용 및 복합 제조 가능",
    ],
    image: img1,
  },
  {
    title: "AI 기반 스마트 공장 최적화 시스템 (AI-Powered Smart Factory Optimization System)",
    number: "10-2022-XXXXX",
    date: "2022년 등록",
    description: [
      "AI 기반 데이터 분석을 통한 자동 최적화",
      "생산 공정에서의 에너지 효율 극대화",
      "예측 유지보수 및 장애 예방 시스템 적용",
    ],
    image: img1,
  },
  {
    title: "초정밀 사출 기술 (Ultra-Precision Injection Molding Technology)",
    number: "10-2022-XXXXX",
    date: "2022년 등록",
    description: [
      "나노 단위 정밀도를 갖춘 초소형 부품 생산 공정",
      "생산성 증대 및 불량률 30% 감소",
      "특수소재 적용 및 복합 제조 가능",
    ],
    image: img1,
  },
  {
    title: "초정밀 사출 기술 (Ultra-Precision Injection Molding Technology)",
    number: "10-2022-XXXXX",
    date: "2022년 등록",
    description: [
      "나노 단위 정밀도를 갖춘 초소형 부품 생산 공정",
      "생산성 증대 및 불량률 30% 감소",
      "특수소재 적용 및 복합 제조 가능",
    ],
    image: img1,
  },
];

const TechData = () => {
  useEffect(() => {
    const items = document.querySelectorAll(".techdata-item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.1 } // 10% 보일 때 애니메이션 실행
    );

    items.forEach((item) => observer.observe(item));

    return () => items.forEach((item) => observer.unobserve(item));
  }, []);

  return (
    <div className="techdata-container">
      {/* 🟦 고정 배경 섹션 */}
      <div className="hero-section-tech">
        <h1 className="hero-title-tech">기술 자료</h1>
      </div>

      <p id="tech-intro">새한 그룹의 최신 기술 연구 자료를 확인하세요.</p>
      <div className="techdata-list">
        {techDataList.map((data, index) => (
          <div key={index} className="techdata-item">
            <img src={data.image} alt={data.title} className="techdata-image" />
            <div className="techdata-info">
              <h3>{data.title}</h3>
              <p>등록번호: {data.number}</p>
              <p>등록일: {data.date}</p>
              <ul>
                {data.description.map((desc, i) => (
                  <li key={i}> {desc}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechData;
