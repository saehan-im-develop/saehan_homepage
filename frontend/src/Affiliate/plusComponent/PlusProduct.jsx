import React, { useEffect, useRef, useState } from "react";
import "../Common/CommonProduct.css";
// img2: npp2.webp
// img4: npp4.webp
// img5: npp5.webp
// img6: npp6.webp
// img8: npp8.webp
// img9: npp9.webp
// img11: npp11.webp
// img12: pp1.webp
// img13: pp2.webp
// img14: pp3.webp
// img15: pp4.webp

function PlusProduct() {
  const products = [
    {
      name: "ASSY LEVER MAGNET",
      codeNO: "재질 : POM (폴리옥시메틸렌)",
      model: "품목코드 : DC-95-0238",
      // category: "생산 기계 : 100TON",
      give: "서연인테크(정연내장)",
      image: "/assets/Areal/plus/pp1.webp", // img12
    },
    {
      name: "GEAR CAM",
      codeNO: "재질 : POM (폴리옥시메틸렌)",
      model: "품목코드 : 3211-0044",
      // category: "생산 기계 : 120TON",
      give: "서연인테크(정연내장)",
      image: "/assets/Areal/plus/pp2.webp", // img13
    },
    {
      name: "CASE ICE MAKER R #1",
      codeNO: "재질 : ABS (아크릴로니트릴 부타디엔 스티렌)",
      model: "품목코드 : 3211-0042",
      // category: "1X1X2-2 ABS",
      give: "[주] 대창",
      image: "/assets/Areal/plus/npp5.webp", // img5
    },
    {
      name: "COVER ICE MAKER R #3",
      codeNO: "재질 : ABS (아크릴로니트릴 부타디엔 스티렌)",
      model: "품목코드 : 3211-0043",
      // category: "1X1X4-2 ABS",
      give: "[주] 대창",
      image: "/assets/Areal/plus/pp3.webp", // img14
    },
    {
      name: "MOLDING-RR BPR FASCIA",
      codeNO: "재질 : ASA (아크릴로니트릴 스티렌 아크릴레이트)",
      model: "품목코드 : 42926227",
      // category: ">PC+ASA<",
      give: "서연인테크(정연내장)",
      image: "/assets/Areal/plus/pp4.webp", // img15
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
