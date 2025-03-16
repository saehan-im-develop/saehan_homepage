import React, { useEffect, useRef, useState } from "react";
import "../IMComponent/IMProduct.css";
import img1 from "@/assets/aff/ai8.png"; // copygloo 이미지

function IMProduct() {
  const product = {
    name: "AI 기반 문서 자동화 플랫폼 (Copygloo)",
    engName: "AI-Powered Document Automation (Copygloo)",
    description: (
      <>
        Copygloo는 LLM 기반 문서 자동화 솔루션으로, <br />
        누구나 전문적인 문서를 쉽고 빠르게 생성하고 최적화할 수 있도록 지원합니다.
      </>
    ),
    category: "문서 자동화 / AI 업무 지원",
    image: img1,
    link: "https://copygloo.com", // 공식 홈페이지 링크
  };

  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 100); 
  }, []);

  return (
    <div ref={ref} className={`product ${isVisible ? "fade-in" : ""}`}>
      <h2 className="product-title">프로젝트 소개</h2>
      <div className="product-card-im">
        <img src={product.image} alt={product.name} className="product-image-im" />
        <div className="product-info">
          <h3>{product.name}</h3>
          <p className="product-eng-name">{product.engName}</p>
          <p>{product.description}</p>
          <p><strong>카테고리:</strong> {product.category}</p>
          <a href={product.link} target="_blank" className="cta-button">
            copygloo 더 알아보기 →
          </a>
        </div>
      </div>
    </div>
  );
}

export default IMProduct;
