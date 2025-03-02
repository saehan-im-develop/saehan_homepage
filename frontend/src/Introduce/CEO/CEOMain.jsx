import React, { useEffect, useRef, useState } from "react";
import "../CEO/CEOMain.css";
import image from "../../assets/kim2.png";

function CEOMain() {
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
    <div ref={ref} className={`ceo-container ${isVisible ? "fade-in" : ""}`}>
      {/* ✅ 추가된 상단 CEO 인사말 */}
      <div className="ceo-header">CEO 인사말</div>
      <div className="ceo-content">
        <img src={image} alt="새한그룹 회장 김원만" className="ceo-image" />
        <div className="ceo-text">
          <h2>새한 그룹 - 혁신과 기술의 선도 기업</h2>
          <p>
            새한 그룹은 사출 금형, 반도체 생산, 인공지능(AI) 개발까지  
            폭넓은 기술력을 보유한 종합 제조·기술 기업입니다.
          </p>
          <p>
            우리는 정밀 사출 금형 기술을 바탕으로 자동차 부품, 전자기기 케이스 등  
            다양한 산업에 최적화된 고품질 부품을 공급하고 있으며,  
            반도체 제조 분야에서도 첨단 공정을 통해 글로벌 시장에서 경쟁력을 확보하고 있습니다.
          </p>
          <p>
            또한, 4차 산업혁명 시대를 선도하기 위해 인공지능 기술 연구개발에도  
            적극적으로 투자하고 있습니다. 스마트 제조 시스템, 자동화 설비,  
            데이터 기반 공정 최적화를 통해 생산성을 극대화하며,  
            AI 기반 예측 분석 및 품질 관리 시스템을 구축하여 더욱 정교한  
            생산 환경을 조성하고 있습니다.
          </p>
          <p>
            새한 그룹은 기술 혁신과 품질 향상을 최우선 가치로 삼아,  
            글로벌 시장에서 신뢰받는 기업으로 자리매김하고자 합니다.  
            앞으로도 지속적인 연구개발과 도전 정신을 바탕으로  
            미래 산업을 이끌어가는 기업이 되겠습니다.
          </p>
          <h3 className="ceo-name">새한그룹 회장 김원만</h3>
        </div>
      </div>
    </div>
  );
}

export default CEOMain;
