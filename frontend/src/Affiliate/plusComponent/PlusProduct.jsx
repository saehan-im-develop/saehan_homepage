import React, { useEffect, useRef, useState } from "react";
import "../CommonCSS/CommonProduct.css";
import img1 from "../../assets/aff/temp1.png"; // 김치냉장고 부품
import img2 from "../../assets/aff/temp2.png"; // 냉장고 선반류
import img3 from "../../assets/aff/temp3.png"; // 산업용 부품

function PlusProduct() {
  const products = [
    {
      name: "김치냉장고 부품",
      engName: "Kimchi Refrigerator Components",
      description:
        "새한플러스는 위니아글로벌과 협력하여 김치냉장고의 주요 부품을 생산하며, 최고의 품질과 내구성을 제공합니다.",
      material: "ABS, PP, PC",
      use: "김치냉장고 내부 부품",
      image: img1,
    },
    {
      name: "냉장고 선반 및 내부 부품",
      engName: "Refrigerator Shelves & Interior Parts",
      description:
        "삼성전자와 협력하여 냉장고 내부 선반 및 핵심 부품을 생산합니다. 고품질의 소재와 정밀한 사출 기술을 적용하여 내구성을 극대화합니다.",
      material: "PET, PC, 강화유리",
      use: "냉장고 내부 선반, 도어 포켓, 서랍",
      image: img2,
    },
    {
      name: "산업용 플라스틱 부품",
      engName: "Industrial Plastic Components",
      description:
        "고강도 플라스틱 소재를 활용하여 정밀한 사출 성형 기술을 적용한 산업용 부품을 생산합니다. 자동차 및 전자 부품에도 활용됩니다.",
      material: "POM, PBT, PA66",
      use: "자동차 부품, 전자기기, 산업용 장비",
      image: img3,
    },
    {
      name: "세탁기 부품",
      engName: "Washing Machine Components",
      description:
        "세탁기 내부 주요 부품을 생산하며, 강한 내구성과 정밀한 성형 기술을 통해 고품질 제품을 제공합니다.",
      material: "PP, ABS",
      use: "세탁기 내부 부품 및 외장 부품",
      image: img1, // 추가 이미지 필요
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
            <p><strong>소재:</strong> {product.material}</p>
            <p><strong>용도:</strong> {product.use}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PlusProduct;
