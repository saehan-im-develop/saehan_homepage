import React, { useEffect, useRef, useState } from "react";
import "../CommonCSS/CommonProduct.css";

function HightechProduct() {
  const products = [
    {
      name: "고성능 반도체 메모리",
      engName: "High-Performance Semiconductor Memory",
      description:
        "새한하이테크의 고성능 반도체 메모리는 최첨단 반도체 공정과 정밀한 설계를 바탕으로 제작된 제품으로, 데이터 처리 속도와 안정성을 극대화한 메모리 솔루션을 제공합니다.",
      material: "고급 반도체 웨이퍼",
      use: "서버, 데이터센터, AI 연산, 모바일 및 컴퓨터 하드웨어",
      image: "/assets/001.png",
    },
    {
      name: "고성능 서버 메모리 모듈",
      engName: "High-Performance Server Memory Module",
      description:
        "최신 반도체 기술을 적용하여 고속 데이터 처리와 안정적인 시스템 운영을 지원하는 메모리 모듈입니다.",
      material: "고품질 PCB 및 반도체 집적 회로",
      use: "데이터센터, 클라우드 서버, AI 연산, 금융·기업용 서버 시스템",
      image: "/assets/002.png",
    },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    // ✅ 페이지가 로드될 때 자동으로 fade-in 효과 적용
    setTimeout(() => {
      setIsVisible(true);
    }, 100); // 0.1초 뒤 자동 페이드인
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
            <p><strong>소재:</strong> {product.material}</p>
            <p><strong>용도:</strong> {product.use}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HightechProduct;
