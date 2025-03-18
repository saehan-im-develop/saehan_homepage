import React, { useEffect, useRef, useState } from "react";
import "../CEO/CEOMain.css";
import image from "@/assets/kim2.png";
import backgroundImage from "@/assets/011.jpg"; // ✅ 추가된 상단 배경 이미지

function CEOMain() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
    if (bgRef.current) {
      observer.observe(bgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      {/* ✅ 상단 배경 이미지 */}
      <div style={{ marginBottom: "30px" }}> {/* ✅ 기존 50px → 30px으로 줄임 */}
        <div ref={bgRef} className={`ceo-header-bg ${isVisible ? "fade-in" : ""}`}>
          <img src={backgroundImage} alt="CEO 인사말 배경" className="ceo-header-img" />
        </div>
      </div>

      {/* ✅ CEO 정보 박스 */}
      <div ref={ref} className={`ceo-container ${isVisible ? "fade-in" : ""}`}>
        <div className="ceo-header">CEO 인사말</div>
        <div className="ceo-box">
          <div className="ceo-content">
            {/* ✅ CEO 이미지 + 이름을 묶음 */}
            <div className="ceo-image-container">
              <img src={image} alt="새한그룹 회장 김원만" className="ceo-image" />
              <h3 className="ceo-name">새한그룹 회장 김원만</h3>
            </div>

            {/* ✅ CEO 텍스트 */}
            <div className="ceo-text">
              <h2>새한 그룹 - 혁신과 기술의 선도 기업</h2>
              <p>
              안녕하십니까.
              새한그룹의 CEO 김원만입니다.
              </p>
              <p>
              우리 기업은 경계를 허물고 글로벌 시장으로 도약하는 비전을 가지고 있습니다. 
              변화하는 시장 환경 속에서 끊임없이 혁신하고, 
              한계를 넘어서기 위한 도전을 멈추지 않았습니다.
              </p>
              <p>
              우리는 기술과 사람, 그리고 미래에 대한 투자를 통해 지속 가능한 성장을 이루어 나가고자 합니다.
              세계로 뻗어나가는 새한그룹의 도전을 함께 지켜봐 주시고, 
              더 큰 미래를 향한 우리의 여정에 많은 관심과 응원을 부탁드립니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CEOMain;
