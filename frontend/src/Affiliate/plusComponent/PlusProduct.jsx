import React, { useEffect, useRef, useState } from "react";
import "../CommonCSS/CommonProduct.css"
import img1 from "../../assets/aff/temp1.png"
import img2 from "../../assets/aff/temp2.png"
import img3 from "../../assets/aff/temp3.png"

function PlusProduct() {
  const products = [
    {
      name: "고급형 플라스틱 미스트 펌프 용기",
      engName: "Premium Plastic Mist Pump Bottle",
      description:
        "새한플러스에서 개발한 고급형 플라스틱 미스트 펌프 용기는 정밀한 사출 성형 기술을 통해 제작되어 우수한 내구성과 세련된 디자인을 자랑합니다.",
      material: "PP, PETG",
      use: "화장품, 미용 제품, 스킨케어, 소독제 등",
      image: img1,
    },
    {
      name: "고강도 플라스틱 필터 커넥터",
      engName: "High-Strength Plastic Filter Connector",
      description:
        "정밀한 사출 공정을 통해 제작된 고강도 플라스틱 필터 커넥터는 내구성과 밀폐성이 뛰어난 제품입니다.",
      material: "PP, PEEK, PTFE",
      use: "정밀 필터 시스템, 반도체 제조, 의료기기",
      image: img2,
    },
    {
      name: "고강도 플라스틱 필터 커넥터",
      engName: "High-Strength Plastic Filter Connector",
      description:
        "산업 환경에서도 안정적인 성능을 유지하며, 정밀한 가공으로 완벽한 밀폐력을 제공합니다.",
      material: "PP, PEEK, PTFE",
      use: "정밀 필터 시스템, 반도체 제조, 의료기기",
      image: img3,
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
            <p><strong>소재:</strong> {product.material}</p>
            <p><strong>용도:</strong> {product.use}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PlusProduct;
