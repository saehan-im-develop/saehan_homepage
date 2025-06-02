import React, { useEffect, useRef, useState } from "react";
import "../Common/CommonProduct.css";

// img1: ng1.webp
// img2: ng2.webp
// img3: ng3.webp
// img5: ng5.webp
// img6: ng6.webp
// img7: ng7.webp
// img8: ng8.webp

function GlobalProduct() {
  const products = [
    {
      name: "CASE KIMCHI LOW(19.5L)" ,
      codeNO: "품목코드 : DA61-02970A-003",
      // model: "WD8000D",
      category: "재질 : PP (폴리프로필렌)",
      image: "/assets/Areal/global/ng1.webp", // img1
    },
    {
      name: "CASE KIMCHI LOW(10.8L)",
      codeNO: "품목코드 : DA61-04591 X 002",
      // model: "WF8000AK",
      category: "재질 : PP (폴리프로필렌)",
      image: "/assets/Areal/global/ng2.webp", // img2
    },
    // {
    //   name: "CASE RINSE",
    //   codeNO: "DC61-05907AX001",
    //   model: "WD8000D",
    //   category: ">PP+TD30%< A4DU 1X2X1-1",
    //   image: "/assets/Areal/global/ng3.webp", // img3
    // },
    // {
    //   name: "GUIDE LEFT",
    //   // codeNO: "DC61-05908AX002",
    //   // model: "WD8000D",
    //   // category: ">PP+TD30%< A4DU 1X2X1-1",
    //   image: "/assets/Areal/global/ng5.webp", // img5
    // },
    // {
    //   name: "CAP DOOR",
    //   // codeNO: "DC61-05908AX002",
    //   // model: "WD8000D",
    //   // category: ">PP+TD30%< A4DU 1X2X1-1",
    //   image: "/assets/Areal/global/ng6.webp", // img6
    // },
    // {
    //   name: "GUARD FAN",
    //   // codeNO: "DC61-05908AX002",
    //   // model: "WD8000D",
    //   // category: ">PP+TD30%< A4DU 1X2X1-1",
    //   image: "/assets/Areal/global/ng7.webp", // img7
    // },
    // {
    //   name: "ASSY CASE KIMCHI-MIDDLE(10.8L)",
    //   // codeNO: "DC61-05908AX002",
    //   // model: "WD8000D",
    //   // category: ">PP+TD30%< A4DU 1X2X1-1",
    //   image: "/assets/Areal/global/ng8.webp", // img8
    // },
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
      <div className="product-list">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
              <h3>{product.name}</h3>
              {/* <p><strong>납품 업체:</strong> {product.give}</p> */}
              <p className="product-eng-name">{product.model}</p>
              <p>{product.codeNO}</p>
              <p>{product.category}</p>
            </div>
            <div className="product-btn-group">
              <button className="product-btn">자세히보기</button>
              <button className="product-btn info">제조센터 정보</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GlobalProduct;
