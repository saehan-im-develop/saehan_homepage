import React, { useEffect, useRef, useState } from "react";
import "../Common/CommonProduct.css";
import CommonProductModal from "../Common/CommonProductModal";
// 김치냉장고 부품
// 냉장고 선반류
// 산업용 플라스틱 부품
// 세탁기 부품
// 세탁기 부품
// 김치냉장고 부품
// 김치냉장고 부품
// 김치냉장고 부품

function HightechProduct() {
  const products = [
    {
      name: "BORA-PJT FAN MIXED FLOW",
      codeNO: "품목코드 : DB67-01523A X 005",
      // description:
      //   "KIM JIN-BAEK 2017",
      // code: "품목코드 : RF9000C",
      category: "재질 : ABS (아크릴로니트릴 부타디엔 스티렌)",
      // give : "[주] 한영 PNS",
      image: "/assets/Areal/high/p1.webp", // 김치냉장고 부품
    },
    {
      name: "DE8000MK-PJT BLADE-BLOWER",
      codeNO: "품목코드 : DC66-00980A",
      // description:
      //   "KIM JIN-BAEK 2017",
      // code: "RF9000C",
      category: "재질 : ABS (아크릴로니트릴 부타디엔 스티렌)",
      // give : "[주] 한영 PNS",
      image: "/assets/Areal/high/p2.webp", // 김치냉장고 부품
    },
    {
      name: "BLOWER",
      codeNO: "품목코드 : DB67-01367AX005",
      // description:
      //   "CHO MIN-GI 2018",
      // code: "RF9000C",
      category: "재질 : ABS (아크릴로니트릴 부타디엔 스티렌)",
      // give : "[주] 한영 PNS",
      image: "/assets/Areal/high/p3.webp", // 김치냉장고 부품
    },
    {
      name: "CAP DOOR-REF UP LEFT , CAP DOOR-REF UP RIGHT",
      codeNO: "품목코드 : DA67-05574A X 001",
      // description:
      //   "SEOUNWOO KIM 2022",
      // code: "RF9000C",
      category: "재질 : ABS (아크릴로니트릴 부타디엔 스티렌)",
      give: "[주] 한영 PNS",
      image: "/assets/Areal/high/h1.webp", // 김치냉장고 부품
    },
    // {
    //   name: "HOUSING FAN REAR",
    //   codeNO: "DC61-05916A",
    //   description: "",
    //   code: "",
    //   category: "",
    //   give : "[주] 한맥전자",
    //   image: "/assets/Areal/high/h2.webp" // 냉장고 선반류
    // },
    {
      name: "SEME GUIDE FILTER",
      codeNO: "품목코드 : DC97-20718A",
      description: "",
      code: "",
      category: "재질 : ABS (아크릴로니트릴 부타디엔 스티렌)",
      give: "[주] 한맥전자",
      image: "/assets/Areal/high/h3.webp", // 산업용 플라스틱 부품
    },
    {
      name: "SUPPORT ICE MAKER",
      codeNO: "품목코드 : DA67-05574A X 001",
      // description:
      //   "HOOHEOL CHO, 2020",
      // code: "RF9000A",
      category: "재질 : HIPS(하이 임팩트 폴리스티렌)",
      give: "[주] 대창",
      image: "/assets/Areal/high/h4.webp", // 세탁기 부품
    },
    {
      name: "CASE ICE ROOM OUTER",
      codeNO: "품목코드 : DA61-08171",
      // description:
      //   "HOOHEOL CHO, 2020",
      // code: "RF9000A",
      category: "재질 : HIPS(하이 임팩트 폴리스티렌)",
      give: "[주] 대창",
      image: "/assets/Areal/high/h5.webp", // 세탁기 부품
    }
  ];

  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

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
              <p className="product-eng-name">{product.code}</p>
              <p>{product.codeNO}</p>
              <p>{product.description}</p>
              <p>{product.category}</p>
            </div>
            <div className="product-btn-group">
              <button className="product-btn" onClick={() => { setModalImage(product.image); setModalOpen(true); }}>자세히보기</button>
              <button className="product-btn info">제조센터 정보</button>
            </div>
          </div>
        ))}
      </div>
      <CommonProductModal open={modalOpen} imageUrl={modalImage} onClose={() => setModalOpen(false)} />
    </div>
  );
}

export default HightechProduct;
