import React, { useEffect, useRef, useState } from "react";
import "../CommonCSS/CommonProduct.css"
import img1 from "../../assets/aff/ai1.png"
import img2 from "../../assets/aff/ai2.png"
import img3 from "../../assets/aff/ai3.png"
import img4 from "../../assets/aff/ai4.png"
import img5 from "../../assets/aff/ai5.png"

function IMProduct() {
  const products = [
    {
      name: "AI 기반 물류 최적화 시스템",
      engName: "AI-Powered Logistics Optimization",
      description:
        "새한아이엠의 AI 물류 시스템은 머신러닝을 활용하여 재고 관리, 수요 예측 및 물류 프로세스를 자동화합니다.",
      category: "물류/운송 AI 솔루션",
      image: img1,
    },
    {
      name: "AI 소프트웨어 개발 플랫폼",
      engName: "AI Software Development Platform",
      description:
        "개발자를 위한 AI 기반 코드 자동 완성 및 최적화 솔루션을 제공합니다.",
      category: "소프트웨어 개발",
      image: img2,
    },
    {
      name: "사이버 보안 AI",
      engName: "AI-Powered Cyber Security",
      description:
        "새한아이엠의 AI 보안 솔루션은 실시간 위협 감지 및 대응을 통해 사이버 공격으로부터 기업을 보호합니다.",
      category: "보안/네트워크",
      image: img3,
    },
    {
      name: "AI 기반 협업 도구",
      engName: "AI-Powered Collaboration Tools",
      description:
        "기업 내 협업을 극대화하는 스마트 미팅, 프로젝트 관리 및 데이터 공유 플랫폼을 제공합니다.",
      category: "업무 생산성",
      image: img4,
    },
    {
      name: "자동화된 AI 운영 시스템",
      engName: "Automated AI Operations",
      description:
        "AI 기반 서버 및 IT 인프라 관리 솔루션으로, 장애 감지 및 자동 복구 기능을 제공합니다.",
      category: "IT 인프라 관리",
      image: img5,
    },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    // ✅ 페이지가 로드되면 자동으로 fade-in 효과 실행
    setTimeout(() => {
      setIsVisible(true);
    }, 100); // 0.1초 후 자동으로 페이드인

  }, []);

  return (
    <div ref={ref} className={`product ${isVisible ? "fade-in" : ""}`}>
      <h2 className="product-title">제품 설명</h2>
      {products.map((product, index) => (
        <div key={index} className="product-card">
          <img src={product.image} alt={product.name} className="product-image" />
          <div className="product-info">
            <h3>{product.name}</h3>
            <p className="product-eng-name">{product.engName}</p>
            <p>{product.description}</p>
            <p><strong>카테고리:</strong> {product.category}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default IMProduct;
