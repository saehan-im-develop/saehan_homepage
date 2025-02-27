import React, { useEffect, useRef, useState } from "react";
import "../CommonCSS/CommonProduct.css"

function GlobalProduct() {
  const products = [
    {
      name: "글로벌 무역 솔루션",
      engName: "Global Trade Solutions",
      description: "새한글로벌의 무역 솔루션은 글로벌 비즈니스 운영을 위한 맞춤형 수출입 관리 및 물류 최적화를 제공합니다.",
      category: "무역/유통",
      image: "/assets/sample1.png",
    },
    {
      name: "해외 시장 진출 컨설팅",
      engName: "Overseas Market Expansion Consulting",
      description: "해외 시장 분석, 현지화 전략, 네트워크 구축을 통한 최적의 시장 진입 솔루션을 제공합니다.",
      category: "컨설팅",
      image: "/assets/sample2.png",
    },
    {
      name: "산업용 장비 및 기술 솔루션",
      engName: "Industrial Equipment & Technology Solutions",
      description: "새한글로벌의 기술 기반 산업용 장비 공급 및 맞춤형 엔지니어링 솔루션을 제공합니다.",
      category: "기술/제조",
      image: "/assets/sample3.png",
    },
  ];

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

export default GlobalProduct;
