import React, { useEffect, useRef, useState } from "react";
import "../CommonCSS/CommonProduct.css"

function HightechProduct() {
    const products = [
      {
        name: "고성능 반도체 메모리",
        engName: "High-Performance Semiconductor Memory",
        description:
          "새한하이테크의 고성능 반도체 메모리는 최첨단 반도체 공정과 정밀한 설계를 바탕으로 제작된 제품으로, 데이터 처리 속도와 안정성을 극대화한 메모리 솔루션을 제공합니다.",
        material: "고급 반도체 웨이퍼",
        use: "서버, 데이터센터, AI 연산, 모바일 및 컴퓨터 하드웨어",
        image: "/assets/001.png",
      },
      {
        name: "고성능 서버 메모리 모듈",
        engName: "High-Performance Server Memory Module",
        description:
          "최신 반도체 기술을 적용하여 고속 데이터 처리와 안정적인 시스템 운영을 지원하는 메모리 모듈입니다.",
        material: "고품질 PCB 및 반도체 집적 회로",
        use: "데이터센터, 클라우드 서버, AI 연산, 금융·기업용 서버 시스템",
        image: "/assets/002.png",
      },
      {
        name: "정밀 플라스틱 산업용 암",
        engName: "High-Precision Plastic Industrial Arm",
        description:
          "새한하이테크의 정밀 플라스틱 산업용 암(Arm) 부품은 정밀 사출 성형 기술을 활용하여 제작된 제품으로, 기계적 강도와 내구성이 우수하여 다양한 산업 환경에서 안정적인 성능을 제공합니다.",
        material: "고강도 플라스틱(PEEK, PA66, POM)",
        use: "자동화 설비, 로봇 부품, 반도체 기계, 제조 공정 시스템",
        image: "/assets/003.png",
      },
      {
        name: "고정밀 전자 커넥터",
        engName: "High-Precision Electronic Connector",
        description:
          "새한하이테크의 고정밀 전자 커넥터는 정밀 사출 성형 및 고품질 금속 소재를 적용하여 전기 신호의 안정적인 연결과 내구성을 보장하는 터미널 블록입니다.",
        material: "고강도 난연성 플라스틱(PBT, PA66) + 고전도성 금속(구리, 스테인리스)",
        use: "산업용 전원 공급 장치, PCB 회로 연결, 전자 제어 시스템",
        image: "/assets/004.png",
      },
      {
        name: "고성능 DDR5 메모리 칩",
        engName: "High-Performance DDR5 Memory Chip",
        description:
          "새한하이테크의 DDR5 메모리 칩은 차세대 고속 데이터 처리 기술을 적용하여 서버, 데이터센터, 고성능 컴퓨터(HPC) 환경에서 안정적인 성능을 제공하는 DRAM 솔루션입니다.",
        material: "최신 반도체 공정 기반 칩",
        use: "서버, AI 연산, 데이터센터, 고성능 게이밍 PC, 금융/클라우드 컴퓨팅",
        image: "/assets/005.png",
      },
    ];
  
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setIsVisible(true);
          }
        },
        { threshold: 0.3 }
      );
  
      if (ref.current) {
        observer.observe(ref.current);
      }
  
      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
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

export default HightechProduct;
