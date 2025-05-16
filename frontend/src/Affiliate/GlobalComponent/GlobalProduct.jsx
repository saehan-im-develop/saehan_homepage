import React, { useEffect, useRef, useState } from "react";
import "../Common/CommonProduct.css";
import img1 from "@/assets/Areal/global/ng1.png"
import img2 from "@/assets/Areal/global/ng2.png"
// import img3 from "@/assets/Areal/global/ng3.jpg"
// import img5 from "@/assets/Areal/global/ng5.png"
// import img6 from "@/assets/Areal/global/ng6.png"
// import img7 from "@/assets/Areal/global/ng7.png"
// import img8 from "@/assets/Areal/global/ng8.png"

function GlobalProduct() {
  const products = [
    {
      name: "CASE KIMCHI LOW(19.5L)" ,
      codeNO: "품목코드 : DA61-02970A-003",
      // model: "WD8000D",
      category: "재질 : PP (폴리프로필렌)",
      image: img1,
    },
    {
      name: "CASE MIMCHI LOW(10.8L)",
      codeNO: "품목코드 : DA61-04591 X 002",
      // model: "WF8000AK",
      category: "재질 : PP (폴리프로필렌)",
      image: img2,
    },
    // {
    //   name: "CASE RINSE",
    //   codeNO: "DC61-05907AX001",
    //   model: "WD8000D",
    //   category: ">PP+TD30%< A4DU 1X2X1-1",
    //   image: img3,
    // },
    // {
    //   name: "GUIDE LEFT",
    //   // codeNO: "DC61-05908AX002",
    //   // model: "WD8000D",
    //   // category: ">PP+TD30%< A4DU 1X2X1-1",
    //   image: img5 ,
    // },
    // {
    //   name: "CAP DOOR",
    //   // codeNO: "DC61-05908AX002",
    //   // model: "WD8000D",
    //   // category: ">PP+TD30%< A4DU 1X2X1-1",
    //   image: img6,
    // },
    // {
    //   name: "GUARD FAN",
    //   // codeNO: "DC61-05908AX002",
    //   // model: "WD8000D",
    //   // category: ">PP+TD30%< A4DU 1X2X1-1",
    //   image: img7,
    // },
    // {
    //   name: "ASSY CASE KIMCHI-MIDDLE(10.8L)",
    //   // codeNO: "DC61-05908AX002",
    //   // model: "WD8000D",
    //   // category: ">PP+TD30%< A4DU 1X2X1-1",
    //   image: img8,
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
        </div>
      ))}
    </div>
  );
}

export default GlobalProduct;
