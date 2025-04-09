import React, { useEffect, useRef, useState } from "react";
import "../Common/CommonProduct.css";
import img2 from "@/assets/Areal/plus/npp2.png";
import img4 from "@/assets/Areal/plus/npp4.png";
import img5 from "@/assets/Areal/plus/npp5.png";
import img6 from "@/assets/Areal/plus/npp6.png";
import img8 from "@/assets/Areal/plus/npp8.png";
import img9 from "@/assets/Areal/plus/npp9.png";
import img11 from "@/assets/Areal/plus/npp11.png";
import img12 from "@/assets/Areal/plus/pp1.jpg";
import img13 from "@/assets/Areal/plus/pp2.png";
import img14 from "@/assets/Areal/plus/pp3.png";
import img15 from "@/assets/Areal/plus/pp4.png";

function PlusProduct() {
  const products = [
    {
      name: "ASSY LEVER MAGNET",
      codeNO: "DC-95-0238",
      // model: "QV",
      // category: ">PC+ASA<",
      give: "서연인테크(정연내장)",
      image: img12,
    },
    {
      name: "GEAR CAM",
      codeNO: "3211-0044",
      // model: "QV",
      // category: ">PC+ASA<",
      give: "서연인테크(정연내장)",
      image: img13,
    },
    {
      name: "CASE ICE MAKER R #1",
      codeNO: "3211-0042",
      model: "DI-P2",
      category: "1X1X2-2 ABS",
      give: "[주] 대창",
      image: img5,
    },
    {
      name: "COVER ICE MAKER R #3",
      codeNO: "3211-0043",
      model: "DI-P2",
      category: "1X1X4-2 ABS",
      give: "[주] 대창",
      image: img14,
    },
    // {
    //   name: "GEAR CAM #1",
    //   codeNO: "3211-0044",
    //   model: "DI-P2",
    //   category: "POM 1X1X4-4",
    //   // give: "[주] 대창",
    //   image: img7,
    // },
    {
      name: "MOLDING-RR BPR FASCIA",
      codeNO: "42926227",
      model: "QV",
      category: ">PC+ASA<",
      give: "서연인테크(정연내장)",
      image: img15,
    },
    {
      name: "BRKT-FR UPR TRIM JOINT",
      codeNO: "81191-6D000",
      model: "QV",
      category: ">PC+ASA<",
      give: "서연인테크(정연내장)",
      image: img2,
    },
    {
      name: "CORE-FR DR INR CVR,LH / CORE-FR DR INR CVR,RH",
      codeNO: "81250-6D000 , 81260-6D000",
      model: "QV",
      category: ">PC+ABS<",
      give: "서연인테크(정연내장)",
      image: img4,
    },
    {
      name: "DR FRT HDL C/PULL LH(자동)",
      codeNO: "81210-5H001",
      model: "VT-CAR",
      category: ">ABS<",
      give: "서연인테크(정연내장)",
      image: img6,
    },
    {
      name: "GRILL-SPEAKER RR",
      codeNO: "96365-7A100",
      model: "EG-CAR",
      category: ">PP+E/P-TD10<",
      give: "서연인테크(정연내장)",
      image: img8,
    },
    {
      name: "LWR-FR DR GRIP HDL LH",
      codeNO: "81230-6D000",
      model: "QV-CAR",
      category: ">PP+E/P-(GX+TD)14<",
      give: "서연인테크(정연내장)",
      image: img9,
    },
    {
      name: "UPR-FR- DR GRIP HDL, LH / UPR-FR- DR GRIP HDL, RH",
      codeNO: "812110-6D000 , 812120-6D000",
      model: "QV",
      category: ">ABS<",
      give: "서연인테크(정연내장)",
      image: img11,
    },


  ];

  const [category, setCategory] = useState("전체");
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 100);
  }, []);

  // 카테고리에 따른 필터링
  const filteredProducts = products.filter((product) => {
    if (category === "전체") return true;
    if (category === "자동차 부품") return product.give.includes("서연인테크");
    if (category === "가전 부품") return !product.give.includes("서연인테크");
    return true;
  });

  return (
    <div ref={ref} className={`product ${isVisible ? "fade-in" : ""}`}>
      {/* <h2 className="product-title">주요 생산 제품</h2> */}
      
      {/* 드롭다운 추가 */}
      <div className="filter-container">
        <select id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="전체">전체</option>
          <option value="자동차 부품">자동차 부품</option>
          <option value="가전 부품">가전 부품</option>
        </select>
      </div>

      {filteredProducts.map((product, index) => (
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

export default PlusProduct;
