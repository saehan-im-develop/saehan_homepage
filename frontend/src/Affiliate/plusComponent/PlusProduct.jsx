import React, { useEffect, useRef, useState } from "react";
import "../CommonCSS/CommonProduct.css";
import img1 from "@/assets/Areal/plus/pp1.jpg"; // 김치냉장고 부품
import img2 from "@/assets/Areal/plus/pp2.jpg"; // 냉장고 선반류
import img3 from "@/assets/Areal/plus/pp3.jpg"; // 산업용 플라스틱 부품

function PlusProduct() {
  const products = [
    {
      name: "",
      codeNO: "",
      description:
        "",
      code: "",
      category: "",
      give : "",
      image: img1,
    },
    {
      name: "",
      codeNO: "",
      description:
        "",
      code: "",
      category: "",
      give : "",
      image: img2,
    },
    {
      name: "",
      codeNO: "",
      description:
        "",
      code: "",
      category: "",
      give : "",
      image: img3,
    },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 100); 
  }, []);

  return (
    <div ref={ref} className={`product ${isVisible ? "fade-in" : ""}`}>
      <h2 className="product-title">주요 생산 제품</h2>
      {products.map((product, index) => (
        <div key={index} className="product-card">
          <img src={product.image} alt={product.name} className="product-image" />
          <div className="product-info">
            <h3>{product.name}</h3>
            {/* <p><strong>납품 업체:</strong> {product.give}</p>
            <p className="product-eng-name">{product.code}</p>
            <p>{product.codeNO}</p>
            <p>{product.description}</p>
            <p>{product.category}</p> */}
          </div>
        </div>
      ))}
    </div>
  );
}

export default PlusProduct;
