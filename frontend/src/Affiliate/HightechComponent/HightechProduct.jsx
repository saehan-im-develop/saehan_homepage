import React, { useEffect, useRef, useState } from "react";
import "../Common/CommonProduct.css";
import img1 from "@/assets/Areal/high/h1.png"; // 김치냉장고 부품
import img2 from "@/assets/Areal/high/h2.png"; // 냉장고 선반류
import img3 from "@/assets/Areal/high/h3.png"; // 산업용 플라스틱 부품
import img4 from "@/assets/Areal/high/h4.png"; // 세탁기 부품
import img5 from "@/assets/Areal/high/h5.png"; // 세탁기 부품
import img6 from "@/assets/Areal/high/p1.png"; // 김치냉장고 부품
import img7 from "@/assets/Areal/high/p2.png"; // 김치냉장고 부품
import img8 from "@/assets/Areal/high/p3.png"; // 김치냉장고 부품

function HightechProduct() {
  const products = [
    {
      name: "BORA-PJT FAN MIXED FLOW",
      codeNO: "DB67-01523A X 005",
      description:
        "KIM JIN-BAEK 2017",
      // code: "RF9000C",
      category: ">ABS< AW01 A1 , 1x1x1-1",
      // give : "[주] 한영 PNS",
      image: img6,
    },
    {
      name: "DE8000MK-PJT BLADE-BLOWER",
      codeNO: "DC66-00980A",
      // description:
        // "KIM JIN-BAEK 2017",
      // code: "RF9000C",
      category: ">ABS< FRPP+GF15%<AW01-A1 1X1X1",
      // give : "[주] 한영 PNS",
      image: img7,
    },
    {
      name: "BLOWER",
      codeNO: "DB67-01367AX005",
      description:
        "CHO MIN-GI 2018",
      // code: "RF9000C",
      category: ">ABS< AW01-A1 1X1X1-1",
      // give : "[주] 한영 PNS",
      image: img8,
    },
    {
      name: "CAP DOOR-REF UP LEFT , CAP DOOR-REF UP RIGHT",
      codeNO: "DA67-05574A X 001",
      description:
        "SEOUNWOO KIM 2022",
      code: "RF9000C",
      category: ">ABS< A5JU 1X1X2-1 , >ABS< A5JU 1X1X2-2",
      give : "[주] 한영 PNS",
      image: img1,
    },
    // {
    //   name: "HOUSING FAN REAR",
    //   codeNO: "DC61-05916A",
    //   description: "",
    //   code: "",
    //   category: "",
    //   give : "[주] 한맥전자",
    //   image: img2
    // },
    {
      name: "SEME GUIDE FILTER",
      codeNO: "DC97-20718A",
      description:
        "",
      code: "",
      category: "",
      give : "[주] 한맥전자",
      image: img3,
    },
    {
      name: "SUPPORT ICE MAKER",
      codeNO: "DA67-05574A X 001",
      description:
        "HOOHEOL CHO, 2020",
      code: "RF9000A",
      category: ">HIPS< A4EE 1X1X1",
      give : "[주] 대창",
      image: img4,
    },
    {
      name: "CASE ICE ROOM OUTER",
      codeNO: "DA61-08171",
      description:
        "HOOHEOL CHO, 2020",
      code: "RF9000A",
      category: ">HIPS< A4EE 1X1X1",
      give : "[주] 대창",
      image: img5,
    }
  ];

  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    // 페이지가 로드될 때 자동으로 fade-in 효과 적용
    setTimeout(() => {
      setIsVisible(true);
    }, 100); // 0.1초 뒤 자동 페이드인
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
            <p className="product-eng-name">{product.code}</p>
            <p>{product.codeNO}</p>
            <p>{product.description}</p>
            <p>{product.category}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HightechProduct;
