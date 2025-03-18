import React from "react";
import "../CEO/CEOMain.css";
import ceo from "@/assets/Areal/ceomain.png";

const CEOMain = () => {
  return (
    <section>
      <h1 className="ceo-header">CEO 인사말</h1>
      <div className="ceo-section">
        {/* 왼쪽 CEO 이미지 */}
        <div className="ceo-image">
          <img src={ceo} alt="CEO 김원만" />
        </div>

        {/* 오른쪽 텍스트 박스 */}
        <div className="ceo-container">
          <div className="ceo-text">
            <h2 className="ceo-title">
              <span className="highlight">혁신과 기술의 선도 기업</span>
            </h2>
            <p className="ceo-message">
              안녕하십니까. 새한그룹의 CEO 김원만입니다.
              <br />
              우리 기업은 경계를 허물고 글로벌 시장으로 도약하는 비전을 가지고 있습니다.
              <br />
              변화하는 시장 환경 속에서 끊임없이 혁신하고, 한계를 넘어가기 위한 도전을 멈추지 않겠습니다.
            </p>
            <p className="ceo-message">
              우리는 기술과 사람, 그리고 미래에 대한 투자를 통해 <br />
              지속 가능한 성장을 이루어 나가고자 합니다.
              세계로 뻗어나가는 새한그룹의 도전을 함께 지켜봐 주시고, 
              <br />더 큰 미래를 향한 우리의 여정에 많은 관심과 응원을 부탁드립니다.
            </p>
            <h3 className="ceo-name">새한그룹 회장 김원만</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CEOMain;
