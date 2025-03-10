import React, { useEffect, useRef, useState } from "react";
import "../CommonCSS/CommonProduct.css";
import img1 from "../../assets/aff/temp1.png"; // 김치냉장고 부품 이미지
import img2 from "../../assets/aff/temp2.png"; // 딤채쿡 부품 이미지
import img3 from "../../assets/aff/temp3.png"; // 냉장고 선반류 이미지

function GlobalProduct() {
  const products = [
    {
      name: "김치냉장고 부품",
      engName: "Kimchi Refrigerator Parts",
      description:
        "새한글로벌은 위니아글로벌과 협력하여 김치냉장고의 핵심 부품을 생산 및 공급합니다.",
      category: "가전 부품",
      image: img1,
    },
    {
      name: "딤채쿡 부품",
      engName: "Dimchae Cook Components",
      description:
        "대유중공업과 함께 딤채쿡 전기밥솥의 주요 부품을 제조하여 품질과 신뢰성을 보장합니다.",
      category: "주방 가전 부품",
      image: img2,
    },
    {
      name: "냉장고 선반 및 내부 부품",
      engName: "Refrigerator Shelves & Interior Parts",
      description:
        "삼성전자 2차 협력사로서 냉장고 내부 선반 및 필수 부품을 생산하고 있습니다.",
      category: "가전 내부 부품",
      image: img3,
    },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    // 페이지가 로드되면 자동으로 fade-in 효과 실행
    setTimeout(() => {
      setIsVisible(true);
    }, 100); // 0.1초 후 자동으로 페이드인

  }, []);

  return (
    <div ref={ref} className={`product ${isVisible ? "fade-in" : ""}`}>
      <h2 className="product-title">주요 생산 제품</h2>
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
